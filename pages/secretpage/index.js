import React from 'react';
import ImgList from '../../components/listComponent/imgList';

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
              <h2>Jong's Space</h2>
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

        <div className="search">
          <select className="optionBox">
            <option>전체</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>

          <input
            className="searchInput"
            placeholder="ex) 1909 (년/월)"
            type="text"
            style={{ width: 440 }}
          />
          <button> 검색</button>
        </div>

        {onMenu === 'Memory' ? <ImgList /> : ''}
        {onMenu === 'Creation' ? 'Creation' : ''}
        {onMenu === 'Undetermined' ? 'Undetermined' : ''}
        {onMenu === 'Undetermined2' ? 'Undetermined2' : ''}
      </>
    );
  }
}

export default SecretPage;
