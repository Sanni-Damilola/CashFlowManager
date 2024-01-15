import React from "react";

export const handleButtonClick = (
  setEnteredNumber: React.Dispatch<React.SetStateAction<string>>,
  number: string
): void => {
  setEnteredNumber((prevNumber) => prevNumber + number);
};

export const handleCancel = (
  setEnteredNumber: React.Dispatch<React.SetStateAction<string>>
): void => {
  setEnteredNumber((prevNumber) => prevNumber.slice(0, -1));
};

export default { handleButtonClick, handleCancel };
