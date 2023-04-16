import Home from "./routes/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./routes/shop/Shop";
import Navigation from "./routes/navigation/Navigation";
import Authentication from "./routes/Authentication/Authentication";
import Checkout from "./routes/checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
