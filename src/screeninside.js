import React from "react";
import Left from'./left'
import Right from './right'
const Screeninside=(props)=>{
    //if-else
    if(props.screen===0){ 
        return(
            <div className="screeninside">
                <Left active={props.active} updateRender={props.updateRender}/>
                <Right/>
            </div>
        )
    }
    else if(props.screen===1){
        return(
            <div className="screeninside">
               <div className="alternate"><h2>Coverflow</h2></div>
               <div className="alternateimg one"></div>
            </div>
        )
    }
    else if(props.screen===2){
        return(
            <div className="screeninside">
               <div className="alternate"><h2>Music</h2></div>
               <div className="alternateimg two"></div>
            </div>
        )
    }
    else if(props.screen===3){
        return(
            <div className="screeninside">
               <div className="alternate"><h2>Games</h2></div>
               <div className="alternateimg three"></div>
            </div>
        )
    }
    else if(props.screen===4){
        return(
            <div className="screeninside">
               <div className="alternate"><h2>Settings</h2></div>
               <div className="alternateimg four"></div>
            </div>
        )
    }
}
export default Screeninside;