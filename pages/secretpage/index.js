import React from 'react';
import ImgList from '../../components/listComponent/imgList';
import Router from 'next/router';
import { getImgList, deleteImgItem } from '../../actions/imgBoard';

class SecretPage extends React.Component {
  static async getInitialProps({ query }) {
    let imgList = {};
    try {
      imgList = await getImgList();
    } catch (err) {
      console.log('err?');
      imgList = { result: [] };
    }
    return {
      imgList
    };
  }
  state = {
    onMenu: 'Memory',
    imgList: !this.props.imgList.result ? [] : this.props.imgList.result
  };

  // 메뉴 이동
  handleMenu = e => {
    let checkedMenu = e.target.text;
    this.setState({
      onMenu: checkedMenu
    });
  };

  // 검색 on , off
  onSearchInput = e => {
    e.preventDefault();
    $('form').addClass('opened');
    $("input[type='search']").focus();
  };

  offSearchInput = e => {
    $('form').removeClass('opened');
  };

  // 페이지 이동
  goToInsertPage = e => {
    const href = `/secretpage/insert`;
    Router.push(href);
  };

  // API 사용
  deletedImage = async seq => {
    console.log('check ', seq);
    try {
      let res = await deleteImgItem(seq);
      console.log('check delete res', res);
    } catch (err) {
      console.log('delete img err');
    }
  };

  //여기서부터 진행 TODO
  updatedList = async () => {
    try {
      let res = await getImgList();
      console.log('check', res);
    } catch (err) {
      console.log('upload  list err');
    }
  };

  render() {
    console.log('rendering');
    const { onMenu, imgList } = this.state;
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

        {onMenu === 'Memory' ? (
          <ImgList imgList={imgList} deletedImage={this.deletedImage} />
        ) : (
          ''
        )}
        {onMenu === 'Creation' ? 'Creation' : ''}
        {onMenu === 'Undetermined' ? 'Undetermined' : ''}
        {onMenu === 'Undetermined2' ? 'Undetermined2' : ''}

        <div className="insetButton">
          <button onClick={this.goToInsertPage}> 등록 </button>
        </div>
      </>
    );
  }
}

export default SecretPage;
