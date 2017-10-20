import React from 'react';
import What from './what';
import NewGame from './newGame';
// import './navbar.css';

export default function Header(props) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <What />
          </li>
          <li>
            <NewGame />
          </li>
        </ul>
      </nav>
      <div>
        <h1>Hot or Cold</h1>
      </div>
    </header>
  )
}