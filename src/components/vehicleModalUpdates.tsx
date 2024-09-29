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

export default function VehicleModalUpdates({
  isOpen,
  onClose,
  vehicle,
  onSave,
  onDelete,
}: VehicleEditModalProps) {
  const [updatedVehicle, setUpdatedVehicle] = useState<Vehicle | null>(vehicle);

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
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="#0c0847">Editar Veículo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {updatedVehicle && (
            <>
              <FormControl id="type" mb={4}>
                <FormLabel color="#0c0847">Tipo</FormLabel>
                <Select
                  name="type"
                  color="#0c0847"
                  value={updatedVehicle.type}
                  onChange={handleSelectChange}
                >
                  <option value="car">Carro</option>
                  <option value="bus">Ônibus</option>
                  <option value="truck">Caminhão</option>
                </Select>
              </FormControl>
              <FormControl id="placa" mb={4}>
                <FormLabel color="#0c0847">Placa</FormLabel>
                <Input
                  name="placa"
                  color="#0c0847"
                  value={updatedVehicle.placa}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl id="lat" mb={4}>
                <FormLabel color="#0c0847">Latitude</FormLabel>
                <Input
                  name="lat"
                  color="#0c0847"
                  value={updatedVehicle.lat}
                  type="number"
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl id="lng" mb={4}>
                <FormLabel color="#0c0847">Longitude</FormLabel>
                <Input
                  name="lng"
                  color="#0c0847"
                  value={updatedVehicle.lng}
                  type="number"
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl id="speed" mb={4}>
                <FormLabel color="#0c0847">Velocidade</FormLabel>
                <Input
                  name="speed"
                  color="#0c0847"
                  value={updatedVehicle.speed}
                  type="number"
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl id="status" mb={4}>
                <FormLabel color="#0c0847">Status</FormLabel>
                <Select
                  name="status"
                  color="#0c0847"
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
            onClick={onDelete}
            color="white"
            backgroundColor="red"
          >
            Deletar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
