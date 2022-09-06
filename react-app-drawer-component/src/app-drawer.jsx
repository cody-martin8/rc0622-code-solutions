import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shade: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ shade: !this.state.shade });
  }

  render() {
    let drawerWrapper;
    let iconWrapper;
    this.state.shade
      ? drawerWrapper = 'drawer-wrapper'
      : drawerWrapper = 'drawer-wrapper hidden';

    this.state.shade
      ? iconWrapper = 'icon-wrapper hidden'
      : iconWrapper = 'icon-wrapper';

    return (
      <div className="app-wrapper">
        <div className={iconWrapper}>
          <i className="fa-solid fa-bars fa-2xl" onClick={this.handleClick}></i>
        </div>
        <div className={drawerWrapper}>
          <div className="drawer">
            <h1>Menu</h1>
            <a href=""><h3 onClick={this.handleClick}>About</h3></a>
            <a href=""><h3 onClick={this.handleClick}>Get Started</h3></a>
            <a href=""><h3 onClick={this.handleClick}>Sign In</h3></a>
          </div>
          <div className="shade" onClick={this.handleClick}>
          </div>
        </div>
      </div>
    );
  }
}
