import { useState } from "react";
import MenuItemList from "./MenuItemList";
const RestarauntMenuCategory=({data,showItems,setShowIndex})=>{
    //console.log(data)
    //console.log("This is"+JSON.stringify(data.itemCards))
    const handleClick=()=>{
       //setShowItems(!showItems);
       setShowIndex()
    }
return (<div>
    <div className="w-6/12 mx-auto my-4 bg-teal-50" >
    <div className="flex  justify-between cursor-pointer" onClick={handleClick}>
    <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
    <span>⬇ </span>
    </div>
    {showItems && <MenuItemList item={data.itemCards}/>}

    </div>

</div>)
}
export default RestarauntMenuCategory;