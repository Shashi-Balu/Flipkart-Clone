import React from "react";
import CategoriesList from "../components/CategoriesList/CategoriesList";
import BankImage from "../components/BankImage/BankImage";
import ProductCards from "../components/ProductCards/ProductCards";
import Carousel from "../components/Carousel/Carousel";

function Home() {
    return (
        <div>
            <Carousel />
            <BankImage />
            <ProductCards />
            <CategoriesList />
        </div>
    );
}

export default Home;
