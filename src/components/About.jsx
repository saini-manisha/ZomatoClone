//import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component{
    constructor(){
        super();
        console.log("praent constructor")
    }

    componentDidMount(){
        console.log("parnt componentdidmount called");
    }
    componentDidUpdate(){
        console.log("parent componentDidupdate called");
    }
    render(){
        console.log("parent render ");
        return (
            <>
            <h1>About page</h1>
            
            <UserClass name="manisha class"></UserClass>
            {console.log("about")}
            </>
        )
    }
}


export default About;