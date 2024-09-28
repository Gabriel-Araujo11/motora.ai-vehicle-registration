import { useEffect, useState } from "react";
import { Select, FormControl, FormLabel, Box } from "@chakra-ui/react";
import { Vehicle } from "@/types/types";
import { BASE_URL } from "@/utils/localhost";

export default function VehicleSelect() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

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
    <Box as="form" p={4} borderWidth="1px" borderRadius="md">
      <FormControl id="vehicle-select">
        <FormLabel color="#0c0847">Selecione um veículo:</FormLabel>
        <Select placeholder="Selecione a placa" color="#0c0847">
          {vehicles.map((vehicle) => (
            <option key={vehicle.id} value={vehicle.placa}>
              {vehicle.placa}
            </option>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
