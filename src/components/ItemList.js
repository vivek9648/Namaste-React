import React from 'react';
import { CDN_URL } from '../utils/constant';

import  {addItems}  from '../utils/cartSlice';
import { useDispatch } from 'react-redux';



const ItemList = ({items}) => {
    
    const dispatch=useDispatch()
    const handleAddItems=(item)=>{
dispatch(addItems(item))
    }
   
    return (
        <div>
           
               {items.map((item)=>(<div key={item.card.info.id} className='m-2 p-2  border-grey-200 border-b-2 text-left flex'>
               
                 <div className='w-8/12'>
                <div className='py-2 text-bold'>
                <span>{item.card.info.name}</span>
                <span>-₹{item.card.info.price/100}</span>
                </div>
                <p className='text-xs'>{item.card.info.description}</p>
                </div>
                <div className='w-4/12 p-4 '>
                    <div className='absolute'>
                    <button className='bg-black  text-white shadow-lg p-1 mx-14 absolute rounded-lg' onClick={()=>handleAddItems(item)} >Add+</button>
                    </div>
                <img src={CDN_URL+item.card.info.imageId} alt=""  />
             
                 </div>
                 
               </div>))}
            
        </div>
    );
}

export default ItemList;
