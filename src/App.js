import SinglePageProduct from "./components/SinglePageProduct";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Routes/Home";
import ProductInfo from "./components/Routes/ProductInfo";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductInfo />} />
      </Routes>
    </div>
  );
}

export default App;
