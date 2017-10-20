import React from 'react';
import HotColdFeedback from './hotColdFeedback';
import GuessForm from './guessForm';
import GuessCount from './guessCount';
import GuessList from './guessList';

// import './gameSection.css';

export default function GameSection(props) {
  return (
    <section>
      <HotColdFeedback />
      <GuessForm />
      <GuessCount />
      <GuessList />
    </section>
  );
}