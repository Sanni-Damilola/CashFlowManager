import React from "react";

export interface ChargeRange {
  min: number;
  max: number;
  charge: number;
}

export const chargeRanges: ChargeRange[] = [
  { min: 1000, max: 5400, charge: 100 },
  { min: 5400, max: 13400, charge: 200 },
  { min: 13400, max: 17500, charge: 300 },
  { min: 17500, max: 28500, charge: 400 },
  { min: 28500, max: 38500, charge: 500 },
  { min: 38500, max: 48500, charge: 600 },
  { min: 48500, max: 58500, charge: 700 },
];

export const calculateCharges = (value: number): number => {
  const range = chargeRanges.find(
    (range) => value >= range.min && value <= range.max
  );

  if (range) {
    return value >= 58500 ? range.charge + 100 : range.charge;
  } else {
    const additionalCharge = Math.floor((value - 58500) / 1000) * 100 + 700;
    return additionalCharge >= 0 ? additionalCharge : 0;
  }
};

export const handleButtonClick = (
  setEnteredNumber: React.Dispatch<React.SetStateAction<string>>,
  number: string
): void => {
  setEnteredNumber((prevNumber) => {
    if (prevNumber.length < 12) {
      const newNumber = (prevNumber + number).replace(/\D/g, "");

      // Check if the number has three or more digits
      if (newNumber.length >= 3) {
        const formattedNumber = new Intl.NumberFormat().format(
          Number(newNumber)
        );

        const cleanedNumber = formattedNumber.replace(/,$/, "");

        return cleanedNumber;
      } else {
        return newNumber;
      }
    } else {
      return prevNumber;
    }
  });
};

export const handleCancel = (
  setEnteredNumber: React.Dispatch<React.SetStateAction<string>>
): void => {
  setEnteredNumber((prevNumber) => {
    const cleanedNumber = prevNumber.slice(0, -1).replace(/,/g, "");

    if (cleanedNumber.length >= 2) {
      const formattedNumber = new Intl.NumberFormat().format(
        Number(cleanedNumber)
      );
      return formattedNumber;
    } else {
      return cleanedNumber;
    }
  });
};

export const handleNavigateBack = (): void => {
  window.history.back();
};
