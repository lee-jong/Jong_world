import React from 'react';
import IronMan from '../../components/ironMan/login';
import '../../static/styles/assets/css/login.css';

class Login extends React.Component {
  state = {
    loginMode: false
  };

  changeLoginForm = () => {
    this.setState({
      loginMode: true
    });
  };

  render() {
    const { loginMode } = this.state;
    return (
      <>
        {loginMode ? (
          <div className="login">
            <div className="login-form">
              <p className="login-title"> Do you want login? </p>
              <div className="login-id">
                <p className="login-text"> ID </p>
                <input className="login-input" type="text" />
              </div>
              <div className="login-pw">
                <p className="login-text">PW</p>
                <input className="login-input" type="password" />
              </div>
              <div className="login-button">
                <button>login</button>
              </div>
            </div>
          </div>
        ) : (
          <IronMan changeLoginForm={this.changeLoginForm} />
        )}
      </>
    );
  }
}

export default Login;
