import React from 'react'
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon';
import CartDropDown from '../cart-dropdown/cart-dropdown';

import {auth} from '../firebase/firebase';
import { connect } from 'react-redux'; 

import './header.scss';


const Header = ({currentUser, hidden}) => ( 
    <div className='header'>

        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>

        <div className='options'>
            {/* link component to go to diffrent pages what they call navigation..... */}
            <Link className='option' to='/shop'>
                SHOP
            </Link>

            <Link className='option' to='/cantact'>
                CANTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN </Link>
            }

            <CartIcon/>
            
        </div>
        {
            //if hidden is true then we render nothing otherwise if hidden is flase wich means that the user clicked
            //on the fucking cart icon then we show the fucking cart-drop-down thing fuck this hard ...
            hidden ? null : <CartDropDown />
        }
    </div>  
);


//some redux shit that i still need to fully undertstand meanwhile 
//redux is a bitch but it's a good system architecture to manage app state i guess and it's industry standard now hhhh
// this just passing the sate as a property so i can use it to 
// determin if the app need to render the drop down thing holly shit .....
//some destructering that i found in course 'user: {currentUser}, cart: {hidden}'
const mapStateToProps = ({user: {currentUser}, cart : {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
