import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { IoEnterOutline } from "react-icons/io5";
import {
  handleButtonClick,
  handleCancel,
  handleNavigateBack,
} from "../utils/Utils";
import { IoMdArrowRoundBack } from "react-icons/io";
const Withdrawal = () => {
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  return (
    <div>
      <i>withdrawal</i>
      <div onClick={handleNavigateBack} className="back">
        <IoMdArrowRoundBack />
      </div>
      {enteredNumber && <h1>{enteredNumber}</h1>}
      <div>
        <div id="numbers">
          <div>
            <button onClick={() => handleButtonClick(setEnteredNumber, "1")}>
              <span>1</span>
            </button>
            <button onClick={() => handleButtonClick(setEnteredNumber, "2")}>
              <span>2</span>
            </button>
            <button onClick={() => handleButtonClick(setEnteredNumber, "3")}>
              <span>3</span>
            </button>
          </div>

          <div>
            <button onClick={() => handleButtonClick(setEnteredNumber, "4")}>
              <span>4</span>
            </button>
            <button onClick={() => handleButtonClick(setEnteredNumber, "5")}>
              <span>5</span>
            </button>
            <button onClick={() => handleButtonClick(setEnteredNumber, "6")}>
              <span>6</span>
            </button>
          </div>
          <div>
            <button onClick={() => handleButtonClick(setEnteredNumber, "7")}>
              <span>7</span>
            </button>
            <button onClick={() => handleButtonClick(setEnteredNumber, "8")}>
              <span>8</span>
            </button>
            <button onClick={() => handleButtonClick(setEnteredNumber, "9")}>
              <span>9</span>
            </button>
          </div>
          <div>
            <button onClick={() => handleButtonClick(setEnteredNumber, "0")}>
              <span>0</span>
            </button>
            <button onClick={() => handleCancel(setEnteredNumber)}>
              <span>
                <MdCancel />
              </span>
            </button>
            <button onClick={() => alert("In Progress")}>
              <span>
                <IoEnterOutline />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;
