import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/login";
import SignupPage from "./pages/Signup";
import CreateProduct from "./pages/createProduct";
import MyProject from "./pages/myProject";
import EditProduct from "./pages/EditProduct"; // Corrected Import
import Nav from "./components/Navbar";
import Cart from "./pages/cart";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
    <Nav />
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
