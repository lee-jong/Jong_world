import React from 'react';
import IronMan from '../../components/ironMan/login';
import '../../static/styles/assets/css/login.css';
import { loginTest } from '../../actions/login';
import Router from 'next/router';

class Login extends React.Component {
  state = {
    id: '',
    pw: '',
    loginMode: false
  };

  changeLoginForm = () => {
    this.setState({
      loginMode: true
    });
  };

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  enterKeyLogin = e => {
    if (e.keyCode !== 13) return;
    this.getTokenLogin();
  };

  //Token & Login API
  getTokenLogin = async () => {
    try {
      const { id, pw } = this.state;
      let data = {
        id,
        pw
      };
      let res = await loginTest(data);
      if (res.status === 200) {
        sessionStorage.setItem('token', res.token);
        Router.push('/');
      } else {
        alert('로그인 실패');
      }
    } catch (err) {}
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
                <input
                  name="id"
                  autoComplete="off"
                  onChange={this.onChangeInput}
                  className="login-input"
                  type="text"
                />
              </div>
              <div className="login-pw">
                <p className="login-text">PW</p>
                <input
                  name="pw"
                  onChange={this.onChangeInput}
                  className="login-input"
                  type="password"
                  onKeyDown={this.enterKeyLogin}
                />
              </div>
              <div className="login-button">
                <button onClick={this.getTokenLogin}>login</button>
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
