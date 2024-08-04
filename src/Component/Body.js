import RestroCards,{witPromotedFlag} from "./RestroCards";
import { useState,useEffect,useContext } from "react";
import {Shimmerui} from "./Shimmerui";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = ()=>{
  const [listOfRestraunts,setListofRestraunts] = useState([]);
  const [filteredListOfRestraunts,setFilteredListofRestraunts] = useState([]);

//Below is the alternat represntation of code written on line number 5  its just aarray destructuring observe carefully
//  const arr = useState([]) //we can pass anything instead of array as per our requirement or based on datatype of data which we are recieving 
//  const listOfRestraunts = arr[0];
// const setListofRestraunts =arr[1];
//https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING
const[searchText,setSearchText]=useState("")
const RestaurantPromoted = witPromotedFlag(RestroCards); //RestaurantPromoted is a component which hold all the values and properties of higher order component witPromotedFlag(RestroCards)
//console.log(RestaurantPromoted)
useEffect(()=>{
  fetchData();
},[]);
const fetchData=async()=>{
      const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const jsonData = await data.json();
      //console.log(jsonData);
      //console.log(jsonData?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      setListofRestraunts(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredListofRestraunts(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

}
  const onlineActivity = useOnlineStatus();
  if(onlineActivity === false) return <h1>You are Offline🔴</h1>
  //console.log(listOfRestraunts)
  if( listOfRestraunts.length === 0) return <Shimmerui />
  const {setUserName,loggedInUser} = useContext(UserContext)
return(
      <div className="bodyContainer">
        <div className="filter flex p-4 justify-center">
            <div className="search p-4 ">
              <input className="border border-solid border-black m-2" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value); 
              }}/>
              <button className="searchButton bg-green-500 px-2" onClick={()=>{
                  //console.log(searchText);
                  //console.log(listOfRestraunts);                  
                  const searchFilteredRetro=listOfRestraunts.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                 // console.log(searchFilteredRetro);
                setFilteredListofRestraunts(searchFilteredRetro);
              }}>search</button>

        <button 
          className="filter-btn  bg-gray-400 px-2 m-2" onClick={()=>{
            
            const filteredList=listOfRestraunts.filter((res)=>res.info.avgRating>=4.5);
            //console.log(listOfRestraunts)
            setFilteredListofRestraunts(filteredList)
          }}>
         Top rated Restraunts</button>
        <button className="Reset bg-red-600 px-2"  onClick={()=>{
                      // console.log("reset pressed");
                      const Allrestro =  [...listOfRestraunts];
                      //console.log(Allrestro)
                      setFilteredListofRestraunts(Allrestro);
                      setSearchText("")
        }}>Reset </button>

        <label className="m-2">UserName: </label>
          <input  className="border border-black " value = {loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
            </div>
          
        </div>
        <div className="flex flex-wrap justify-center">
          {
            //filteredListOfRestraunts.length===0?(<h1>Item not Found</h1>):
            filteredListOfRestraunts.map((restraunts)=>{
              //console.log(restraunts);
               return (<Link key={restraunts?.info?.id}to={"/restaurants/"+restraunts?.info?.id}> 
                  {restraunts?.info?.isOpen ?(<RestaurantPromoted resData={restraunts}/>):(<RestroCards  resData={restraunts}/>)}
               </Link>)
             })
          }
        </div>
      </div>
    );
  }
  export default Body;