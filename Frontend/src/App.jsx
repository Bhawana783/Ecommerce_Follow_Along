import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CreateProduct from "./pages/CreateProduct";
import MyProducts from "./pages/MyProducts";
import EditProduct from "./pages/EditProduct"; // Corrected Import
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/myproducts" element={<MyProducts />} />
        <Route path="/edit-product/:id" element={<EditProduct />} /> {/* Edit Product Route */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
