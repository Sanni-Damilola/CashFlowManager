import React from "react";

export const handleButtonClick = (
  setEnteredNumber: React.Dispatch<React.SetStateAction<string>>,
  number: string
): void => {
  setEnteredNumber((prevNumber) => {
    if (prevNumber.length < 12) {
      return prevNumber + number;
    } else {
      return prevNumber;
    }
  });
};

export const handleCancel = (
  setEnteredNumber: React.Dispatch<React.SetStateAction<string>>
): void => {
  setEnteredNumber((prevNumber) => prevNumber.slice(0, -1));
};

export const handleNavigateBack = (): void => {
  window.history.back();
};
