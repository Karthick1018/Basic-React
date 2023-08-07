import React from "react";
function Main(kar1){
    return(
        <h1>{kar1.name}</h1>
    )
}
function Sub(){
    return(
        <Main name="Karthi"/>
    )
}
export default Sub;
