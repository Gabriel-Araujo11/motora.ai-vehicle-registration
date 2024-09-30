import { Box, Flex, Link, Text, useToast } from "@chakra-ui/react";
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
    <Flex bg="gray.800" justifyContent="center" alignItems="center" p={4}>
      <Flex
        direction={{ base: "column", md: "row" }}
        borderRadius="20px"
        w={{ base: "100%", md: "70%" }}
        p={5}
        bg="white"
        backgroundColor="gray.800"
      >
        <Flex
          direction="column"
          justifyContent="space-between"
          flex="1"
          mr={4}
          w="100%"
        >
          <Box
            flex="1"
            border="2px solid"
            borderRadius="20px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg="gray.50"
            mb={4}
          >
            <VehicleList vehicles={vehicles} setVehicles={setVehicles} />
          </Box>
          <Box
            flex="1"
            border="2px solid"
            borderRadius="20px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg="gray.50"
            mb={4}
          >
            <VehicleRegister onAddVehicle={handleAddVehicle} />
          </Box>
          <Box
            display="flex"
            border="2px solid"
            borderRadius="20px"
            justifyContent="center"
            alignItems="center"
            bg="gray.50"
            p={2}
          >
            <Text textAlign="center">
              by{" "}
              <Link href="https://motora.ai/">
                <strong style={{ color: "#0c0847" }}>Motora.Ai</strong>
              </Link>
            </Text>
          </Box>
        </Flex>

        <Box
          flex={{ base: "none", md: "3" }}
          w={{ base: "100%", md: "100%" }}
          h={{ base: "300px", md: "500px" }}
          mt={{ base: 5, md: 0 }}
          mb={{ base: 5, md: 0 }}
        >
          <VehicleMap vehicles={vehicles} />
        </Box>
      </Flex>
    </Flex>
  );
}
