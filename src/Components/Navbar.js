import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Menu from '../Assets/images/icon-menu.svg';
import CartImg from '../Assets/images/icon-cart.svg';
import Avatar from '../Assets/images/image-avatar.png';
import Cart from './Cart';
import { toggleNav } from './../Store/Action/navAction';

const Navbar = () => {

    const [cartHover, setCartHover] = useState(false);
    const dispatch = useDispatch();
   
    const cartState = useSelector(state => state.cartReducer);
    const authenticate = useSelector(state => state.authReducer);

    const hoverHandler = () => {
        setCartHover(prev => !prev);
    }

    const toggleMenu = () => {
        dispatch(toggleNav());
    }


    const profile = async () => {
        const data = await fetch(`https://treen-api.herokuapp.com/api/v1/users/me`, {
            headers: {
                Authorization : `Bearer ${authenticate}`
            },
        
        })
        const resp = await data.json()
        console.log(resp);
    }    

    return (
        <div className="navigation">
            <div className="menu" onClick={toggleMenu}>
                <img src={Menu} alt="menu_icon" />
            </div>
            <div className="logo">
                <h1>sneakers</h1>
            </div>
            <div className="links">
                <a href="#collection">Collections</a>
                <a href="#man">Man</a>
                <a href="#woman">Woman</a>
                <a href="#about">About</a>
                <a href="#contacy">Contact</a>
            </div>
            <div className="profile_section">
                <div className="cart_icon_cont" onClick={hoverHandler} >
                    {cartState.counter > 0 && <div className="count">{cartState.counter}</div>}
                    <img alt="cart_icon" src={CartImg} style={{cursor: 'pointer'}}/>
                    {cartHover && <Cart />}
                </div>
                <div className="profile" onClick={profile}>
                    <img alt="cart_icon" src={Avatar}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
