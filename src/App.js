import SinglePageProduct from "./components/SinglePageProduct";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Routes/Home";
import ProductInfo from "./components/Routes/ProductInfo";
import ProductList from "./components/Routes/ProductList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductInfo />} />
        <Route path="/productList" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
