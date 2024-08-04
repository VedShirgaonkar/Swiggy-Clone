import { useState,useContext } from "react";
import {LOGO_URL} from "../utils/constants"
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () =>{
 const [btnName,setBtnName]=useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext)
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);
    //console.log(loggedInUser);
    return (
      <div className="flex justify-between lg:bg-orange-400 sm:bg-gray-400"  >
        <div className="LogoContainer">
          <img 
          className="w-32"
          src = {LOGO_URL}></img>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-5 text-white">
            <li className="px-4">Internet Status: {onlineStatus?"Online🟢":"Offline🔴"}</li>
            <li className="px-4">
             <Link to="/">Home</Link> </li>
            <li className="px-4">
            <Link to="/about">About Us</Link></li>
            <li className="px-4">
            <Link to="/contact">Contact Us</Link></li>
            <li className="px-4">
            <Link to="/Grocery">Grocery</Link></li>
            <li className="px-4">
            <Link to="/cart">(Cart {cartItems.length} items)</Link>
            </li>             
            <button className="btnName px-4" onClick={()=>{
             btnName ==="Login"? setBtnName("Logout"):setBtnName("Login");
            }}>{btnName}</button>
            <li className="px-4">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;