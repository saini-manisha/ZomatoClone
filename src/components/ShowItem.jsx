//import React from 'react'


const ShowItem = (props) => {
    console.log(props)
   const {name,description,price,imageId,ratings}=props.card;
  return (
    <div className="flex gap-8">
        <div>
            <h1>{name}</h1>
            <h2>{price/100}</h2>
            <p>{description}</p>
        </div>
        <div>
            <img 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+imageId}
             alt="" />
        </div>
    </div>
  )
}

export default ShowItem