import { ISelect } from "./Select.types";

export default function Select({
  name,
  handleFunction,
  value,
  options,
  optionKey,
  isDisabled,
}: ISelect) {
  return (
    <div>
      <label
        htmlFor="categories"
        className="block mb-2 capitalize text-sm font-medium text-gray-900"
      >
        {name}
      </label>
      <select
        id="categories"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        name={name}
        //Use for the default value
        //value={value}
        onChange={handleFunction}
        required
        disabled={isDisabled}
      >
        <option value=""></option>
        {options.map((option) => (
          <option
            value={option[optionKey as keyof typeof option]}
            key={option[optionKey as keyof typeof option]}
          >
            {option[optionKey as keyof typeof option]}
          </option>
        ))}
      </select>
    </div>
  );
}
