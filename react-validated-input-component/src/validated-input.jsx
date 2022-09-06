import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    let error = '';
    let icon = 'fa-xmark';
    if (this.state.password.length < 8) {
      error = 'Your password is too short.';
    }
    if (this.state.password.length === 0) {
      error = 'A password is required.';
    }
    error === '' ? icon = 'fa-check' : icon = 'fa-xmark';

    return (
      <div>
        <label>
          Password
          <div className="row">
            <input type='password' value={this.state.password} onChange={this.handlePasswordChange} />
            <i className={`fa-solid ${icon} fa-lg margin-left`}></i>
          </div>
        </label>
        <div className="error-message">
          <p>{error}</p>
        </div>
      </div>
    );
  }
}
