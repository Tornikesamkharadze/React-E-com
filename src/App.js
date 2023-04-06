import Home from "./routes/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index="/" element={<Home />} />
        <Route path="about" />
        <Route path="contact" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
