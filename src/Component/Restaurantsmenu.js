import { Shimmerui } from "./Shimmerui";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";
import RestrauntMenuCategory from "./RestrauntMenuCategory";
import { useState } from "react";
const Restaurantsmenu = () => {
  const {resID} = useParams();
  const resMenu = useRestroMenu(resID);
 const [showIndex,setShowIndex] = useState(null);
  if(resMenu === null) return <Shimmerui/>
   const {text} = resMenu?.cards[0]?.card?.card
 // const {itemCards} = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card;
  //console.log(resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards)
  //console.log(resMenu)
  const categories = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  //console.log(categories)
    return (
      <div className="text-center ">
        <h1 className="font-bold my-6">Restaurant Name {text}</h1>
        <h2></h2>
        

        <ul>
        {/* {itemCards&&itemCards.map((item, index) =>{
          return <li key={index}> {item.card.info.name} - {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
        })} */}


        {
          categories.map((category,index)=>{
            //console.log("Hieeee"+JSON.stringify(category?.card?.card));
            return <RestrauntMenuCategory
             key={category?.card?.card.title}
             data={category?.card?.card}
             showItems = {index==showIndex?true:false} 
             setShowIndex={()=>setShowIndex(index)}
          />
          })
        }
          <li>End of List</li>
        </ul>
  
      </div>
    )
}
  
  export default Restaurantsmenu;
