import React from "react"
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:1
        }
       
    }
    componentDidMount(){
        console.log("child component did mount called");
    }

    componentDidUpdate(){
        console.log("child componentDidupdate called");
    }

    render(){
      
        return <>
       <UserContext.Consumer>
        {(data)=><h1>{data.loggedInUser}</h1>}
       </UserContext.Consumer>

        <h1>{this.props.name}</h1>
        <h1>Count1: {this.state.count}</h1>
        <h1>Name:Manisha class </h1>
        <h2>Location: Narnaul</h2>

        </>
    }
}

export default UserClass