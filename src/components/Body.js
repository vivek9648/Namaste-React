import RestaurantCard,{RestaurantCardVeg} from './RestaurantCard';
//import resList from '../utils/mocData';
import { useEffect, useState,useContext } from 'react';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus'
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';

const Body=()=>{
    //local state variable super powerful variable 
    const[resList1,setresList]=useState([])
    const[filterrestra,setFilterrestra]=useState([])
    const[searchtext,setSearchtext]=useState("")
    console.log("body rendered");
   // const arr=useState(resList);
    //const[resList1,setresList]=arr
    //const resList1=arr[0];
    //const setresList=arr[1];
    const RestaurantCardPureVeg=RestaurantCardVeg(RestaurantCard)
    
//Note: Nevere create useState Hooks inside  condition , for loops and function.
    //normal js varable
    // let resList1=[
    //     {
    //         "info": {
    //           "id": "125975",
    //           "name": "Anmol Catering & Events",
    //           "cloudinaryImageId": "cgsgopdwhrlmhbeb3qko",
    //           "locality": "Ajwa Road",
    //           "areaName": "Sayajipura",
    //           "costForTwo": "₹200 for two",
    //           "cuisines": [
    //             "Chinese",
    //             "North Indian",
    //             "Biryani"
    //           ],
    //           "avgRating": 4.1,
    //           "veg": true,
    //           "feeDetails": {
    //             "restaurantId": "125975",
    //             "fees": [
    //               {
    //                 "name": "BASE_DISTANCE",
    //                 "fee": 2800
    //               },
    //               {
    //                 "name": "BASE_TIME"
    //               },
    //               {
    //                 "name": "ANCILLARY_SURGE_FEE"
    //               }
    //             ],
    //             "totalFee": 2800
    //           },
    //           "parentId": "33725",
    //           "avgRatingString": "4.1",
    //           "totalRatingsString": "5K+",
    //           "sla": {
    //             "deliveryTime": 22,
    //             "lastMileTravel": 2.3,
    //             "serviceability": "SERVICEABLE",
    //             "slaString": "22 mins",
    //             "lastMileTravelString": "2.3 km",
    //             "iconType": "ICON_TYPE_EMPTY"
    //           },
    //           "availability": {
    //             "nextCloseTime": "2023-09-02 22:30:00",
    //             "opened": true
    //           },
    //           "badges": {
                
    //           },
    //           "isOpen": true,
    //           "type": "F",
    //           "badgesV2": {
    //             "entityBadges": {
    //               "imageBased": {
                    
    //               },
    //               "textBased": {
                    
    //               },
    //               "textExtendedBadges": {
                    
    //               }
    //             }
    //           },
    //           "aggregatedDiscountInfoV3": {
    //             "header": "₹125 OFF",
    //             "subHeader": "ABOVE ₹249",
    //             "discountTag": "FLAT DEAL",
    //             "discountCalloutInfo": {
    //               "message": "Free Delivery",
    //               "logoCtx": {
    //                 "logo": "v1655895371/free_delivery_logo_hqipbo.png"
    //               }
    //             }
    //           },
    //           "differentiatedUi": {
    //             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //             "differentiatedUiMediaDetails": {
    //               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //               "lottie": {
                    
    //               },
    //               "video": {
                    
    //               }
    //             }
    //           },
    //           "reviewsSummary": {
                
    //           },
    //           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //           "restaurantOfferPresentationInfo": {
                
    //           }
    //         },
    //         "analytics": {
              
    //         },
    //         "cta": {
    //           "link": "https://www.swiggy.com/restaurants/anmol-catering-and-events-ajwa-road-sayajipura-vadodara-125975",
    //           "type": "WEBLINK"
    //         }
    //       },
    //       {
    //         "info": {
    //           "id": "72242",
    //           "name": "Tadka Punjab Ka",
    //           "cloudinaryImageId": "qyw10wtkraqbanu4xvtf",
    //           "locality": "Makarand Desai Road\n",
    //           "areaName": "Diwalipura",
    //           "costForTwo": "₹250 for two",
    //           "cuisines": [
    //             "North Indian",
    //             "Biryani",
    //             "Chinese",
    //             "Punjabi",
    //             "Desserts",
    //             "Thalis"
    //           ],
    //           "avgRating": 4.1,
    //           "veg": true,
    //           "feeDetails": {
    //             "restaurantId": "72242",
    //             "fees": [
    //               {
    //                 "name": "BASE_DISTANCE",
    //                 "fee": 6100
    //               },
    //               {
    //                 "name": "BASE_TIME"
    //               },
    //               {
    //                 "name": "ANCILLARY_SURGE_FEE"
    //               }
    //             ],
    //             "totalFee": 6100
    //           },
    //           "parentId": "199904",
    //           "avgRatingString": "4.1",
    //           "totalRatingsString": "10K+",
    //           "sla": {
    //             "deliveryTime": 34,
    //             "lastMileTravel": 9.5,
    //             "serviceability": "SERVICEABLE",
    //             "slaString": "34 mins",
    //             "lastMileTravelString": "9.5 km",
    //             "iconType": "ICON_TYPE_EMPTY"
    //           },
    //           "availability": {
    //             "nextCloseTime": "2023-09-02 23:30:00",
    //             "opened": true
    //           },
    //           "badges": {
                
    //           },
    //           "isOpen": true,
    //           "type": "F",
    //           "badgesV2": {
    //             "entityBadges": {
    //               "imageBased": {
                    
    //               },
    //               "textBased": {
                    
    //               },
    //               "textExtendedBadges": {
                    
    //               }
    //             }
    //           },
    //           "aggregatedDiscountInfoV3": {
    //             "header": "₹125 OFF",
    //             "subHeader": "ABOVE ₹249",
    //             "discountTag": "FLAT DEAL",
    //             "discountCalloutInfo": {
    //               "message": "Free Delivery",
    //               "logoCtx": {
    //                 "logo": "v1655895371/free_delivery_logo_hqipbo.png"
    //               }
    //             }
    //           },
    //           "differentiatedUi": {
    //             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //             "differentiatedUiMediaDetails": {
    //               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //               "lottie": {
                    
    //               },
    //               "video": {
                    
    //               }
    //             }
    //           },
    //           "reviewsSummary": {
                
    //           },
    //           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //           "restaurantOfferPresentationInfo": {
                
    //           }
    //         },
    //         "analytics": {
              
    //         },
    //         "cta": {
    //           "link": "https://www.swiggy.com/restaurants/tadka-punjab-ka-makarand-desai-road-diwalipura-vadodara-72242",
    //           "type": "WEBLINK"
    //         }
    //       },
    //       {
    //         "info": {
    //           "id": "291999",
    //           "name": "Hotel Sudha",
    //           "cloudinaryImageId": "nig9hnmz4pmcbviyehk2",
    //           "locality": "Adalja Complex",
    //           "areaName": "Subhanpura",
    //           "costForTwo": "₹200 for two",
    //           "cuisines": [
    //             "South Indian"
    //           ],
    //           "avgRating": 3.6,
    //           "veg": true,
    //           "feeDetails": {
    //             "restaurantId": "291999",
    //             "fees": [
    //               {
    //                 "name": "BASE_DISTANCE",
    //                 "fee": 5100
    //               },
    //               {
    //                 "name": "BASE_TIME"
    //               },
    //               {
    //                 "name": "ANCILLARY_SURGE_FEE"
    //               }
    //             ],
    //             "totalFee": 5100
    //           },
    //           "parentId": "102747",
    //           "avgRatingString": "4.5",
    //           "totalRatingsString": "1K+",
    //           "sla": {
    //             "deliveryTime": 33,
    //             "lastMileTravel": 8.3,
    //             "serviceability": "SERVICEABLE",
    //             "slaString": "33 mins",
    //             "lastMileTravelString": "8.3 km",
    //             "iconType": "ICON_TYPE_EMPTY"
    //           },
    //           "availability": {
    //             "nextCloseTime": "2023-09-02 22:00:00",
    //             "opened": true
    //           },
    //           "badges": {
                
    //           },
    //           "isOpen": true,
    //           "type": "F",
    //           "badgesV2": {
    //             "entityBadges": {
    //               "imageBased": {
                    
    //               },
    //               "textBased": {
                    
    //               },
    //               "textExtendedBadges": {
                    
    //               }
    //             }
    //           },
    //           "aggregatedDiscountInfoV3": {
    //             "discountCalloutInfo": {
    //               "message": "Free Delivery",
    //               "logoCtx": {
    //                 "logo": "v1655895371/free_delivery_logo_hqipbo.png"
    //               }
    //             }
    //           },
    //           "differentiatedUi": {
    //             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //             "differentiatedUiMediaDetails": {
    //               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //               "lottie": {
                    
    //               },
    //               "video": {
                    
    //               }
    //             }
    //           }, 
    //           "reviewsSummary": {
                
    //           },
    //           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //           "restaurantOfferPresentationInfo": {
                
    //           }
    //         },
    //         "analytics": {
              
    //         },
    //         "cta": {
    //           "link": "https://www.swiggy.com/restaurants/hotel-sudha-adalja-complex-subhanpura-vadodara-291999",
    //           "type": "WEBLINK"
    //         }
    //       },
    // ]
    useEffect(()=>{
//console.log("component render");
fetchData()
    },[])
    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3149228&lng=73.2247782&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const result=await data.json();
    //console.log(result);
    setresList(result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterrestra(result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
    }
    //console.log("rendered");
    //Conditional rednring
    // if(resList1.length===0){
    //     return <Shimmer/>
    // }
    //console.log("list of restar",resList1);
    const onlinestatus=useOnlineStatus()
    if(onlinestatus===false){
        return (
        <h1>looks like you are offline!! plz check your internet connection</h1>
        )
    }
    const { LoggedInUser,setUserName}=useContext(UserContext)
    return resList1.length===0?(<Shimmer/>):(
        
        <div className='body'>
            <div className='filter flex'>
                <div className='search m-4 p-4' >
<input type="text" className='border border-solid border-black' value={searchtext} onChange={(e)=>{setSearchtext(e.target.value)}} />

<button  className="px-4 py-2 bg-green-100 m-4 rounded-xl"onClick={()=>{
    //filter the restra cart and update the UI
    //search text
    const filterrestra=resList1.filter((res)=>
res.info.name.toLowerCase().includes(searchtext.toLowerCase())
);
setFilterrestra(filterrestra)

    
console.log(searchtext)
}}>
    Search </button>

                </div>
                <div className=' search m-4 p-4 flex items-center'>
                <button className='px-4 py-2 bg-gray-100 rounded-xl' onClick={()=>{
                       //Filter Top rated Restra
                       const fllteredList=resList1.filter((res)=>res.info.avgRating>4);
                    console.log(fllteredList);
                    setresList(fllteredList)
                 
                   
                }}>Top rated Restra</button>
                </div>
                <div className=' search m-4 p-4 flex items-center'>
                    <label >UserName:</label>
                <input type="text"  className='border border-black p-2 ' value={ LoggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
                </div>
            
            </div>
          
              <div className='flex flex-wrap'>
                {
 filterrestra.map((restaurant)=><Link  key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                {
                restaurant.info.veg?(< RestaurantCardPureVeg resData={restaurant}/>):
                
                
   ( <RestaurantCard resData={restaurant}/>)
                }
 </Link>)
}


            </div>

        </div>
    )
}
export default Body;