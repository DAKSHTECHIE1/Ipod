import React from "react";
class Inner extends React.Component{
    //to provide the functionality of entering a particular menu option by clicking the centre button
    componentDidMount(){
        var element=document.getElementsByClassName('inner');
        console.log(this.props)
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