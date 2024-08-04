import { useDispatch, useSelector } from "react-redux";
import MenuItemList from "./MenuItemList";
import { clearItems } from "../utils/cartSlice";
const Cart=()=>{
    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch();
    const handlClearCart=()=>{
        dispatch(clearItems())
    }
    return(<div className="text-center m-4 p-4">  
        <h1>This is a cart</h1>
        <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handlClearCart}>Clear Cart</button>
            <MenuItemList item = {cartItems}/>
        </div>
    </div>)
}
export default Cart;