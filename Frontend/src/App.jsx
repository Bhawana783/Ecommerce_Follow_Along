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
import ProfilePage from "./Profile";
import AddressForm from "./AddressForm";
import SelectAddress from "./pages/SelectAddress";

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
        <Route path="/edit-product/:id" element={<EditProduct />} /> 
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/add-address" element={<AddressForm />} />
        <Route path="/select-address" element={<SelectAddress />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
