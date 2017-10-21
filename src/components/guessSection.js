import React from 'react';

import GuessForm from './guessForm';

// import './gameSection.css';

export default function GuessSection(props) {
    return (
      <section>
        <h2 id='feedback'>{props.feedback}</h2>
        <GuessForm onGuess={props.onGuess}/>
      </section>
    );
}


//in every example we had, the stateful component was the parent. this is
//baffling me that the parent wouldn't be stateful. i have zero idea
//how the onGuess property translates into running the onGuess function
//on the GuessForm