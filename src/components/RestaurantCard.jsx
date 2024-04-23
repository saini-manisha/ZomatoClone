import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";
import {useContext} from "react"

const RestaurantCard = (props) => {
    const restro=props.restro.info;

    // const {loggedInUser}=useContext(UserContext)
    // console.log(loggedInUser)
   
    const {name,
      cloudinaryImageId,
      avgRating,
      cuisines,
      costForTwo
    ,lastMileTravelString,locality
  ,areaName,
  nextCloseTime
  }=restro;
    
    return (
      <div className="bg-gray-100 hover:bg-gray-200 m-[30px] w-[300px] border flex flex-col justify-center  ">
        <img 
        className="w-full rounded h-[280px]" 
        src={CDN_URL+cloudinaryImageId} alt="" />
       
         <div className="flex justify-start gap-5 font-semibold py-2">
          <h2 className="font-bold">{name}</h2><span>{avgRating}</span>
        </div>
        <div className="flex justify-start gap-5">
          <p>{cuisines.join(', ')} </p>
          <p>{costForTwo}</p>
        </div>
        <p>{locality}, {areaName}</p>
        <div className="flex justify-start gap-5">
          <p>{nextCloseTime}</p>
          <p>{lastMileTravelString}</p>
          {/* <p>{loggedInUser}</p> */}
        </div>
      </div>
    )
  }

  export default RestaurantCard;