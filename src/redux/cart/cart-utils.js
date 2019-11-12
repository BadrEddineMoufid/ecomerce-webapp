export const addItemToCart = (cartItems, cartItemToAdd) => {
    //checking the old items id with the new ones to increase the quantity value 

    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id );
    
    if(existingCartItem){
        //returning a new Array using map() so that React detect the change and rerender the fucking thing 


        return cartItems.map(
            cartItem => cartItem.id === cartItemToAdd.id 
            ? 
            {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
    }
    //if it the new item is not the same as any of the old one it will be returned 
    //with the new quantity property added to the item object
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}