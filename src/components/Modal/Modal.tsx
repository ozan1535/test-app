"use client";
import ModalOverlay from "./ModalOverlay";
import ModalContent from "./ModalContent";
import { useModal } from "./useModal";
import { IModal } from "./Modal.types";

export default function Modal({ component }: IModal) {
  const { isOpen, closeModal } = useModal();

  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent closeModal={closeModal} component={component} />
    </ModalOverlay>
  );
}
