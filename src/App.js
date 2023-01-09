import React from 'react';
import Ipod from "./ipod";
import './app.css'
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      active:1,
      screen:0
    };
  }
  handleActive=(event)=>{
    var active=this.state.active;
    if(event.detail.distanceFromLast>11){
      active++;
      if(active===5){
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
updateRender=()=>{
  this.setState({active:this.state.active},()=>console.log('update render'));
}
updateScreen=()=>{
  this.setState({screen:this.state.active},()=>{
      console.log('screen',this.state.screen,'active',this.state.active)
  })
}
backToMenu=()=>{
  this.setState({screen:0},()=>{
    console.log('screen',this.state.screen,'active',this.state.active)
})
}

  render(){
    const {active,screen}=this.state;
    return (
      <div className='App'>
        <Ipod active={active} handleActive={this.handleActive} updateRender={this.updateRender} screen={screen} updateScreen={this.updateScreen} backToMenu={this.backToMenu}/>
      </div>
    );
  }

}
export default App;
//Ipod pe chlra ipod pe noi as it is necessary for html vs react element distinguishing