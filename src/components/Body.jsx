import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {

  const [listOfRestaurants,setListOfRestaurant]=useState([])
  const [searchText,setSearchText]=useState("");
  const [filteredRestaurants,setFilteredRestaurants]=useState([]);
  const onelineStatus=useOnlineStatus();


  
  useEffect(()=>{
    fetchData();
    
  },[])
  

  async function fetchData(){
    const response=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const data=await response.json();
    const restaurantList=data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    
    
    setListOfRestaurant(restaurantList)
    setFilteredRestaurants(restaurantList)
  
  }

  

  if(onelineStatus===false) return <h1>Looks like you are offline. Pls check your internet</h1>


  

  
    return listOfRestaurants.length===0?<Shimmer/>:(
      <>
        <div className="body w-full">
  
          <div className="search flex gap-2">
            <div>
              <input
               className="border" 
               type="text"
               value={searchText}
               onChange={(e)=>{
                setSearchText(e.target.value)
                setFilteredRestaurants(listOfRestaurants)
               }}/>
              <button className="border bg-[#f0f0f0]" onClick={()=>{
                const filteredList=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                setFilteredRestaurants(filteredList)
              }}
              >Search</button>
            </div>
            <button onClick={()=>{
              console.log("clicked")
              const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4.2)
              
              setListOfRestaurant(filteredList)

            }} className="border bg-[#f0f0f0]">Top Rated Restorant</button>
          </div>
          <div className="res-container flex flex-wrap">
            {

               filteredRestaurants.map(restorant=><Link key={restorant.info.id} to={"/restaurants/"+restorant.info.id}><RestaurantCard  restro={restorant}></RestaurantCard></Link> )
            }                    
            </div>
  
        </div>
      </>
  
    );
  }
export default Body;  