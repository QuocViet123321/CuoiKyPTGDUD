import { Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import DetailProduct from "./pages/DetailProduct";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<DetailProduct />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </>
  );
}

export default App;
