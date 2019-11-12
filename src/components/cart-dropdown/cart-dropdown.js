import React from 'react';
//pulling the items from the redux store so that CartItem can display the item i know this fucked up hhhhh... 
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';


import './cart-dropdown.scss';

const CartDropDown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                //map over all cartItems and displaying the items in the cartDropdown 
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} /> ) )
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
});


export default connect(mapStateToProps)(CartDropDown);