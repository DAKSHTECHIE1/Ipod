import React from 'react';
import Ipod from "./ipod";
import './app.css'
class App extends React.Component{
  render(){
    return (
      <div className='App'>
        <div>hello</div>
        <Ipod/>
      </div>
    );
  }

}
export default App;
//Ipod pe chlra ipod pe noi as it is necessary for html vs react element distinguishing