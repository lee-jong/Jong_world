import React from 'react';
import IronMan from '../../components/ironMan/login';
import '../../static/styles/assets/css/login.css';

class Login extends React.Component {
  state = {
    loginMode: true
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
              <p className="login-title"> 로그인 </p>
              <div className="login-id">
                <p className="login-text"> ID </p>
                <input className="login-input" type="text" />
              </div>
              <div className="login-pw">
                <p className="login-text">패스워드 </p>
                <input className="login-input" type="password" />
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
