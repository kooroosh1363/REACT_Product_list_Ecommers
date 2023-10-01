import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";

function App() {
  return (
    <div>
     <Routes>
        
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Products/>}/>
      </Routes>
    </div>
  );
}

export default App;
