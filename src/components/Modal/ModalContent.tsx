import { IModalContent } from "./Modal.types";

export default function ModalContent({ closeModal, component }: IModalContent) {
  return (
    <div className="relative p-4 min:w-96 max-h-full">
      <div className="relative bg-white rounded-lg shadow">
        <div className="flex flex-col items-center justify-between p-2">
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg w-8 h-8 ms-auto inline-flex justify-center items-center"
            onClick={closeModal}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
        {component}
      </div>
    </div>
  );
}
