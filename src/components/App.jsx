import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statictics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';


 class App extends Component {

    state = {
      good: 0,
      neutral: 0,
      bad: 0
  }

  onClickBtn = (option) => {
     this.setState((prev)=>({
     [option]: prev[option] =+1
}))

countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    const sum = good + bad + neutral;

    return sum;
  }

  countPositiveFeedbackPercentage= () => {
    const { good } = this.state;
    const part = Math.round((good * 100) / this.totalFeedback());

    return part;
  }
  };

render() {
  const { good, bad, neutral } = this.state;
  return (
    <div>
      <Section title="Please, leave feedback">
         <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onClickBtn} />
      </Section>
      {this.totalFeedback() ? (
          <Section title="Statistics">
            <Statictics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePart={this.countPositiveFeedbackPercentage()} />
          </Section>) : (
            <Notification message="There is no feedback" />
          )
        }
      </div>
   );
}
};


export default App
