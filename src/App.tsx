import { RouterProvider } from "react-router-dom";
import { Routes } from "./routes";
import { IoMdArrowRoundBack } from "react-icons/io";
import { handleNavigateBack } from "./utils/Utils";

const App = () => {
  return (
    <div>
      <div onClick={handleNavigateBack} className="back">
        <IoMdArrowRoundBack />
      </div>
      <RouterProvider router={Routes()} />
    </div>
  );
};

export default App;
