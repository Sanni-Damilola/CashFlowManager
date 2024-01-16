import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./routes";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner" />
        </div>
      )}

      {!loading && <RouterProvider router={Routes()} />}
    </div>
  );
};

export default App;
