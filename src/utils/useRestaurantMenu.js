import { useEffect, useState } from "react";
import { MENU_API } from '../utils/constant';
const useRestaurantMenu=(resId)=>{
    const[resInfo,setResInfo]=useState(null)
    //fetch data
    useEffect(()=>{
fetchdata()
    },[])
    const  fetchdata=async()=>{
let data=await fetch(MENU_API+resId)
let result =await data.json()
console.log(result);
setResInfo(result?.data)
    }


return resInfo;
}
export default useRestaurantMenu;