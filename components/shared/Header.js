import React from 'react';
import IronMan from '../ironMan';
import Link from 'next/link';

class Header extends React.Component {
  state = {
    count: 1,
    onSecret: false
  };

  onHandleMenu = () => {
    let $body = $('body');
    $body.addClass('is-menu-visible');
  };

  offHandleMenu = () => {
    let $body = $('body');
    $body.removeClass('is-menu-visible');
  };

  secretButton = () => {
    const { count } = this.state;
    this.setState({
      count: ++this.state.count,
      onSecret: false
    });

    if (count == 7) {
      this.setState({
        count: 1,
        onSecret: true
      });
    }
  };

  render() {
    const { onSecret } = this.state;
    return (
      <>
        <header id="header">
          <Link href="/">
            <a className="logo">Jong's Word</a>
          </Link>
          <nav>
            <a href="#menu" onClick={this.onHandleMenu}>
              Menu
            </a>
          </nav>

          <nav id="menu">
            <ul className="links">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/developer">
                  <a>Developer</a>
                </Link>
              </li>
              <li>
                <Link href="/ownspace">
                  <a>My Own Space</a>
                </Link>
              </li>
              <li>
                {onSecret ? (
                  <Link href="/secretpage">
                    <h6>Hello Secret Jong'Word</h6>
                  </Link>
                ) : (
                  ''
                )}
                <div className="iron_man_menu">
                  <IronMan secretButton={this.secretButton} />
                </div>
              </li>
            </ul>
            <a href="#menu" className="close" onClick={this.offHandleMenu}></a>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;
