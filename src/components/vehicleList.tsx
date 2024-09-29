import { useEffect, useState } from "react";
import {
  Select,
  FormControl,
  FormLabel,
  Box,
  useToast,
} from "@chakra-ui/react";
import { Vehicle } from "@/types/types";
import { BASE_URL } from "@/utils/localhost";
import VehicleModalUpdates from "./vehicleModalUpdates";

//TODO: Colocar os toasts em arquivo separado

export default function VehicleSelect() {
  const toast = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const handleSelectChange = (placa: string) => {
    const vehicle = vehicles.find((v) => v.placa === placa);
    if (vehicle) {
      setSelectedVehicle(vehicle);
      setIsModalOpen(true);
    }
  };

  const handleSaveVehicle = async (updatedVehicle: Vehicle) => {
    try {
      const response = await fetch(
        `${BASE_URL}/vehicles/${updatedVehicle.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedVehicle),
        }
      );

      if (response.ok) {
        const updatedList = vehicles.map((v) =>
          v.id === updatedVehicle.id ? updatedVehicle : v
        );
        setVehicles(updatedList);
        setIsModalOpen(false);
        toast({
          title: "Veículo atualizado com sucesso!",
          description: "O veículo foi atualizado e está disponível no mapa.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      } else {
        toast({
          title: "Erro ao atualizar o veículo",
          description: "Ocorreu um erro ao tentar atualizar o veículo.",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        throw new Error("Erro ao atualizar veículo");
      }
    } catch (error) {
      console.error("Erro ao atualizar o veículo:", error);
      toast({
        title: "Erro ao atualizar o veículo",
        description: "Ocorreu um erro ao tentar atualizar o veículo.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const handleDeleteVehicle = async (vehicleId: string) => {
    try {
      const response = await fetch(`${BASE_URL}/vehicles/${vehicleId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const updatedList = vehicles.filter((v) => v.id !== Number(vehicleId));
        setVehicles(updatedList);
        setIsModalOpen(false);
        toast({
          title: "Veículo deletado com sucesso!",
          description: "O veículo foi removido da lista e do mapa.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      } else {
        throw new Error("Erro ao deletar veículo");
      }
    } catch (error) {
      console.error("Erro ao deletar o veículo:", error);
      toast({
        title: "Erro ao deletar o veículo",
        description: "Ocorreu um erro ao tentar deletar o veículo.",
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
    <Box as="form" p={4} borderWidth="1px" borderRadius="md">
      <FormControl id="vehicle-select">
        <FormLabel color="#0c0847">Selecione um veículo:</FormLabel>
        <Select
          placeholder="Selecione a placa"
          color="#0c0847"
          onChange={(e) => handleSelectChange(e.target.value)}
        >
          {vehicles.map((vehicle) => (
            <option key={vehicle.id} value={vehicle.placa}>
              {vehicle.placa}
            </option>
          ))}
        </Select>
      </FormControl>
      <VehicleModalUpdates
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        vehicle={selectedVehicle}
        onSave={handleSaveVehicle}
        onDelete={() => handleDeleteVehicle(selectedVehicle?.id)}
      />
    </Box>
  );
}
