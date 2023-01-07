import React from "react";
import Outer from './outer';
import Inner from './inner';
const Control=(props)=>{
    return(
        <div className='Control'>
            <Outer/>
            <Inner/>
        </div>
    )
}
export default Control;