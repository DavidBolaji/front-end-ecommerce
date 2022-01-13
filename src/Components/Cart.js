import React from 'react';
import Product1 from '../Assets/images/image-product-1.jpg';
import Trash from '../Assets/images/icon-delete.svg';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from './../Store/Action/cartAction';

const Cart = () => {
    // const counter = useSelector(state => state.counterReducer)
    const cartState = useSelector(state => state.cartReducer);
    const authenticate = useSelector(state => state.authReducer);
    const dispatch = useDispatch();

    const removeCart = async () => {
        const prodId = '60aedf1f719956001508ef1a';
        dispatch(clearCart())
        const dataOne = await fetch(`https://treen-api.herokuapp.com/api/v1/cart/deleteCart/${prodId}`, {
                    method: 'POST',
                    headers: {
                        Authorization : `Bearer ${authenticate}`
                    },
            
            })
        const respOne = await dataOne.json()
        console.log(respOne);
       
    }
    
    return (
        <div className="cart">
            <div className="cart_head">
                <h2>Cart</h2>
            </div>
            <hr className="line" />
            {!cartState.counter &&<div className="empty_body">
                <p>Cart is Empty</p>
            </div>}
            {cartState.counter ? <div className="cart_body">
                <div className="item">
                    <div className="item_img">
                        <img src={Product1} alt="shoe" />
                    </div>
                    <div className="item_text">
                        <p>Fall Limited Edition Sneakers</p>
                        <p>$125 x {cartState.counter} <b>${cartState.price.toFixed(2)}</b></p>
                    </div>
                    <div className="item_icon" onClick={removeCart}>
                        <img src={Trash} alt="shoe" />
                    </div>
                </div>
                <div className="checkout">
                    <button>checkout</button>
                </div>
            </div>: null}
        </div>
    )
}

export default Cart
