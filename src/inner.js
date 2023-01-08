import React from "react";
class Inner extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        var elem=document.getElementsByClassName('inner')
        elem[0].addEventListener('click',()=>console.log('button'))
    }
    render(){
            return(
            <div className="inner">

            </div>
        )
    }
}
    
export default Inner;