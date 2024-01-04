import { Component } from 'react';
import css from '../Feedback/Feedback.module.css'

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
      <div className={css.buttonsContainer}>
          {options.map(option => (
              <button
                  type="button"
                  className={css.btn}
                  name={option}
                  key={option}
                  onClick={() => onLeaveFeedback(option)}>
                  {option}
              </button>
          ))
          }
      </div>
  );
};

//  export class Feedback extends Component {


//   render() {
//  return (

//   <div className = {css.feedback}>
//     <p className = {css.request}>Please leave feedback</p>
//     <div>
//       <button className = {css.btn }>Good</button>
//       <button className = {css.btn }>Neutral</button>
//       <button className = {css.btn }>Bad</button>
//     </div>
//     <p className = {css.statistic}>Statistic</p>
//     <span className = {css.result}>Good:</span>
//     <span className = {css.result}>Neutral:</span>
//     <span className = {css.result}>Bad:</span>

//   </div>
//  )
//   }

// }





export default Feedback
