import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductCards.css";

function ProductCards() {
    const [apiData, setApiData] = useState([]);

    async function callApi() {
        const response = await fetch("https://fakestoreapi.com/products");
        const response_json = await response.json();

        setApiData(response_json);
    }
    useEffect(() => {
        callApi();
        console.log("API called");
    }, []);
    return (
        <div className="product_cards">
            {apiData.map((value) => (
                <div className="product_cards">
                    <ProductCard image={value.image} price={value.price} title={value.title} />
                </div>
            ))}
        </div>
    );
}

export default ProductCards;

// const productData = [
//     {
//         id: 1,
//         title: "Apple watch",
//         price: "79,000",
//         image: "https://m.media-amazon.com/images/I/51vHAEYKeWL._AC_UF452,452_FMjpg_.jpg",
//     },
//     {
//         id: 2,
//         title: "Earphones",
//         price: "900",
//         image: "https://m.media-amazon.com/images/I/31GUbeFG3FL._AC_UF452,452_FMjpg_.jpg",
//     },
//     {
//         id: 3,
//         title: "Xiaomi TV",
//         price: "25,000",
//         image: "https://m.media-amazon.com/images/I/51fmHk3km+L._AC_UF334,334_FMjpg_.jpg",
//     },
//     {
//         id: 4,
//         title: "IPhone 13",
//         price: "65,000",
//         image: "https://m.media-amazon.com/images/I/315vs3rLEZL._AC_UF334,334_FMjpg_.jpg",
//     },
//     {
//         id: 5,
//         title: "Redmi A1",
//         price: "5,399",
//         image: "https://m.media-amazon.com/images/I/41JM3Ra+tiL._AC_UF334,334_FMjpg_.jpg",
//     },
//     {
//         id: 6,
//         title: "Fire TV",
//         price: "3,000",
//         image: "https://m.media-amazon.com/images/I/51lX5oZbtQL._AC_UF334,334_FMjpg_.jpg",
//     },
//     {
//         id: 7,
//         title: "Washing Machine",
//         price: "12,000",
//         image: "https://m.media-amazon.com/images/I/41OSm89f6hL._AC_UF334,334_FMjpg_.jpg",
//     },
// ];
