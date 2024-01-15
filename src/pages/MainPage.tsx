import { Buttons } from "../Buttons";
import "../App.css";

const MainPage = () => {
  return (
    <div className="main-container">
      <h1>Check Charges</h1>
      <div>
        <Buttons route="/withdrawal" text="withdrawal" />
        <Buttons route="/deposit" text="deposit" />
      </div>
    </div>
  );
};

export default MainPage;
