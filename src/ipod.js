import React from 'react';
import Screen from './screen';
import Control from './control';
const Ipod=(props)=>{
    // console.log(props.screen)
        return(
            <div className='Ipod'>
                <Screen active={props.active} updateRender={props.updateRender} screen={props.screen}/>
                <Control active={props.active} handleActive={props.handleActive} screen={props.screen} updateScreen={props.updateScreen} backToMenu={props.backToMenu}/>
            </div>
        )
    
};
export default Ipod;
