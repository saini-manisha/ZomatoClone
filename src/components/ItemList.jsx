//import React from 'react'
import { useDispatch } from "react-redux"
import { CDN_URL } from "../utils/constants"
import { addItem } from "../utils/cartSlice";
const ItemList = ({ itemCards }) => {

     const dispatch=useDispatch();
    
    function handleAddItem(item){
        //dispatch an action
        dispatch(addItem(item)) 
          
            
     }

     return (
        <div>
            <div >
                {itemCards.map(item =>
                    <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
                        <div className="w-9/12 ">
                            <h2 className="text-bold">{item.card.info.name}</h2>
                            <p>₹{item.card.info.price / 100}</p>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="3/12">
                            <div className="absolute ml-[2px]  ">
                                <button
                                    className="w-[95px] px-2 rounded bg-white shadow-lg text-green-400 m-auto"
                                    onClick={()=>handleAddItem(item)}>

                                     add item <span className="absolute">+</span></button></div>
                            <img className="w-20 h-30 rounded-lg"
                                src={CDN_URL + item.card.info.imageId} alt="" />

                        </div>
                    </div>)}

            </div>


        </div>
    )
}

export default ItemList