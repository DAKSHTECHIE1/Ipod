import React from "react";
import Screeninside from './screeninside';
const Screen=(props)=>{
        return(
        <div className="screen" >
            <Screeninside active={props.active} updateRender={props.updateRender} screen={props.screen}/>
        </div>)
}
export default Screen;