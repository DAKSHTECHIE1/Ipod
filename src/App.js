import React from 'react';
import Ipod from "./ipod";
import './app.css'
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      active:1
    };
  }
  handleActive=(event)=>{
    var active=this.state.active;
    if(event.detail.distanceFromLast>3){
      active++;
      if(active===5){
          active=1;
      }
      console.log('before',this.state.active);
      this.setState({active:active},()=>console.log(this.state.active));
  }
  if(event.detail.distanceFromLast<-3){
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


  render(){
    const {active}=this.state;
    return (
      <div className='App'>
        <div>hello</div>
        <Ipod active={active} handleActive={this.handleActive} updateRender={this.updateRender}/>
      </div>
    );
  }

}
export default App;
//Ipod pe chlra ipod pe noi as it is necessary for html vs react element distinguishing