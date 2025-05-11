import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Discounted from "./pages/Discounted";
import Brand from "./pages/Brand";
import Searched from "./pages/Searched";
import ProductDetails from "./pages/ProductDetails"
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products/:category" element={<Products />} />
        <Route path="products/discounted" element={<Discounted />} />
        <Route path="brand/:brand" element={<Brand />} />
        <Route path="searched/:searchTerm" element={<Searched />} />
        <Route path="productDetails/:id" element={<ProductDetails />} />
      </Route>
      <Route path="/signup" element= {<SignUp/>}/>
      <Route path="/login" element= {<LogIn/>}/>
    </Routes>
    </>
  );
}

export default App;
