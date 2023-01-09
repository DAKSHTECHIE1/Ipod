import React from "react";
import Screeninside from './screeninside';
const Screen=(props)=>{
    if(props.screen===0){  
        return(
        <div className="screen" >
            <Screeninside active={props.active} updateRender={props.updateRender} screen={props.screen}/>
        </div>)
    }
    else if(props.screen===1){
        return(
            <div className="screen">
               <div className="alternate"><h3>coverflow!!!</h3></div>
            </div>
        )
    }
    else if(props.screen===2){
        return(
            <div className="screen">
               <div className="alternate"><h3> Music!!!</h3></div>
            </div>
        )
    }
    else if(props.screen===3){
        return(
            <div className="screen">
               <div className="alternate"><h3> Games!!!</h3></div>
            </div>
        )
    }
    else if(props.screen===4){
        return(
            <div className="screen">
               <div className="alternate"><h3> Settings!!!</h3></div>
            </div>
        )
    }
  
}
export default Screen;