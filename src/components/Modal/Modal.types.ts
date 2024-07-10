import { ReactNode } from "react";

export interface IModalProps {
  isOpen: boolean;
  component: ReactNode;
}

export interface IModalContent {
  closeModal: () => void;
  component: ReactNode;
}

export interface IModal {
  component: ReactNode;
}

export interface IModalOverlay {
  children: ReactNode;
}
