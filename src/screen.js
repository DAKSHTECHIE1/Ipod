import React from "react";
import Screeninside from './screeninside';
//function to define UI for upper part of ipod.js that is named as screen
const Screen=(props)=>{
        return(
        <div className="screen" >
            <Screeninside active={props.active} screen={props.screen}/>
        </div>)
}
export default Screen;