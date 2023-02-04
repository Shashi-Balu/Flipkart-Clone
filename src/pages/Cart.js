import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import CartItemsDetails from "./CartItemsDetails";

function Cart() {
    const [cart, setCart] = useState([]);

    async function cartApi() {
        const response = await (await fetch("https://fakestoreapi.com/products")).json();
        console.log(response[0].products);
        setCart(response);
    }

    useEffect(() => {
        cartApi();
    }, []);

    const removeItem = () => {
        const item = localStorage.setItem("cart", JSON.stringify(cart));
        let storedItems = JSON.parse(localStorage.getItem("cart"));
        console.log("item removed", item);
        
    };


    return (
        <div className="cart">
            <div className="cart-container">
                {cart.slice(0, 4).map((value) => (
                    <CartItem
                        image={value.image}
                        price={value.price}
                        title={value.title}
                        category={value.category}
                        removeItem={removeItem}
                    />
                ))}
            </div>

            <CartItemsDetails />
        </div>
    );
}

export default Cart;
