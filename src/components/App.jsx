import React, { Component } from 'react';
import { Feedback } from './Feedback/Feedback';




class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
render() {
  const { good, bad, neutral } = this.state;
}
  return (
   <div className= {css.container}> 
   <Feedback/>
   </div>
  );
};


export default App
