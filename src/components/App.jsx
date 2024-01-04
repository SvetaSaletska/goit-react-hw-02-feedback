import React, { Component } from 'react';
import Feedback from './Feedback/Feedback';
// import css from './App.module.css'

 class App extends Component {

    state = {
      good: 0,
      neutral: 0,
      bad: 0
  }

  onClickOpiniaBtn = (option) => {
     this.setState((prev)=>({
     [option]: prev[option] =+1
}))

console.log(this.state)
  };

render() {

  return (
    <div>
      <Feedback />
    </div>
   );
}
};


export default App
