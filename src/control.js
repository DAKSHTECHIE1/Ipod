import React from "react";
import Outer from './outer';
import Inner from './inner';
const Control=(props)=>{
    // console.log(props.active);
    return(
        <div className='Control'>
        <Outer active={props.active}handleActive={props.handleActive}  backToMenu={props.backToMenu}/>
        <Inner screen={props.screen} active={props.active}  updateScreen={props.updateScreen}  backToMenu={props.backToMenu}/>
        </div>
    )
}
export default Control;