import React from "react";
class Inner extends React.Component{
    componentDidMount(){
        var element=document.getElementsByClassName('inner');
        element[0].addEventListener('click',this.props.updateScreen);
    }
    render(){
            return(
            <div className="inner">

            </div>
        )
    }
}
    
export default Inner;