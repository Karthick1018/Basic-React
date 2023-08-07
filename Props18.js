import React from "react";

function Props10(props){
    return(
        <div>
            <h1>HI {props.details.name}</h1>
            <h2>Email:{props.details.email}</h2>
            <h3>Age:{props.details.age}</h3>
        </div>
    )
}
export default Props10;

