import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestroMenu = () => {

  const { resId } = useParams();
  const [showIndex,setShowIndex]=useState(null);

  const resInfo = useRestaurantMenu(resId)
 
  if (resInfo === null) {
    return <Shimmer></Shimmer>
  }


  return (

    <div className="text-center">

      {
        resInfo.map((card, index) => 
        <RestaurantCategory key={index} 
        
        data={card?.card?.card}
         showItems={showIndex===index && true}
         setShowIndex={()=>{setShowIndex(prev=>{
          if(prev===index){
            return showIndex==null?index:null;
          }
          return index;
         })}}>
           
         </RestaurantCategory>)
      }


    </div>
  )
}

export default RestroMenu