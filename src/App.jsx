import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Nav from "./components/nav/Nav";
import Category from "./pages/category/Category";
import Product from "./pages/product/Product";
import Home from "./pages/home/Home"


function App() {
    return (
        <div>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/category" element={<Category />} />
                <Route path="/product" element={<Product />} />
            </Routes>
        </div>
    );
}

export default App;
