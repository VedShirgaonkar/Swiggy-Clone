import User from "./User";
import Userclass from "./Userclass";
import React from "react";
class About extends React.Component{
    constructor(props){ 
        super(props);
       // console.log("Parent Constructor Called");
    }
    componentDidMount(){
        //console.log("Parent componend did mount method called")

    }
    render(){
       // console.log("Parent Render Called");
        return (<div className="Aboutus">
        <h1>Hello this is About us Page</h1>
        {/* <User name={"Ved Shirgaonkar (functional component)"} location={"Pune"}/> */}
        <Userclass name={"Ved Shirgaonkar (Class component)"} location={"Mumbai"}/>
    </div>)
    }
}
// const About = ()=>{
//     return (<div className="Aboutus">
//         <h1>Hello this is About us Page</h1>
//         <User name={"Ved Shirgaonkar (functional component)"} location={"Pune"}/>
//         <Userclass name={"Ved Shirgaonkar (Class component)"} location={"Mumbai"}/>
//     </div>)
// }
export default About;