import { ITab } from "./Tab.types";

export default function Tab({
  items,
  handleFunction,
  currentIndex,
  itemName,
  setTabIndexStore,
  title = null,
}: ITab) {
  return (
    <ul className="flex flex-nowrap overflow-scroll text-sm font-medium text-center text-gray-500">
      {items.map((item, index) => (
        <li
          key={index}
          className={`me-2 inline-block p-4 ${
            index === currentIndex
              ? "text-blue-600 bg-gray-100 border-b-2 border-blue-500"
              : "hover:text-gray-600 hover:bg-gray-200"
          } rounded-t-lg cursor-pointer`}
          onClick={() => handleFunction(index, itemName, setTabIndexStore)}
        >
          {title ? `${title} ${index + 1}` : (item as string)}
        </li>
      ))}
    </ul>
  );
}
