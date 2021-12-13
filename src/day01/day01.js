import { getFileData } from "../shared/shared.js";

const fileData = getFileData("01");

const getTotalIncreaseSteps = (arrOfMeasurements) => {
  return arrOfMeasurements.reduce(
    (acc, curr) => {
      if (curr > acc.prevValue) {
        return {
          prevValue: curr,
          totalIncreaseNumber: acc.totalIncreaseNumber + 1,
        };
      }

      return {
        ...acc,
        prevValue: curr,
      };
    },
    {
      prevValue: undefined,
      totalIncreaseNumber: 0,
    }
  );
};

const day0101 = () => {
  return getTotalIncreaseSteps(fileData).totalIncreaseNumber;
};

const day0102 = () => {
  const sumOfMeasurements = fileData.reduce((acc, curr, index) => {
    if (acc[index - 2]) {
      acc[index - 2] = acc[index - 2] + curr;
    }

    if (acc[index - 1]) {
      acc[index - 1] = acc[index - 1] + curr;
    }

    return Object.assign(acc, { [index]: curr });
  }, {});

  return getTotalIncreaseSteps(Object.values(sumOfMeasurements))
    .totalIncreaseNumber;
};

export { day0101, day0102 };
