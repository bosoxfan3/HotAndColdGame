import React from 'react';
import Header from './header';
import GuessSection from './guessSection';
import GuessCount from './guessCount';
import GuessList from './guessList';

// import './hotColdFeedback.css';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pastGuesses: [],
      feedback: 'Make a guess',
      correctAnswer: Math.floor(Math.random()*100) + 1
    }
  }
  newGame() {
    this.setState({
      pastGuesses: [],
      feedback: 'Make a guess',
      correctAnswer: Math.floor(Math.random()*100) + 1
    });
  }
  handleGuess(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({
        feedback: 'Please enter a whole number between 1 and 100'
      });
      return;
    }
    const howFarAway = Math.abs(guess - this.state.correctAnswer);
    let feedback = '';
    if (howFarAway >= 11) {
      feedback = 'Cold';
    } else if (howFarAway <= 10 && howFarAway >=6) {
      feedback = 'Warm';
    } else if (howFarAway <= 5 && howFarAway >=1) {
      feedback = 'Hot';
    } else {
      feedback = 'You Got It!';
    }
    this.setState({
      feedback,
      pastGuesses: [...this.state.pastGuesses, guess]
    })
  }
  render() {
    return (
      <div>
        <Header onNewGame={() => this.newGame()} />
        <GuessSection feedback={this.state.feedback}
          onGuess={(guess) => this.handleGuess(guess)} />
        <GuessCount count={this.state.pastGuesses.length} />
        <GuessList guesses={this.state.pastGuesses} />
      </div>
    )
  }
}