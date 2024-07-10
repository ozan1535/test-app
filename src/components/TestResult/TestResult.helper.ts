import { ISelectedQuestionOptions } from "../TestItems/TestItems.types";

export const findMostFrequentForValue = (
  options: ISelectedQuestionOptions[]
) => {
  // Step 1: Create an array of 'for' values
  const forValues = options.map((option) => option.for);
  // Step 2: Count occurrences of each 'for' value
  const countMap: Record<string, number> = {};
  forValues.forEach((forValue) => {
    countMap[forValue] = (countMap[forValue] || 0) + 1;
  });

  // Step 3: Find the most frequent 'for' value
  const mostFrequentFor = Object.entries(countMap).sort(
    (a, b) => b[1] - a[1]
  )[0][0];

  return mostFrequentFor;
};
