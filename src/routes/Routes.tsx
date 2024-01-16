import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Withdrawal = lazy(() => import("../pages/Withdrawal"));
const Deposit = lazy(() => import("../pages/Deposit"));
const MainPage = lazy(() => import("../pages/MainPage"));

const LoadingFallback = () => (
  <div className="loading-overlay">
    <div className="loading-spinner" />
  </div>
);

const Routes = () => {
  return createBrowserRouter([
    {
      path: "withdrawal",
      element: (
        <Suspense fallback={<LoadingFallback />}>
          <Withdrawal />
        </Suspense>
      ),
    },
    {
      path: "deposit",
      element: (
        <Suspense fallback={<LoadingFallback />}>
          <Deposit />
        </Suspense>
      ),
    },
    {
      path: "/",
      element: (
        <Suspense fallback={<LoadingFallback />}>
          <MainPage />
        </Suspense>
      ),
    },
  ]);
};

export default Routes;
