import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    let btnState;
    let sldrState;
    this.state.isClicked ? btnState = 'btn-on' : btnState = 'btn-off';
    this.state.isClicked ? sldrState = 'sldr-on' : sldrState = 'sldr-off';
    return (
      <div>
        <button type="button" className={`btn ${btnState}`} onClick={this.handleClick}>
          <span className={`slider ${sldrState}`}></span>
        </button>
      </div>
    );
  }
}
