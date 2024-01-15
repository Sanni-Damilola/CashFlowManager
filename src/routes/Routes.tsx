import { createBrowserRouter } from "react-router-dom";
import { Deposit, MainPage, Withdrawal } from "../pages";

const Routes = () => {
  return createBrowserRouter([
    {
      path: "withdrawal",
      element: <Withdrawal />,
    },
    {
      path: "deposit",
      element: <Deposit />,
    },
    {
      path: "/",
      element: <MainPage />,
    },
  ]);
};

export default Routes;
