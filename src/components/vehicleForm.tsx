import { useState } from "react";
import { Box, Button, Input, Select, VStack } from "@chakra-ui/react";
import { VehicleFormProps } from "@/types/types";

export default function VehicleForm({ onAddVehicle }: VehicleFormProps) {
  const [type, setType] = useState("car");
  const [placa, setPlaca] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newVehicle = {
      id: Math.random(),
      type,
      placa,
      lat: parseFloat(lat),
      lng: parseFloat(lng),
      speed: 0,
      status: "stopped",
    };
    onAddVehicle(newVehicle);
    setPlaca("");
    setLat("");
    setLng("");
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      p={4}
      borderWidth="1px"
      borderRadius="md"
    >
      <VStack spacing={4}>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="car">Carro</option>
          <option value="bus">Ônibus</option>
          <option value="truck">Caminhão</option>
        </Select>
        <Input
          placeholder="Placa"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
          required
        />
        <Input
          placeholder="Latitude"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          required
        />
        <Input
          placeholder="Longitude"
          value={lng}
          onChange={(e) => setLng(e.target.value)}
          required
        />
        <Button type="submit" colorScheme="teal" width="full">
          Adicionar Veículo
        </Button>
      </VStack>
    </Box>
  );
}
