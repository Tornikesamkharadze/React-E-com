import Home from "./routes/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./routes/shop/Shop";
import Navigation from "./routes/navigation/Navigation";
import SignIn from "./routes/sign-in/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
