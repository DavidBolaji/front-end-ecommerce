import React from 'react';
import CartImg from '../Assets/images/icon-cart.svg';
import { decrement, increment } from './../Store/Action/counterAction';
import MainCarou from './MainCarou';

import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './../Store/Action/cartAction';



const Shop = () => {
    const counter = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();
    
    
    return (
        <div className="shop">
            <MainCarou />
            <div className="text">
                <div className="tag">Sneaker Company</div>
                <div className="heading">Fall Limited Edition Sneakers</div>
                
                <div className="paragraph">
                    <p className="main_txt">These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </p>

                    <div className="price">
                        <p className="amount">$125.00</p>
                        <p className="percent">50%</p> 
                        
                    </div>
                    <div className="strike">
                        <p >$250.00</p>
                    </div>
           
                </div>

                <div className="btn">
                    <div className="btn_add">
                        <button className="decrement" onClick={() => dispatch(decrement())}><b>-</b></button>
                        <span>{counter}</span>
                        <button className="increment" onClick={() => dispatch(increment())}><b>+</b></button>
                    </div>
                    <button onClick={() => dispatch(addToCart({counter: counter, price: 125 }))}>
                        <img src={CartImg} alt="cart_icon" />
                            <span>
                                Add to cart
                            </span> 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Shop
