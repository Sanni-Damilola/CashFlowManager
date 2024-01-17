import React from "react";

interface ChargeRange {
  min: number;
  max: number;
  charge: number;
}

export function calculateCharges(amount: number): number | undefined {
  const chargeRanges: ChargeRange[] = [
    { min: 1000, max: 5400, charge: 100 },
    { min: 5400, max: 13400, charge: 200 },
    { min: 13400, max: 17500, charge: 300 },
    { min: 17500, max: 28500, charge: 400 },
    { min: 28500, max: 38500, charge: 500 },
    { min: 38500, max: 48500, charge: 600 },
    { min: 48500, max: 58500, charge: 700 },
  ];

  const incrementAmount: number = 100;

  let lastRange: ChargeRange = chargeRanges[chargeRanges.length - 1];

  while (amount > lastRange.max) {
    lastRange = {
      min: lastRange.max,
      max: lastRange.max + 10000,
      charge: lastRange.charge + incrementAmount,
    };
    chargeRanges.push(lastRange);
  }

  const matchingRange = chargeRanges.find(
    ({ min, max }) => amount >= min && amount <= max
  );

  return matchingRange?.charge;
}

export const handleButtonClick = (
  setEnteredNumber: React.Dispatch<React.SetStateAction<string>>,
  number: string
): void => {
  setEnteredNumber((prevNumber) => {
    if (prevNumber.length < 12) {
      const newNumber = (prevNumber + number).replace(/\D/g, "");

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
