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
  const [charges, setCharges] = useState<number>(0);
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  const calculatedCharges = useMemo(() => {
    const numericValue = Number(enteredNumber.replace(/,/g, ""));
    return calculateCharges(numericValue);
  }, [enteredNumber]);

  useEffect(() => {
    if (calculatedCharges !== undefined) {
      setCharges(calculatedCharges);
    }
  }, [calculatedCharges]);

  return (
    <div>
      <i>withdrawal</i>
      <div onClick={handleNavigateBack} className="back">
        <IoMdArrowRoundBack />
      </div>
      {enteredNumber && <h1>{enteredNumber}</h1>}
      {charges > 0 && <p className="charges">Charges: ₦{charges}</p>}
      <div>
        <div id="numbers">
          <div>
            <NumberButton
              onClick={() => handleButtonClick(setEnteredNumber, "1")}
              value="1"
            />
            <NumberButton
              onClick={() => handleButtonClick(setEnteredNumber, "2")}
              value="2"
            />
            <NumberButton
              onClick={() => handleButtonClick(setEnteredNumber, "3")}
              value="3"
            />
          </div>

          <div>
            <NumberButton
              onClick={() => handleButtonClick(setEnteredNumber, "4")}
              value="4"
            />
            <NumberButton
              onClick={() => handleButtonClick(setEnteredNumber, "5")}
              value="5"
            />
            <NumberButton
              onClick={() => handleButtonClick(setEnteredNumber, "6")}
              value="6"
            />
          </div>
          <div>
            <NumberButton
              onClick={() => handleButtonClick(setEnteredNumber, "7")}
              value="7"
            />
            <NumberButton
              onClick={() => handleButtonClick(setEnteredNumber, "8")}
              value="8"
            />
            <NumberButton
              onClick={() => handleButtonClick(setEnteredNumber, "9")}
              value="9"
            />
          </div>
          <div>
            <NumberButton
              onClick={() => handleCancel(setEnteredNumber)}
              value={<MdCancel />}
            />
            <NumberButton
              onClick={() => handleButtonClick(setEnteredNumber, "0")}
              value="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;
