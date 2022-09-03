import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleIconClick = this.handleIconClick.bind(this);
    this.handleWatchClick = this.handleWatchClick.bind(this);
    this.timer = this.timer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.state = { isTicking: false, counter: 0, intervalId: 0 };
  }

  handleIconClick() {
    this.state.isTicking ? this.stopTimer() : this.startTimer();
    this.setState({ isTicking: !this.state.isTicking });
  }

  handleWatchClick() {
    if (!this.state.isTicking) {
      this.setState({ counter: 0 });
    }
  }

  timer() {
    let count = this.state.counter;
    count += 1;
    this.setState({ counter: count });
  }

  startTimer() {
    const newIntervalId = setInterval(this.timer, 1000);
    this.setState({ intervalId: newIntervalId });
  }

  stopTimer() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const isTicking = this.state.isTicking;
    const counter = this.state.counter;
    let watchState;
    isTicking ? watchState = 'fa-pause' : watchState = 'fa-play';

    return (
      <div className='stopwatch'>
        <div className='circle' onClick={this.handleWatchClick}>
          <span className='timer'>{counter}</span>
        </div>
        <div className='row'>
          <i className={`fa-solid ${watchState} fa-lg`} onClick={this.handleIconClick}></i>
        </div>
      </div>
    );
  }
}
