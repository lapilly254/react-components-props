import React from "react";

function Order({name, ordeNumber}) {
    return (
        <div>
           <h2>{name}</h2>
           <p>Order no: Plus00{ordeNumber}</p>
        </div>
    )
}

export default Order;