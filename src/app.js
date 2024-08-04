import React, { lazy,Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Error from "./Component/Error";
import Restaurantsmenu from "./Component/Restaurantsmenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Component/Cart";
//import Grocery from "./Component/Grocery";
const Grocery = lazy(()=>import("./Component/Grocery"))


const AppLayout = ()=>{
  const [userName,setUserName] = useState();
  useEffect(()=>{
    const data = {
      name:"Ved"
    }
    setUserName(data.name)
  },[])
  return (
    <Provider store={appStore}>
  <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="App">
        <Header />
        <Outlet />
    </div>
  </UserContext.Provider>
  </Provider>
      
      
   
  )
}
const appRoute = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/grocery",
        element:<Suspense><Grocery/></Suspense>
      },
      {
        path:"/restaurants/:resID",
        element:<Restaurantsmenu />
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement:< Error />
  },
  
])
const roots = ReactDOM.createRoot(document.getElementById("root"));
roots.render(<RouterProvider router={appRoute}/>);