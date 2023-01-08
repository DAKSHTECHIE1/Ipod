import React from "react";
import Outer from './outer';
import Inner from './inner';
const Control=(props)=>{
    // console.log(props.active);
    return(
        <div className='Control'>
            <Outer active={props.active}handleActive={props.handleActive}/>
            <Inner/>
        </div>
    )
}
export default Control;