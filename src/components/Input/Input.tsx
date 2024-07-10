import { transformText } from "@/helpers/helpers";
import { IInput } from "./Input.types";

export default function Input({ name, type, handleFunction, value }: IInput) {
  // Determine if the input should have min and max attributes
  const isInputNumber = type === "number";
  // Determine if the input should have a placeholder attribute
  const isInputText = type === "text" || type === "number";
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {transformText(name)}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={isInputText ? value : undefined}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={isInputText ? transformText(name) : undefined}
        min={isInputNumber ? 0 : undefined}
        max={isInputNumber ? 5 : undefined}
        onChange={handleFunction}
        required
        autoFocus
      />
    </div>
  );
}

// Create a new component to upload images.
// Add new items in order to keep file name and use e.target.files[0]
// When user clicks submit button, first upload media to storage and get download link, and set that download links to useState
// Then send all items to firestore.
