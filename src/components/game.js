import React from 'react';
import GameSection from './gameSection';
import NavBar from './navBar';

// import './hotColdFeedback.css';

export default function Game(props) {
  return (
    <div>
      <NavBar />
      <GameSection />
    </div>
  )
}