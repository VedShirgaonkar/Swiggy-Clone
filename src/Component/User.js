import { useState } from "react";
const User=(props)=>{
    const [count,setCount] = useState(0);
    return (<div className="user-card">
        <h3>Count={count}</h3>
        <button onClick={()=>{
            const countInc = count+1;
            setCount(countInc);
        }}>Count Increment</button>
        <h3>{props.name}</h3>
        <h3>{props.location}</h3>
        <h4>Software Developer</h4>
        <h4>@Swiggy</h4>
    </div>)
}
export default User;