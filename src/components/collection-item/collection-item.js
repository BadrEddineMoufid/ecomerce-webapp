import React from 'react'
import CustomButton from '../custom-button/custom-button';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart-action'

import './collection-item.scss';

//passing the item as param to addItem funct


const CollectionItem = ({item, addItem}) =>{
    const {name, price, imageUrl} = item;
    return(
    <div className='collection-item'>
        <div 
            className='image' 
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-footer'></div>
        <span className='name'>{name}</span>
        <span className='price'>{price} </span>
        <CustomButton onClick={() => addItem(item)}  inverted > ADD TO CART </CustomButton>
    </div>  
)}


//redux shit that i still need to undurstand
//using dispatch to pass props
const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
