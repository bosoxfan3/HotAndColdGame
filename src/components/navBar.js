import React from 'react';

// import './navBar.css';

export default class NavBar extends React.Component {
  onNewGame(event) {
    event.preventDefault();
    if (this.props.onNewGame) {
      this.props.onNewGame();
    }
  }
  onInfo(event) {
    event.preventDefault();
    if (this.props.onInfo) {
      this.props.onInfo();
    }
  }
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href='#' onClick={e => this.onInfo(e)}>
              What?
            </a>
          </li>
          <li>
            <a href='#' onClick={e => this.onNewGame(e)}>
              New Game 
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}