import { Box, Flex, Text } from "@chakra-ui/react";
import VehicleList from "./vehicleList";
import VehicleUpdate from "./vehicleUpdate";
import VehicleMap from "./vehicleMap";
import { DashboardProps } from "@/types/types";

export default function Dashboard({
  vehicles,
  handleAddVehicle,
}: DashboardProps) {
  return (
    <Flex h="100vh" justifyContent="center" alignItems="center" bg="gray.100">
      <Flex
        border="2px solid"
        borderRadius="20px"
        w="70%"
        h="70%"
        p={5}
        bg="white"
        boxShadow="md"
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
            <VehicleList />
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
            <VehicleUpdate onAddVehicle={handleAddVehicle} />
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
