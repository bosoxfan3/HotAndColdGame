import React from 'react';

// import './guessForm.css';

export default function GuessForm(props) {
  return (
    <form>
      <input type='text' name='userGuess' id='userGuess' maxlength='3' placeholder='Enter Your Guess' required />
      <input type='submit' id='guessButton' name='submit' value='Guess' />
    </form>
  )
}