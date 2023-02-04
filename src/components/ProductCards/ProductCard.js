import React from "react";
import "./ProductCards.css";

function ProductCard(props) {
    return (
        <div className="product_card">
            <img src={props.image} />
            <p className="title">{props.title}</p>
            <p className="price">{props.price}/-</p>
        </div>
    );
}

export default ProductCard;
