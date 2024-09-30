import { useEffect, useState } from "react";
import {
  Select,
  FormControl,
  FormLabel,
  Box,
  useToast,
} from "@chakra-ui/react";
import {
  toast_delete,
  toast_delete_error,
  toast_list_error,
  toast_update,
  toast_update_error,
} from "@/utils/toast";
import { Vehicle, VehicleListProps } from "@/types/types";
import VehicleModalUpdates from "./modal/vehicleModal";
import { BASE_URL } from "@/utils/localhost";

export default function VehicleSelect({
  vehicles,
  setVehicles,
}: VehicleListProps) {
  const toast = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        toast(toast_update);
      } else {
        toast(toast_update_error);
      }
    } catch (error) {
      console.error("Erro ao atualizar o veículo:", error);
      toast(toast_update_error);
    }
  };

  const handleDeleteVehicle = async (vehicleId: number) => {
    try {
      const response = await fetch(`${BASE_URL}/vehicles/${vehicleId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const updatedList = vehicles.filter((v) => v.id !== Number(vehicleId));
        setVehicles(updatedList);
        setIsModalOpen(false);
        toast(toast_delete);
      } else {
        toast(toast_delete_error);
      }
    } catch (error) {
      console.error("Erro ao deletar o veículo:", error);
      toast(toast_delete_error);
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
        toast(toast_list_error);
      }
    };

    fetchVehicles();
  }, [setVehicles, toast]);

  return (
    <Box as="form" p={4} borderRadius="md">
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
      {selectedVehicle && (
        <VehicleModalUpdates
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          vehicle={selectedVehicle}
          onSave={handleSaveVehicle}
          onDelete={() => handleDeleteVehicle(selectedVehicle.id)}
        />
      )}
    </Box>
  );
}
