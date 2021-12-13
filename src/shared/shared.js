import fs from "fs";

const generateFilePath = (day) => `src/day${day}/day${day}.txt`;

export const getFileData = (day) => {
  const file = fs
    .readFileSync(generateFilePath(day), {
      encoding: "utf-8",
    })
    .split("\n")
    .map((num) => parseInt(num));

  return file;
};
