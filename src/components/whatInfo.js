import React from 'react';

// import './whatInfo.css';

export default class WhatInfo extends React.Component {
  onClose(event) {
    event.preventDefault();
    if (this.props.onClose) {
      this.props.onClose();
    }
  }
  render() {
    return (
      <div id='modal'>
        <h3>What do I do?</h3>
        <div>
            <p>This is a Hot or Cold number guessing game. Here are the rules:</p>
            <ul>
              <li>1. The computer picks a number between 1 and 100</li>
              <li>2. You can guess until you find the secret number</li>
              <li>3. You will get feedback on how close(warm), closer(hot), or far(cold) you are</li>
            </ul>
            <p>So, Are you ready?</p>
            <a className="close" href="#" onClick={e => this.onClose(e)}>Got It!</a>
        </div>
      </div>
    );
  }
}