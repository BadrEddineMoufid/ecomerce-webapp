import CartActionTypes from './cart-types';
import {addItemToCart} from './cart-utils';

//the cart drop-down should be hidden until user click on the cart icon 
//that means that the hidden prop should be true at first
//storing all items in an Array
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}


const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            //returning the oposite 
            return{
                ...state,
                hidden: !state.hidden
            }
        
            case CartActionTypes.ADD_ITEM: 
            //returning previous cart items plus the new items passed in the payload 
            return {
                ...state,
                //addItemToCart funct is used to group items of the same id by checking the old items id
                // in the cart and the new added item from action.payload and updating the quantity property in
                //the item object if the item is new the quantity prop is added to the item object with a value of 1
                // then returned 
                cartItems : addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;