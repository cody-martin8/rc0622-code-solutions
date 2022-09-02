import React from 'react';

export class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { color: 'btn-indigo', clicks: 0 };
  }

  handleClick() {
    let btnColor = 'btn-indigo';
    if (this.state.clicks > 1) {
      btnColor = 'btn-purple';
    }
    if (this.state.clicks > 4) {
      btnColor = 'btn-red';
    }
    if (this.state.clicks > 7) {
      btnColor = 'btn-orange';
    }
    if (this.state.clicks > 10) {
      btnColor = 'btn-yellow';
    }
    if (this.state.clicks > 13) {
      btnColor = 'btn-white';
    }
    this.setState({ color: btnColor, clicks: this.state.clicks + 1 });
  }

  render() {
    return (
      <button type="button" className={`btn ${this.state.color}`} onClick={this.handleClick}>Hot Button</button>
    );
  }
}
