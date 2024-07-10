import { IButton } from "./Button.types";

export default function Button({
  type,
  isButtonSecondary,
  name,
  handleFunction,
  isButtonDisabled = false,
}: IButton) {
  return (
    <button
      onClick={handleFunction}
      type={type}
      disabled={isButtonDisabled}
      className={`${
        isButtonSecondary
          ? "text-black hover:bg-blue-100 border-2 border-blue-300"
          : "text-white bg-blue-700 hover:bg-blue-800"
      } ${
        isButtonDisabled ? "cursor-not-allowed opacity-50" : ""
      } focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center `}
    >
      {name}
    </button>
  );
}
