import React from "react";

class Cup1 extends  React.Component{
constructor(props){
    super(props);
    this.state={
        name1:"karthi",
        age:23
    };
}
render(){
    return(
        <div>
        <h1>My name is {this.state.name1}</h1>
        <p>My age is {this.state.age}</p>
        </div>
    )
}
}
export default Cup1;


