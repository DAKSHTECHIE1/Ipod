import React from 'react';
import Screen from './screen';
import Control from './control';
const Ipod=(props)=>{
        return(
            <div className='Ipod'>
                <Screen active={props.active} updateRender={props.updateRender}/>
                <Control active={props.active} handleActive={props.handleActive}/>
            </div>
        )
    
};
export default Ipod;
