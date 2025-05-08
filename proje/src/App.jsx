import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Discounted from "./pages/Discounted";
import Brand from "./pages/Brand";
import Searched from "./pages/Searched";
import ProductDetails from "./pages/ProductDetails"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products/:category" element={<Products />} />
        <Route path="products/discounted" element={<Discounted />} />
        <Route path="brand/:brand" element={<Brand />} />
        <Route path="searched/:searchTerm" element={<Searched />} />
        <Route path="productDetails/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
