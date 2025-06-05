import React from "react";

export default function Menu({dish}){
    return(
        <div data-test-id={`menu-item-${dish.category}`}>
            <p>{dish.title}</p>
            <p>{dish.category}</p>
            <p>{dish.price}</p>
            <p>{dish.desc}</p>
            <img src={dish.img}></img>
        </div>
    )
}