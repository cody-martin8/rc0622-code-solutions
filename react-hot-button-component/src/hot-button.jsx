import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { clicks: 0 };
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    let btnColor = 'btn-indigo';
    if (this.state.clicks > 2) {
      btnColor = 'btn-purple';
    }
    if (this.state.clicks > 5) {
      btnColor = 'btn-red';
    }
    if (this.state.clicks > 8) {
      btnColor = 'btn-orange';
    }
    if (this.state.clicks > 11) {
      btnColor = 'btn-yellow';
    }
    if (this.state.clicks > 14) {
      btnColor = 'btn-white';
    }

    return (
      <button type="button" className={`btn ${btnColor}`} onClick={this.handleClick}>Hot Button</button>
    );
  }
}
