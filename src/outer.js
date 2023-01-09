import React from "react";
import ZingTouch from 'zingtouch';
class Outer extends React.Component{
    componentDidMount(){
        var a=document.getElementsByClassName('outer');
        var activeRegion = ZingTouch.Region(a[0]);
        activeRegion.bind(a[0], 'rotate',this.props.handleActive);
        var b=document.getElementsByClassName('menu');
        b[0].addEventListener('click',this.props.backToMenu);
       
    }
    render(){
        // console.log(this.props.active);
        return(
            <div className="outer">
            <div className="menu"><h3>Menu</h3></div>
            <div className="ahead"></div>
            <div className="back"></div>
            <div className="down"></div>
            </div>
        )
    }
}
export default Outer;
