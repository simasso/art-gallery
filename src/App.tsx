import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import "./App.css";
import { Home } from "./pages/Home";
import { Favourites } from "./pages/Favourites";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="favourites" element={<Favourites />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
