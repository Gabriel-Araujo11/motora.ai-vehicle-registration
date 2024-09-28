import { useState } from "react";
import { Box, Button, Input, Select, VStack, useToast } from "@chakra-ui/react";
import { VehicleFormProps } from "@/types/types";
import { generateRandomCoordinates } from "@/hooks/useRandomCoordinates";

export default function VehicleForm({ onAddVehicle }: VehicleFormProps) {
  const [type, setType] = useState("car");
  const [placa, setPlaca] = useState("");
  const { lat, lng } = generateRandomCoordinates();
  const toast = useToast();

  //TODO: implementar mask no input de placas XXX-YYYY

  const handleSubmit = async (e: React.FormEvent) => {
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

    try {
      await onAddVehicle(newVehicle);
      toast({
        title: "Veículo cadastrado com sucesso!",
        description: "O veículo foi adicionado e está disponível no mapa.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      setPlaca("");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast({
        title: "Erro ao cadastrar veículo",
        description: "Ocorreu um erro ao tentar cadastrar o veículo.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
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
          required
        />

        <Button
          type="submit"
          colorScheme="teal"
          width="full"
          backgroundColor="#0c0847"
          _hover="black"
        >
          Adicionar Veículo
        </Button>
      </VStack>
    </Box>
  );
}
