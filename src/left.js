import React from "react";
class Left extends React.Component{
    //function to update the color of selected menu option to blue and removing blue from earlier selected menu option
    componentDidUpdate(prevprops){//okk
        var oldactive=prevprops.active;
        var elem='';
        if(oldactive===1){
            elem='cover';
        }
        else if(oldactive===2){
            elem='music';
        }
        else if(oldactive===3){
            elem='games';
        }
        else if(oldactive===4){
            elem='settings';
        }
        var element = document.getElementsByClassName(`${elem}`);
         element[0].classList.remove('bluer');
         var newactive=this.props.active;
         console.log('pp',newactive);
         var newelem='';
         if(newactive===1){
            newelem='cover';
        }
        else if(newactive===2){
            newelem='music';
        }
        else if(newactive===3){
            newelem='games';
        }
        else if(newactive===4){
            newelem='settings';
        }
        var elemento = document.getElementsByClassName(`${newelem}`);
        elemento[0].classList.add("bluer");
     }
    render(){
    console.log('in left',this.props.active);
    return(
        <div className="left">
        <div className="heading"><h2>Ipod.js</h2></div>
        <div className="list">
            <ul>
              <div className="cover bluer" ><li>CoverFlow</li></div>
              <div className="music"><li>Music</li></div>
              <div className="games"><li>Games</li></div>
              <div className="settings"><li>Settings</li></div>
            </ul>
        </div>
        </div>
    )
    }
}
export default Left;