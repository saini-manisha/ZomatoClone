import { useState } from "react";
import ItemList from "./ItemList";


const RestaurantCategory = ({data,showItems,setShowIndex}) => {
    
    const { title ,itemCards} = data;
    
    const handleClick=()=>{
        setShowIndex()
    }
    return (
        <div className="flex justify-center">
            {/* Header */}
            <div className="w-6/12 mx-auto my-4 flex bg-gray-100 shadow-lg p-4  flex-col">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{title}({itemCards.length})</span>
                    <span className="font-bold text-lg">⌄</span>

                </div>
                {
                    showItems && <ItemList itemCards={itemCards}></ItemList>
                }

                
            </div>






            {/* Accordion Body */}
        </div>
    )
}

export default RestaurantCategory