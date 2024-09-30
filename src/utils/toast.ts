import { ToastProps } from "@chakra-ui/react";

export const toast_update: ToastProps = {
  title: "Veículo atualizado com sucesso!",
  description: "O veículo foi atualizado e está disponível no mapa.",
  status: "success",
  duration: 3000,
  isClosable: true,
  position: "top",
};

export const toast_update_error: ToastProps = {
  title: "Erro ao atualizar o veículo",
  description: "Ocorreu um erro ao tentar atualizar o veículo.",
  status: "error",
  duration: 3000,
  isClosable: true,
  position: "top",
};

export const toast_delete: ToastProps = {
  title: "Veículo deletado com sucesso!",
  description: "O veículo foi removido da lista e do mapa.",
  status: "success",
  duration: 3000,
  isClosable: true,
  position: "top",
};

export const toast_delete_error: ToastProps = {
  title: "Erro ao deletar o veículo",
  description: "Ocorreu um erro ao tentar deletar o veículo.",
  status: "error",
  duration: 3000,
  isClosable: true,
  position: "top",
};

export const toast_register: ToastProps = {
  title: "Veículo cadastrado com sucesso!",
  description: "O veículo foi adicionado e está disponível no mapa.",
  status: "success",
  duration: 3000,
  isClosable: true,
  position: "top",
};

export const toast_register_error: ToastProps = {
  title: "Erro ao cadastrar veículo",
  description: "Ocorreu um erro ao tentar cadastrar o veículo.",
  status: "error",
  duration: 3000,
  isClosable: true,
  position: "top",
};

export const toast_list_error: ToastProps = {
  title: "Erro ao visualizar o veículo",
  description: "Ocorreu um erro ao tentar visualizar os detalhes o veículo.",
  status: "error",
  duration: 3000,
  isClosable: true,
  position: "top",
};

export const toast_confirmation_error: ToastProps = {
  title: "Texto de confirmação incorreto",
  description: 'Digite "DELETAR VEÍCULO" para confirmar.',
  status: "error",
  duration: 3000,
  isClosable: true,
  position: "top",
};
