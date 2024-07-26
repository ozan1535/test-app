import { IModalOverlay } from "./Modal.types";

export default function ModalOverlay({ children }: IModalOverlay) {
  return (
    <div
      id="modal-overlay"
      className={`fixed inset-0 z-50 bg-gray-500 bg-opacity-50 flex items-center justify-center overflow-auto`}
    >
      {children}
    </div>
  );
}
