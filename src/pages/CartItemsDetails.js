import React, { useState, useEffect } from "react";
import "./CartItemDetails.css";

function CartItemsDetails() {
    const [cart, setCart] = useState([]);

    async function cartApi() {
        const response = await (await fetch("https://fakestoreapi.com/products")).json();
        console.log(response[0].products);
        setCart(response);
    }
    const total = cart.slice(0, 5).map((value) => value.price);
    console.log(total);
    const sum = total.reduce((result, number) => result + number, 0).toFixed(2);
    console.log(sum);
    const discount = (sum * 0.1).toFixed(2);
    const priceAfterDiscount = (sum - discount).toFixed(2);

    useEffect(() => {
        cartApi();
    }, []);
    return (
        <div>
            <div className="cart-details">
                <p className="price-heading">Price Details</p>
                <hr className="price-hr" />
                <div className="price-data">
                    <p className="price-total">
                        Price ({total.length} items) <span>&#8377;{sum}</span>
                    </p>

                    <p className="price-discount">
                        Discount<span>10%</span>
                    </p>
                    <p className="price-delivery-fee">
                        Delivery Charges<span>FREE</span>
                    </p>

                    <hr className="price-hr-dotted" />
                    <p className="cart-total-amount">
                        Total Amount <span>&#8377;{priceAfterDiscount}</span>
                    </p>
                    <hr className="price-hr-dotted" />

                    <p className="discount-detail">You will save &#8377;{discount} on this order</p>
                </div>
            </div>
        </div>
    );
}

export default CartItemsDetails;
