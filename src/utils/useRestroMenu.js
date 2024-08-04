import { useState,useEffect } from "react";
import { MENU_API } from "./constants";
const useRestroMenu =(resID)=>{
    const [resinfo,setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[])
    const  fetchData=async()=>{
        const data = await fetch(MENU_API+resID+"&catalog_qa=undefined&submitAction=ENTER");
        const jsonData = await data.json();
        console.log(jsonData)
        setResInfo(jsonData.data);
    }
    return resinfo;
}
export default useRestroMenu;