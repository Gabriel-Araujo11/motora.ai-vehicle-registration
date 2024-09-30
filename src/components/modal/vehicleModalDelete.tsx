import { useState } from "react";
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
import { toast_confirmation_error } from "@/utils/toast";

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
      toast(toast_confirmation_error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p={{ base: 2, md: 4 }} mb={{ base: 2, md: 4 }}>
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
