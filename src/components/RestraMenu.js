import React from 'react';
import { useEffect,useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestraMenu = () => {
    //const[resInfo,setResInfo]=useState(null);
    const {resId}=useParams();
    //Custom  Hooks
    const resInfo=useRestaurantMenu(resId)
    // useEffect(()=>{
    //     fetchMenu()
    // },[])
    // const fetchMenu=async()=>{
    //     const data=await fetch(MENU_API+resId)
    // const result=await data.json();
    // console.log(result);
    // setResInfo(result?.data)
    // }
    const[showIndex,setShowIndex]=useState(0)
    
    
    if(resInfo===null){
        return <Shimmer/>
    }
    const{name,cuisines,costForTwoMessage}=resInfo.cards[0]?.card?.card?.info
    const{itemCards}=resInfo?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    //console.log(resInfo?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards);
    const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(c=>c.card?.card?.["@type"]===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    //console.log(categories)
    
    
    return (
        <div className='text-center'>
            <h1 className='font-bold my-6 text-2xl'>Name of the Restaurant {name}</h1>
          
            <p className='font-bold text-xl'> {cuisines.join(",")} - {costForTwoMessage}</p>

            
            {/* Categories accordian */}
            {categories.map((category,index)=>
            //controlled component
            <RestaurantCategory 
            key={category?.card?.card.title}data={category?.card?.card}
            showItems={index===showIndex?true:false}
            setShowIndex={()=>setShowIndex(index)}
            />)}
               
                
            
            
        </div>
    );
}

export default RestraMenu;
