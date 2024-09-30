import { useState } from "react";
import {
  Box,
  Button,
  FormLabel,
  Input,
  Select,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { VehicleRegisterProps } from "@/types/types";
import { generateRandomCoordinates } from "@/hooks/useRandomCoordinates";

export default function VehicleRegister({
  onAddVehicle,
}: VehicleRegisterProps) {
  const [type, setType] = useState("car");
  const [placa, setPlaca] = useState("");
  const { lat, lng } = generateRandomCoordinates();
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!placa.trim()) {
      toast({
        title: "Erro",
        description: "A placa é obrigatória.",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    const newVehicle = {
      id: Math.random(),
      type,
      placa,
      lat: parseFloat(lat),
      lng: parseFloat(lng),
      speed: 0,
      status: "stopped",
    };
    try {
      onAddVehicle(newVehicle);
      setPlaca("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      p={4}
      borderWidth="1px"
      borderRadius="md"
    >
      <FormLabel color="#0c0847">Cadastre um veículo:</FormLabel>
      <VStack spacing={4}>
        <Select
          value={type}
          onChange={(e) => setType(e.target.value)}
          color="#0c0847"
        >
          <option value="car">Carro</option>
          <option value="bus">Ônibus</option>
          <option value="truck">Caminhão</option>
        </Select>

        <Input
          placeholder="Placa"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
          color="#0c0847"
          required
        />

        <Button
          type="submit"
          colorScheme="blue"
          width="full"
          backgroundColor="#0c0847"
          _hover={{ backgroundColor: "black" }}
        >
          Adicionar Veículo
        </Button>
      </VStack>
    </Box>
  );
}
