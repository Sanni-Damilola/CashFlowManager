import { RouterProvider } from "react-router-dom";
import { Routes } from "./routes";
import { IoMdArrowRoundBack } from "react-icons/io";

const App = () => {
  return (
    <div>
      <div className="back">
        <IoMdArrowRoundBack />
      </div>
      <RouterProvider router={Routes()} />
    </div>
  );
};

export default App;
