import React from 'react';

class Header extends React.Component {
  state = {
    onMenu: false
  };

  onHandleMenu = () => {
    let $body = $('body');
    $body.addClass('is-menu-visible');
  };

  render() {
    return (
      <>
        <header id="header">
          <a className="logo">Jong's Word</a>
          <nav>
            <a href="#menu" onClick={this.onHandleMenu}>
              Menu
            </a>
          </nav>

          <nav id="menu">
            <ul className="links">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="elements.html">Elements</a>
              </li>
              <li>
                <a href="generic.html">Generic</a>
              </li>
            </ul>

            <a href="#menu" className="close"></a>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;
