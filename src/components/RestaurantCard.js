import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurantCard=(props)=>{
    //const{resName,cuisine}=props
    const{resData}=props;
    const{LoggedInUser}=useContext(UserContext);
    //console.log(props);
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,locality}=resData.info;
    return(
        <div className='m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400' >
            <img className='rounded-lg' src={CDN_URL+cloudinaryImageId} alt="no image" />
            <h1 className="font-bold py-4 text-lg">{name}</h1>
            <h4>{cuisines.join(",")}</h4>
            <h4> {avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{locality}</h4>
            <h5>{LoggedInUser}</h5>

        </div>
    )
}

//Higher Order Component
// input  RestaurantCard===> o/p RestaurantCard with veg value
export const RestaurantCardVeg=(RestaurantCard)=>{
    return(props)=>{
return(
<div>
    <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Veg</label>
    <RestaurantCard {...props}/>
</div>
)
    }
        
    
}

export default RestaurantCard;