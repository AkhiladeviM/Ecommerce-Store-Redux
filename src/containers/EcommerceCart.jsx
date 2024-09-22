import React from "react";
import { useSelector } from "react-redux"
const EcommerceCart = () => {
    const cartItems = useSelector(state => state)
    console.log("cartItems = ", cartItems);
    return (
        <div className="container-fluid" style={{ marginTop: "4.5rem", marginLeft: "1rem" }}>
            <div className="row">
                <div className="col-8" style={{ backgroundColor: "black" }}>
                    <h1>Shopping Cart</h1>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EcommerceCart