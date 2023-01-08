import React from "react";
import Left from'./left'
import Right from './right'
const Screeninside=(props)=>{
    return(
        <div className="screeninside">
            <Left active={props.active} updateRender={props.updateRender}/>
            <Right/>
        </div>
    )
}
export default Screeninside;