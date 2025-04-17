 
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {LoginPage,SignupPage,Home,CreateProduct, MyProducts, Cart, ProductDetails, Profile, CreateAddress, SelectAddress, OrderConfirmation, MyOrdersPage} from "./Routes";
import "./App.css";
import PayPalCheckoutButton from './PayPalCheckoutButton';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
 
const PAYPAL_CLIENT_ID = "YOUR_SANDBOX_CLIENT_ID";
const App = () => {
  return (
    <PayPalScriptProvider options={{ "client-id": PAYPAL_CLIENT_ID }}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/create-product" element={<CreateProduct/>}/>
        {/* for edit product by id */}
        <Route path="/create-product/:id" element={<CreateProduct/>}/>
        <Route path="/my-products" element={<MyProducts/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails/>}/>

        <Route path="/profile" element={<Profile/>}/>
        <Route path='/create-address' element={<CreateAddress/>}/>
        <Route path="/select-address" element={<SelectAddress/>}/>
        <Route path="/order-confirmation" element={<OrderConfirmation/>}/>
        <Route path="/myorders" element={<MyOrdersPage/>}/>
         <Route path="/paypal-test" element={<PayPalCheckoutButton />} /> 
      </Routes>
    </BrowserRouter>
    </PayPalScriptProvider>
  )
}

export default App
