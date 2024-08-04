import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestroCards =(props)=>{
    const {resData} = props;
    //console.log(resData)
    const {loggedInUser} = useContext(UserContext)
    const {cloudinaryImageId,name,avgRating,areaName,cuisines} = resData?.info;
   const {deliveryTime} = resData?.info.sla;
  return (
    <div className="res-cards m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-300 hover:border border-black">
      <img
      className="res-logo"
      src = {CDN_URL+cloudinaryImageId}></img>
    <h3>{name}</h3>
    <h4>Rating {avgRating} ⭐</h4>
    <h4>{deliveryTime} minutes</h4>
    <h4>Area:{areaName}</h4>    
    <h4 className="text-md text-black-600">Cuisines:{cuisines.join(", ")}</h4>
    <h4>User: {loggedInUser}</h4>
  </div>
  );
  } 

  export const witPromotedFlag=(RestroCards)=>{
    return (props)=>{
      return (<div>
        <label className="absolute bg-green-500 text-white m-2 p-2 rounded-lg">Open </label>
        <RestroCards {...props}/>
      </div>);
    }
  }
  export default RestroCards