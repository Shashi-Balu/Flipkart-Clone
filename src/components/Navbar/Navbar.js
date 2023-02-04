import React from "react";
import "./Navbar.css";
import Options from "./Options";
import { Link } from "react-router-dom";

const Navbar = () => {
    /*
        1. logo
        2. input field
        3. item1
        4. item2
        5. item3
        6. item4
    */
    return (
        <div className="navbar">
            <div className="navbar_left">
                <p>Flipkart</p>

                <input
                    className="navbar_left_input"
                    placeholder="Search for products, brands and more"
                />
            </div>

            <Options text="Select an option" />
            <Options text="Become a seller" />
            <Options text="Name" />
        
            <Options text="Cart" />
        </div>
    );
};

export default Navbar;
