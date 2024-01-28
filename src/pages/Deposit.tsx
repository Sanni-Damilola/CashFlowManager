import { useState } from "react";
import "../App.css";
import {
  handleButtonClick,
  handleCancel,
  handleNavigateBack,
} from "../utils/Utils";
import { MdCancel } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";

const Deposit = () => {
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  const numberButtons = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    [<MdCancel />, "0"],
  ];

  return (
    <div>
      <i>deposit</i>
      <div onClick={handleNavigateBack} className="back">
        <IoMdArrowRoundBack />
      </div>
      {enteredNumber && <h1>{enteredNumber}</h1>}
      <div>
        <div id="numbers">
          {numberButtons.map((row, rowIndex) => (
            <div key={rowIndex}>
              {row.map((number, colIndex) => (
                <button
                  key={colIndex}
                  onClick={() => {
                    if (typeof number === "string") {
                      handleButtonClick(setEnteredNumber, number);
                    } else {
                      handleCancel(setEnteredNumber);
                    }
                  }}
                >
                  <span>{number}</span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deposit;
