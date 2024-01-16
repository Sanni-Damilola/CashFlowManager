import React from "react";

export const handleButtonClick = (
  setEnteredNumber: React.Dispatch<React.SetStateAction<string>>,
  number: string
): void => {
  setEnteredNumber((prevNumber) => {
    if (prevNumber.length < 12) {
      const newNumber = (prevNumber + number).replace(/\D/g, "");
      const formattedNumber = Number(newNumber).toLocaleString();
      return formattedNumber;
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
