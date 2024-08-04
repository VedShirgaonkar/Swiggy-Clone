import React from "react";
class Userclass extends React.Component{
    constructor(props){
        //this scope is best place to write props,states
        super(props)
        this.state={
            userinfo:{
                name:"dummy",
                location:"Mumbai",    
                //avatar_url:"htttp://dumm-photo.com"

            }
        }
    //     console.log("Child Constructor Called");
    }
  async  componentDidMount(){
        const data = await fetch("https://api.github.com/users/VedShirgaonkar")
        const jsonData = await data.json();
        //console.log("Child componend did mount method called")
        console.log(jsonData)
        this.setState({
            userinfo:jsonData
        })
    }
    componentDidUpdate(){
        console.log("Component did Update was called");
    }
    render(){
         const {login,location,avatar_url} = this.state.userinfo;
        //console.log("Child render Called");
        return(<div className="user-card ">
             <img className="w-56 " src={avatar_url}/>   
            <h3>Name: {login}</h3>
            <h3>{location}</h3>
        <h4>Software Developer</h4>
        </div>)
    }
}
export default Userclass;
//