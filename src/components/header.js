import React from 'react';
import NavBar from './navBar';
import WhatInfo from './whatInfo';
// import './header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWhatInfo: true
    }
  }
  toggleWhatInfo() {
    this.setState({
      showWhatInfo: !this.state.showWhatInfo
    });
  }
  render() {
    let whatInfo;
    if (this.state.whatInfo) {
      whatInfo = <WhatInfo onClose={() => this.toggleWhatInfo()} />;
    }
    return (
      <header>
        <NavBar onInfo={() => this.toggleWhatInfo()}
          onNewGame={this.props.onNewGame} />
        {whatInfo}
        <h1>Hot or Cold</h1>
      </header>
    );
  }
}