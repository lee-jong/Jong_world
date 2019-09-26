import React from 'react';
import ImgList from '../../components/listComponent/imgList';
import Router from 'next/router';
import { getImgList, deleteImgItem } from '../../actions/imgBoard';

class SecretPage extends React.Component {
  static async getInitialProps({ query }) {
    let imgList = {};
    try {
      let data = {
        active: 1
      };
      imgList = await getImgList(data);
    } catch (err) {
      imgList = { result: [], total: 0 };
    }
    return {
      imgList
    };
  }
  state = {
    onMenu: 'Memory',
    imgList: !this.props.imgList.result ? [] : this.props.imgList.result,
    total: !this.props.imgList.total ? [] : this.props.imgList.total,
    active: 1,
    search: '',
    type: 'title'
  };

  // **메뉴 이동
  handleMenu = e => {
    let checkedMenu = e.target.text;
    this.setState({
      onMenu: checkedMenu
    });
  };

  // **검색 on , off
  onSearchInput = e => {
    e.preventDefault();
    $('form').addClass('opened');
    $("input[type='search']").focus();
  };

  offSearchInput = e => {
    $('form').removeClass('opened');
  };

  onChangePlaceholder = () => {
    const { type } = this.state;

    let placeholder = '';
    switch (type) {
      case 'title':
        placeholder = '제목 검색';
        break;

      case 'sub_title':
        placeholder = '부제목 검색';
        break;

      case 'content':
        placeholder = '내용 검색';
        break;
    }

    return placeholder;
  };

  // **페이지 이동
  goToInsertPage = e => {
    const href = `/secretpage/insert`;
    Router.push(href);
  };

  // **API 사용
  deletedImage = async (seq, img) => {
    try {
      if (confirm('Are you sure you want to delete it?')) {
        let res = await deleteImgItem(seq, img);
        if (res.status === 200) {
          this.updatedList();
        }
      } else {
        return false;
      }
    } catch (err) {}
  };

  updatedList = async () => {
    const { active, search, type } = this.state;
    try {
      let data = {
        active,
        search,
        type
      };
      let res = await getImgList(data);
      this.setState({
        imgList: res.result,
        total: res.total
      });
    } catch (err) {}
  };

  // **page 이동
  handleChangePage = no => {
    this.setState(
      {
        active: no
      },
      () => this.updatedList()
    );
  };

  //검색 값 변경
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onEnterSearch = e => {
    if (e.keyCode !== 13) return;
    this.updatedList();
  };

  render() {
    const { onMenu, imgList, total, active, type } = this.state;
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
          <select
            style={{
              width: 220,
              borderColor: '#d24d57'
            }}
            name="type"
            defaultValue={type}
            onChange={this.handleChange}
          >
            <option value="title">제목</option>
            <option value="sub_title">부제</option>
            <option value="content">내용</option>
          </select>
          <input
            type="search"
            placeholder={this.onChangePlaceholder()}
            onBlur={this.offSearchInput}
            onChange={this.handleChange}
            name="search"
            onKeyDown={this.onEnterSearch}
          />
          <button onClick={this.onSearchInput}>
            <span className="fontawesome-search"></span>
          </button>
        </form>

        {onMenu === 'Memory' ? (
          <ImgList
            imgList={imgList}
            deletedImage={this.deletedImage}
            handleChangePage={this.handleChangePage}
            total={total}
            activeProps={active}
          />
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
