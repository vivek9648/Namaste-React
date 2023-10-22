import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useContext, useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

  const Header=()=>{
    
    const[btnName1,setbtnName]=useState("Login")
    const onlinestatus=useOnlineStatus()
    const {LoggedInUser}=useContext(UserContext)

    // Subsribibg the store using Selector .
    //Selector is hoook
    const cartItems=useSelector((store)=>store.cart.items)
    console.log(cartItems);
    //inplace of this we can  also use this. but this is not good way 
    // const store=useSelector((store)=>store)
    // const cartItems=store.cart.items;
    
    
    //const[btnName1,setbtnName]=arr
    // const btnName1=arr[0];
    // const setbtnName=arr[1]
    //console.log("Header");
    //if depency array is empty use effect is called on intial render(just once).
    //if depency array is [btnName1] use effect is called every time when btnName1 is updated.
//     useEffect(()=>{
// console.log("useeffct");
//     },[])
    
    return(
        <div className='flex justify-between bg-pink-100 shadow-lg mb-12 sm:bg-yellow-50 lg:bg-green-50'>
            <div className='logo-container'>
               <img className="w-40" src={LOGO_URL} alt="" /> 
            </div>
            <div className='flex items-center '>
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status:{onlinestatus?"✅":"🔴"}</li>
                    <li className="px-4"><Link to="/">Home </Link></li>
                    <li className="px-4"><Link to="/about">About Us </Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us </Link></li>
                    <li className="px-4 font-bold text-xl">
                    <Link to="/cart">Cart ( {cartItems.length}items)</Link>
                        </li>

                    <li className="px-4"><Link to="/grocery">Grocery </Link></li>
                    <button className="login" onClick={()=>
                        {btnName1==="Login"?setbtnName("Logout"):setbtnName("Login")}}>{btnName1}</button>
                       <li className="font-bold mx-4">{LoggedInUser}</li>
                
                </ul>

            </div>

        </div>
    )
}
export default Header;
