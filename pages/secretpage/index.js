import React from 'react';
import ImgList from '../../components/listComponent/imgList';
import { getTest } from '../../actions/imgBoard';

class SecretPage extends React.Component {
  state = {
    onMenu: 'Memory'
  };

  handleMenu = e => {
    let checkedMenu = e.target.text;
    this.setState({
      onMenu: checkedMenu
    });
  };

  onSearchInput = e => {
    e.preventDefault();
    $('form').addClass('opened');
    $("input[type='search']").focus();
  };

  offSearchInput = e => {
    $('form').removeClass('opened');
  };

  render() {
    const { onMenu } = this.state;
    return (
      <>
        {/* <!-- Heading --> */}
        <div id="heading">
          <h1>Secret Page</h1>
        </div>
        {/* <!-- Main --> */}
        <section id="main" className="wrapper">
          <div className="inner">
            <header>
              <h2>Jong's Space - {onMenu}</h2>
            </header>
            <hr />
            <div className="row">
              <div className="col-md-3 col-sm-3 col-xs-6">
                <a
                  href="#"
                  onClick={this.handleMenu}
                  className="btn btn-sm animated-button victoria-one"
                >
                  Memory
                </a>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-6">
                <a
                  href="#"
                  onClick={this.handleMenu}
                  className="btn btn-sm animated-button victoria-two"
                >
                  Creation
                </a>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-6">
                <a
                  href="#"
                  onClick={this.handleMenu}
                  className="btn btn-sm animated-button victoria-three"
                >
                  Undetermined
                </a>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-6">
                <a
                  href="#"
                  onClick={this.handleMenu}
                  className="btn btn-sm animated-button victoria-four"
                >
                  Undetermined2
                </a>
              </div>
            </div>
          </div>
        </section>

        <form className="search-bar">
          <input
            type="search"
            placeholder="Search ex. 1908 (년/월)"
            onBlur={this.offSearchInput}
          />
          <button onClick={this.onSearchInput}>
            <span className="fontawesome-search"></span>
          </button>
        </form>

        {onMenu === 'Memory' ? <ImgList /> : ''}
        {onMenu === 'Creation' ? 'Creation' : ''}
        {onMenu === 'Undetermined' ? 'Undetermined' : ''}
        {onMenu === 'Undetermined2' ? 'Undetermined2' : ''}
      </>
    );
  }
}

export default SecretPage;
