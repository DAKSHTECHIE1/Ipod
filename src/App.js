import React from 'react';
import Ipod from "./ipod";
import './app.css'
// main App component of our app
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      active:1, //to tell which menu option is currently selected and represented via blue color
      screen:0 //to tell which view is being displayed on screen
      /*
      screen=0 -> for menu view
      screen=1 -> for coverflow screen
      screen=2 -> for music screen
      screen=3 -> for games screen
      screen=4 -> for settings screen
      */ 
    };
  }
  //function to update the selected option from menu
  handleActive=(event)=>{
    var active=this.state.active;
    if(event.detail.distanceFromLast>11){
      active++;
      if(active===5){//bcoz active is from 1 to 4
          active=1;
      }
      console.log('before',this.state.active);
      this.setState({active:active},()=>console.log(this.state.active));
  }
  if(event.detail.distanceFromLast<-11){
      // console.log('hello');
      active--;
      if(active===0){
          active=4;
      }
      console.log('before',this.state.active);
      this.setState({active:active},()=>console.log(this.state.active));
  }
}
//function to update the screen when the user selects a particular option from menu and click on centre button to go inside that option
updateScreen=()=>{
  this.setState({screen:this.state.active},()=>{
      console.log('screen',this.state.screen,'active',this.state.active)
  })
}
//function to take the user back to menu screen when he clicks on menu button
backToMenu=()=>{
  this.setState({screen:0},()=>{
    console.log('screen',this.state.screen,'active',this.state.active)
})
}
  render(){
    const {active,screen}=this.state;
    return (
      <div className='App'>
        <Ipod active={active} handleActive={this.handleActive} screen={screen} updateScreen={this.updateScreen} backToMenu={this.backToMenu}/>
      </div>
    );
  }

}
export default App;
//Ipod pe chlra ipod pe noi as it is necessary for html vs react element distinguishing