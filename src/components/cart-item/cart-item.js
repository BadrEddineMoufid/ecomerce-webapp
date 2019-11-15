import React from 'react';
import './cart-item.scss';

//this what is going to be rendered inside the cart item thing that the user
//click on to see the items added to the cart

const CartItem= ({item: {imageUrl, price, name, quantity}}) => (
    <div className="cart-item">
        <img src={imageUrl} alt="item" />
        <div className="item-details">
            <span className="name" >{name}</span>
            <span className="price" >{quantity} x {price}$</span>
        </div>
    </div>
)

export default CartItem;
