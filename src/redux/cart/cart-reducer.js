import CartActionTypes from './cart-types';


//the cart drop-down should be hidden until user click on the cart icon 
//so tht means that the hidden should be true at first
const INITIAL_STATE = {
    hidden: true
}


const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            //returning the oposite 
            return{
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default cartReducer;