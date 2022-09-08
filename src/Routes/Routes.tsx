import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";

const RoutesList = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:category" element={<ProductList />} />
          <Route path="/checkout/:id" element={<Checkout />} />

        </Routes>
      </BrowserRouter>
    )
}
export default RoutesList