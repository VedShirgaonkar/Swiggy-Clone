import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
const MenuItemList=({item})=>{
    console.log(item)
    //dispatch is a function provided by a hook useDispatch ,hook useDispatch is provided by react redux 
    const dispatch = useDispatch()   
    const handleAddItems=(itemData)=>{
        dispatch(addItems(itemData))
    }
    return(<div>
        <ul>
            {
                item.map((itemData)=>(
                    
                <div key ={itemData.card.info.id}
                    className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between" > 
                          
                       <div className="w-9/12">
                           <div className="py-2">
                               <span>
                                   {itemData.card.info.name}
                                   </span>
                               <span>
                                - ₹ {itemData.card.info.defaultPrice/100 || itemData.card.info.price/100}
                               </span>
                               </div>
                                <p className="text-xs">{itemData.card.info.description}</p>
                            </div>
                           <div className="w-3/12 p-4"> 
                               <button className="absolute mx-2  bg-white text-green-400  shadow-lg font-bold rounded-md hover:to-black " onClick={()=>handleAddItems(itemData)}>Add</button>
                               <img src={CDN_URL+itemData.card.info.imageId} className="w-full"/>
                          </div>
   
   
                   </div>))}
        </ul>
    </div>)
}
export default MenuItemList;