/*import React from "react";

class Mount extends React.Component{
    constructor(props){
        super(props);
        this.state={color:"red"}
    };
    componentDidMount(){
       setTimeout(()=>{
        this.setState({color:"blue"});
       },2000);
    }
    render(){
        return(
           <p style={{
                color: this.state.color,
                backgroundColor: 'Yellow',
                textAlign: 'center',
                paddingTop: 20,
                width: 400,
                height: 80,
                margin: 'auto'
              }}
              >Karthi</p>
        );
    }
}

export default Mount;*/

import React from "react";

class Mount extends React.Component{
    constructor(props){
        super(props);
        this.state={name5:"ram",color:"red"}
    
    };
    componentDidMount(){
        setTimeout(() => {
           this.setState({name5:"sam",color:"blue"}) 
           
        }, 3000);
        
    }
    render(){
        return(
            <div>
            <p style={{fontSize:50,
                      color:this.state.color
            }}
            >Name:{this.state.name5}</p>
            
            </div>
        );
    }
}
export default Mount;



