import { Box, Flex, Text, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import VehicleList from "./vehicleList";
import VehicleRegister from "./vehicleRegister";
import VehicleMap from "./vehicleMap";
import { Vehicle } from "@/types/types";
import { BASE_URL } from "@/utils/localhost";

export default function Dashboard() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const toast = useToast();

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
        toast({
          title: "Veículo cadastrado com sucesso!",
          description: "O veículo foi adicionado e está disponível no mapa.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      } else {
        console.error("Erro ao cadastrar veículo:", response.statusText);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
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

  return (
    <Flex bg="gray.800" justifyContent="center" alignItems="center">
      <Flex
        border="2px solid"
        borderRadius="20px"
        w="70%"
        h="70%"
        p={5}
        bg="white"
        boxShadow="md"
        backgroundColor="gray.800"
      >
        <Flex direction="column" justifyContent="space-between" flex="1" mr={4}>
          <Box
            border="2px solid"
            borderRadius="20px"
            flex="1"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg="gray.50"
            mb={4}
            h="40vh"
          >
            <VehicleList vehicles={vehicles} setVehicles={setVehicles} />
          </Box>
          <Box
            border="2px solid"
            borderRadius="20px"
            flex="1"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg="gray.50"
            mb={4}
            h="40vh"
          >
            <VehicleRegister onAddVehicle={handleAddVehicle} />
          </Box>
          <Box
            border="2px solid"
            borderRadius="20px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg="gray.50"
            p={2}
          >
            <Text textAlign="center">
              by <strong>Motora.Ai</strong>
            </Text>
          </Box>
        </Flex>
        <VehicleMap vehicles={vehicles} />
      </Flex>
    </Flex>
  );
}
