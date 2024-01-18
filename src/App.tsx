import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./routes";
import { Footer } from "./static";

const App = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const loadingTimeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(loadingTimeout);
  // }, []);

  return (
    <div style={{ position: "relative" }}>
      {/* {!loading && ( */}
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={Routes()} />
      </Suspense>
      {/* )} */}

      <Footer />
    </div>
  );
};

export default App;
