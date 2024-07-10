"use client";
import { createContext, useContext, useState } from "react";
import Modal from "@/components/Modal/Modal";
import { IModalProps } from "@/components/Modal/Modal.types";

const initialModalProps: IModalProps = {
  isOpen: false,
  component: null,
};

const AppContext = createContext<{
  modalProps: IModalProps;
  setModalProps: React.Dispatch<React.SetStateAction<IModalProps>>;
}>({
  modalProps: initialModalProps,
  setModalProps: () => {},
});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [currentModalProps, setCurrentModalProps] =
    useState<IModalProps>(initialModalProps);

  const contextValue = {
    modalProps: currentModalProps,
    setModalProps: setCurrentModalProps,
  };
  return (
    <AppContext.Provider value={contextValue}>
      {currentModalProps.isOpen && (
        <Modal component={currentModalProps.component} />
      )}
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
