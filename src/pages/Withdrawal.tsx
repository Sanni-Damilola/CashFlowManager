import { useEffect, useState, useMemo } from "react";
import { MdCancel } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import {
  calculateCharges,
  handleButtonClick,
  handleCancel,
  handleNavigateBack,
} from "../utils/Utils";
import { NumberButton } from "../utils/useButton";

const Withdrawal = () => {
  const [charges, setCharges] = useState<number | null>(null);
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  const calculatedCharges = useMemo(() => {
    const numericValue = Number(enteredNumber.replace(/,/g, ""));
    return calculateCharges(numericValue);
  }, [enteredNumber]);

  useEffect(() => {
    if (enteredNumber !== "" && calculatedCharges !== undefined) {
      setCharges(calculatedCharges);
    } else {
      setCharges(null);
    }
  }, [enteredNumber, calculatedCharges]);

  const numberButtons = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    [<MdCancel />, "0"],
  ];

  return (
    <div>
      <i>withdrawal</i>
      <div onClick={handleNavigateBack} className="back">
        <IoMdArrowRoundBack />
      </div>
      {enteredNumber && <h1>{enteredNumber}</h1>}
      {charges !== null && charges! > 0 && (
        <p className="charges">
          Charges: <strong>₦{charges}</strong>
        </p>
      )}
      <div id="numbers">
        {numberButtons.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: "flex" }}>
            {row.map((number, colIndex) => (
              <NumberButton
                key={colIndex}
                onClick={() => {
                  if (typeof number === "string") {
                    handleButtonClick(setEnteredNumber, number);
                  } else {
                    handleCancel(setEnteredNumber);
                  }
                }}
                value={number}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Withdrawal;
