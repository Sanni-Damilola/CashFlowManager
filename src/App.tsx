import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./routes";
import { Footer } from "./static";

const App = () => {
  return (
    <div style={{ position: "relative" }}>
      <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
        <RouterProvider router={Routes()} />
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
