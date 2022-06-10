import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartContext from "./utils/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import PageNotFound from "./components/PageNotFound";
import Login from "./components/Login"
import Signup from "./components/Signup"
import Footer from "./components/Footer"
function App() {
  return (

  <CartContext>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<Login/>} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Footer/>
    </CartContext>


  );
}

export default App;
