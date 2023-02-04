import React from "react";
import "./CartItem.css";

function CartItem(props) {
    return (
        <div>
            <div className="cart-item-container">
                <img className="cart-item-img" src={props.image} />
                <div className="cart-item-text">
                    <h3>{props.title}</h3>
                    <p className="cart-item-category">{props.category}</p>
                    <p>{props.price}/-</p>
                    <button className="cart-item-remove" onClick={props.removeItem}>Remove</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
