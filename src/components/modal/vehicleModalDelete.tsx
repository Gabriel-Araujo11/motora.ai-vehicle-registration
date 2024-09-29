import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmDelete: () => void;
}

export default function DeleteConfirmationModal({
  isOpen,
  onClose,
  onConfirmDelete,
}: DeleteConfirmationModalProps) {
  const [confirmationText, setConfirmationText] = useState("");
  const toast = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmationText(e.target.value);
  };

  const handleConfirmDelete = () => {
    if (confirmationText === "DELETAR VEÍCULO") {
      onConfirmDelete();
      onClose();
    } else {
      toast({
        title: "Texto de confirmação incorreto",
        description: 'Digite "DELETAR VEÍCULO" para confirmar.',
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Deseja remover este veículo? </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <Input
              placeholder='Digite "DELETAR VEÍCULO" para confirmar'
              value={confirmationText}
              onChange={handleInputChange}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            onClick={onClose}
            mr={3}
            color="white"
            backgroundColor="#0c0847"
          >
            Cancelar
          </Button>
          <Button
            colorScheme="red"
            onClick={handleConfirmDelete}
            isDisabled={confirmationText !== "DELETAR VEÍCULO"}
          >
            Deletar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
