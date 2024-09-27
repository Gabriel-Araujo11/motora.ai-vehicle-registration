import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { Vehicle } from "@/types/types";

export default function VehicleMap() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await fetch("http://localhost:3001/vehicles");
        const data = await response.json();
        setVehicles(data);
      } catch (error) {
        console.error("Erro ao buscar os veículos:", error);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {vehicles.map((vehicle) => (
        <Marker key={vehicle.id} position={[vehicle.lat, vehicle.lng]}>
          <Popup>
            {vehicle.type} - {vehicle.placa} <br /> Velocidade: {vehicle.speed}{" "}
            km/h
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
