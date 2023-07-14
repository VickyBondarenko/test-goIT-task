import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";

const Home = lazy(() => import("./pages/HomePage"));
const TweetsPage = lazy(() => import("./pages/TweetsPage"));

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/tweets" element={<TweetsPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
