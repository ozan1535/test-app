import { getTrimmedLowerCase } from "@/helpers/helpers";
import { ITestQuestionOptions } from "./TestQuestionOptions.types";

export default function TestQuestionOptions({
  options,
  questionTitle,
  questionIndex,
  setSelectedQuestionOptions,
}: ITestQuestionOptions) {
  return (
    <ul
      className="space-y-1 text-sm text-gray-700 pb-4"
      aria-labelledby="dropdownHelperRadioButton"
    >
      {options.map((option, index) => (
        <li
          key={index}
          className="bg-white p-2 rounded hover:bg-slate-200 has-[:checked]:bg-green-400"
        >
          <label
            htmlFor={`helper-radio-${getTrimmedLowerCase(
              option.answer
            )}-${questionIndex}`}
            className="font-medium text-gray-900"
          >
            <div className="flex p-2 rounded cursor-pointer">
              <div className="flex items-center h-5">
                <input
                  id={`helper-radio-${getTrimmedLowerCase(
                    option.answer
                  )}-${questionIndex}`}
                  name={`helper-radio-${getTrimmedLowerCase(questionTitle)}`}
                  type="radio"
                  value={getTrimmedLowerCase(option.answer)}
                  className="w-4 h-4 bg-gray-100 border-gray-300 cursor-pointer"
                  onChange={() => {
                    setSelectedQuestionOptions((prevOptions) => {
                      const updatedOptions = [...prevOptions];
                      updatedOptions[questionIndex] = option;
                      return updatedOptions;
                    });
                  }}
                />
              </div>
              <div className="ms-2 text-sm">
                <div>{option.answer}</div>
              </div>
            </div>
          </label>
        </li>
      ))}
    </ul>
  );
}
