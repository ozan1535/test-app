import { useAppContext } from "@/app/context";
import { useCallback, useEffect, useState } from "react";

export const useModal = () => {
  //const [isOpen, setIsOpen] = useState(false);
  const { modalProps, setModalProps } = useAppContext();
  const { isOpen } = modalProps;
  const closeModal = useCallback(() => {
    setModalProps((prev) => ({
      ...prev,
      isOpen: false,
    }));
  }, []);

  const openModal = useCallback(() => {
    setModalProps((prev) => ({
      ...prev,
      isOpen: true,
    }));
  }, []);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    const handleClickOutside = (event) => {
      if (event.target.id === "modal-overlay") {
        closeModal();
      }
    };

    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("mouseup", handleClickOutside);

    return () => {
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeModal]);

  return { isOpen, openModal, closeModal };
};
