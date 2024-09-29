import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import VehicleForm from "./vehicleForm";
import VehicleList from "./vehicleList";
import { Vehicle } from "@/types/types";
import { BASE_URL } from "@/utils/localhost";
import io from "socket.io-client";
import { Box, Flex } from "@chakra-ui/react";

export default function VehicleMap() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  const handleAddVehicle = async (vehicle: Vehicle) => {
    try {
      const response = await fetch(`${BASE_URL}/vehicles`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vehicle),
      });

      if (response.ok) {
        const newVehicle = await response.json();
        setVehicles((prevVehicles) => [...prevVehicles, newVehicle]);
        return true;
      } else {
        throw new Error("Erro ao cadastrar veículo: " + response.statusText);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await fetch(`${BASE_URL}/vehicles`);
        const data = await response.json();
        setVehicles(data);
      } catch (error) {
        console.error("Erro ao buscar os veículos:", error);
      }
    };

    fetchVehicles();
  }, []);

  useEffect(() => {
    const socket = io(`${BASE_URL}/vehicles/ws`);

    socket.on("vehicle_update", (updatedVehicle: Vehicle) => {
      setVehicles((prevVehicles) =>
        prevVehicles.map((vehicle) =>
          vehicle.id === updatedVehicle.id ? updatedVehicle : vehicle
        )
      );
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Flex direction={{ base: "column", md: "row" }} gap={8} p={2}>
      <Box flex="1" maxW={{ base: "100%", md: "40%" }}>
        <VehicleList />
        <VehicleForm onAddVehicle={handleAddVehicle} />
      </Box>

      <Box flex="2" maxW={{ base: "100%", md: "60%" }}>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ width: "100%", height: "80vh" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {vehicles.map((vehicle) => (
            <Marker key={vehicle.id} position={[vehicle.lat, vehicle.lng]}>
              <Popup>
                {vehicle.type} - {vehicle.placa} <br /> Velocidade:{" "}
                {vehicle.speed} km/h
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
    </Flex>
  );
}
