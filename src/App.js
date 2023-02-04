import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import CategoriesList from "./components/CategoriesList/CategoriesList";
import BankImage from "./components/BankImage/BankImage";
import ProductCards from "./components/ProductCards/ProductCards";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
    /*
    1. Navbar
    2. List of categories
    3. carousel
    4. top offers side by side boat product
    5. cards component
  */
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>

                <Routes>
                    <Route path={"cart"} element={<Cart />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
