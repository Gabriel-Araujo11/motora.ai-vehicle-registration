import "leaflet/dist/leaflet.css";
import { Box } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { VehicleMapProps } from "@/types/types";

export default function VehicleMap({ vehicles }: VehicleMapProps) {
  return (
    <Box
      flex="2"
      border="2px solid"
      borderRadius="20px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{
          width: "100%",
          height: "500px",
          minHeight: "300px",
          borderRadius: "20px",
        }}
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
  );
}
