import { Vehicle, VehicleEditModalProps } from "@/types/types";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import DeleteConfirmationModal from "./vehicleModalDelete";

export default function VehicleModalUpdates({
  isOpen,
  onClose,
  vehicle,
  onSave,
  onDelete,
}: VehicleEditModalProps) {
  const [updatedVehicle, setUpdatedVehicle] = useState<Vehicle | null>(vehicle);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (updatedVehicle) {
      const { name, value } = e.target;
      setUpdatedVehicle({
        ...updatedVehicle,
        [name]: value,
      });
    }
  };

  const handleSave = () => {
    if (updatedVehicle) {
      onSave(updatedVehicle);
    }
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    onDelete();
    setIsDeleteModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (updatedVehicle) {
      const { name, value } = e.target;
      setUpdatedVehicle({
        ...updatedVehicle,
        [name]:
          name === "speed" || name === "lat" || name === "lng"
            ? Number(value)
            : value,
      });
    }
  };

  useEffect(() => {
    setUpdatedVehicle(vehicle);
  }, [vehicle]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          m={{ base: 2, md: 4 }}
          mb={{ base: 2, md: 4 }}
          backgroundColor="#fcf8f5"
        >
          <ModalHeader color="black">Editar Veículo</ModalHeader>
          <ModalCloseButton />
          <ModalBody m={{ base: 1, md: 4 }}>
            {updatedVehicle && (
              <>
                <FormControl id="type" mb={4}>
                  <FormLabel color="black">Tipo</FormLabel>
                  <Select
                    name="type"
                    color="black"
                    value={updatedVehicle.type}
                    onChange={handleSelectChange}
                  >
                    <option value="car">Carro</option>
                    <option value="bus">Ônibus</option>
                    <option value="truck">Caminhão</option>
                  </Select>
                </FormControl>
                <FormControl id="placa" mb={4}>
                  <FormLabel color="black">Placa</FormLabel>
                  <Input
                    name="placa"
                    color="black"
                    value={updatedVehicle.placa}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl id="lat" mb={4}>
                  <FormLabel color="black">Latitude</FormLabel>
                  <Input
                    name="lat"
                    color="black"
                    value={updatedVehicle.lat}
                    type="number"
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl id="lng" mb={4}>
                  <FormLabel color="black">Longitude</FormLabel>
                  <Input
                    name="lng"
                    color="black"
                    value={updatedVehicle.lng}
                    type="number"
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl id="speed" mb={4}>
                  <FormLabel color="black">Velocidade</FormLabel>
                  <Input
                    name="speed"
                    color="black"
                    value={updatedVehicle.speed}
                    type="number"
                    onChange={handleInputChange}
                  />
                </FormControl>

                <FormControl id="status" mb={4}>
                  <FormLabel color="black">Status</FormLabel>
                  <Select
                    name="status"
                    color="black"
                    value={updatedVehicle.status}
                    onChange={handleSelectChange}
                  >
                    <option value="stopped">Parado</option>
                    <option value="moving">Em movimento</option>
                  </Select>
                </FormControl>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleSave}
              backgroundColor="#0c0847"
            >
              Salvar
            </Button>
            <Button
              colorScheme="blue"
              onClick={onClose}
              backgroundColor="#0c0847"
              color="white"
              mr={3}
            >
              Cancelar
            </Button>
            <Button
              _hover="black"
              onClick={handleDeleteClick}
              color="white"
              backgroundColor="red"
            >
              Deletar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirmDelete={handleConfirmDelete}
      />
    </>
  );
}
