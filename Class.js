import React from "react";
class Bike extends React.Component{
    render(){
        return(
            <div>
            <h1>Hii</h1>
            <p>The brand name is {this.props.brand}</p>
            </div>
        )
    }
}

export default Bike;