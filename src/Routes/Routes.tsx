import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Checkout from "../pages/Checkout";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="product/:category" element={<ProductList />} />
      <Route path="checkout/:id" element={<Checkout />} />
      <Route path="contact-us" element={<ContactUs />} />
    </Routes>
  )
}
export default RoutesList