import { useEffect, useState } from "react";
import {MENU_API} from "../utils/constants"
const useRestaurantMenu =(resId)=>{
    const [resInfo,setResInfo]=useState(null);
    
    useEffect(()=>{
        fetchMenu(resId);
    },[]);


    const fetchMenu=async(resId)=>{
        
        const response=await fetch(MENU_API+resId);
        const json=await response.json();

        let datas=json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
        datas=datas.filter(c=>c.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        setResInfo(datas)
      }

     
    
      return resInfo;    
}



export default useRestaurantMenu;