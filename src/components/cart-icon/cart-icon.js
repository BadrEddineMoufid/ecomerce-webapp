import React from 'react';
import {connect} from 'react-redux';

import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {toggleCartHidden} from '../../redux/cart/cart-action';

import './cart-icon.scss';

//functional component that renders the SVG icon and span to show number of items in the cart
const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden} >
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


//passing the itemCount to the state so i can use it in the CartIcon component
const mapStateToProps = ({ cart: {cartItems} }) => ({
    //using the reduce methode to count the number of item in the cart 
    //and desplaying them in the cart icon thing...
    itemCount: cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0 )
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);