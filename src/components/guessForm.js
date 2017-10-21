import React from 'react';

// import './guessForm.css';

export default class GuessForm extends React.Component {
  //don't mind the fact that we had exclusively learned that class meant that
  //it had a state and was only to be used when it had a state
  onGuess(event) {
    event.preventDefault();
    if (this.props.onGuess) {
      this.props.onGuess(this.input.value);
    }
    this.input.value = '';
  }
  render() {
    return (
      <form onSubmit={e => this.onGuess(e)}>
        <label htmlFor="userGuess">Enter your Guess</label>
        <input type="text" name="userGuess" id="userGuess"
          className="text" maxLength="3" autoComplete="off"
          placeholder={Math.round(Math.random() * 100)} required
          ref={input => this.input = input} />
        <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
      </form> 
    )
  }
}