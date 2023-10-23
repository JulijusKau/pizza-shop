import "./App.css";
import { Route, Routes } from "react-router-dom";
import { OrdersListPage } from "./pages/OrdersListPage";
import { OrderPage } from "./pages/OrderPage";
import { PageNotFound } from "./pages/PageNotFound";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar navbarName={"PIZZA SHOP"} />
      <Routes>
        <Route path="/" element={<OrderPage />} />
        <Route path="/list" element={<OrdersListPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
