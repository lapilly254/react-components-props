import React from "react";
import Order from "./Order";

function OrderList() {
    return (
        <div>
            <h1>Orders</h1>
            <Order name = "OnePlus" ordeNumber={1}/>
        </div>
    )
}

export default OrderList