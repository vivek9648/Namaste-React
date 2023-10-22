import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    const dispatch=useDispatch()
    const cardItems=useSelector((store)=>(store.cart.items))
    const handleClearCart=()=>{
dispatch(clearCart())
    }
    return (
        <div className='m-4 p-4 text-center'>
            <h1 className='font-bold text-2xl'>Cart</h1>
            <button className='m-2 p-2 text-white bg-black rounded-lg' onClick={handleClearCart}>Clear Cart</button>
            {cardItems.length===0&& <h1>cart is empty Plz add items to the cart </h1>}
            <div className='w-6/12 m-auto'>
                <ItemList items={cardItems}/>
            </div>
        </div>
    );
}

export default Cart;
