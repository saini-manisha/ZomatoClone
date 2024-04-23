import {  useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btn,setBtn]=useState("Login");
  const onlineStatus=useOnlineStatus();
  const {loggedInUser}=useContext(UserContext);

  const cartItems=useSelector((store)=>store.cart.items)
  console.log(cartItems);
 

  
  
    return (
      <div className="border flex items-center justify-between m-[30px]">
        <div className="logo-container">
          <img className="w-[150px] object-cover " src="https://png.pngtree.com/png-clipart/20230106/original/pngtree-simple-and-modern-food-logo-vector-design-png-image_8876455.png"></img>
        </div>
        <div className="nav-items">
          
          <ul className="flex gap-2">
            <li className="p-2 m-2">Online Status:{onlineStatus?"online":"offline"} </li>
            <li className="p-2 m-2"><Link to="/">Home</Link></li>
            <li className="p-2 m-2"><Link to="/about">About Us</Link> </li>
            
            <li className="p-2 m-2"><Link to="/contact">Contact Us</Link> </li>
            <li className="p-2 m-2"><Link to="/grocery">Grocery</Link> </li>

            <li className="p-2 m-2 "><Link to="/cart">Cart( <span className="font-bold">{cartItems.length}</span>)items</Link></li>
            <li  className="p-2 m-2 bg-[#f0f0f0]"> <button onClick={()=>{
              btn==="Login"?setBtn("Logout"):setBtn("Login");
            }}>{btn}</button></li>

            <li className="p-2 m-2 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;