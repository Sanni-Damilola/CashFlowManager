import { RouterProvider } from "react-router-dom";
import { Routes } from "./routes";

const App = () => {
  return (
    <div>
      <RouterProvider router={Routes()} />
    </div>
  );
};

export default App;
