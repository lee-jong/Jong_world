//매장관리 component
import React from 'react';
import '../../../static/styles/assets/css/developer/dataProcessing.css';
import Menu from '../../../components/shared/dataProcessing/menu';
import Router from 'next/router';

class storeManagement extends React.Component {
  static async getInitialProps({ query }) {
    return {};
  }

  state = {
    dateMenu: 'MM'
  };

  onChangeDateMenu = () => {
    const { dateMenu } = this.state;

    if (dateMenu === 'MM') {
      return (
        <nav className="dataProcessing-date-menu">
          <ul>
            <li>1月</li>
            <li>2月</li>
            <li>3月</li>
            <li>4月</li>
            <li>5月</li>
            <li>6月</li>
            <li>7月</li>
            <li>8月</li>
            <li>9月</li>
            <li>10月</li>
            <li>11月</li>
            <li>12月</li>
          </ul>
        </nav>
      );
    }

    if (dateMenu === 'YY') {
      return (
        <nav className="dataProcessing-date-menu">
          <ul>
            <li>2018年</li>
            <li>2019年</li>
          </ul>
        </nav>
      );
    }
  };

  onChangeMenu = e => {
    this.setState({
      dateMenu: e.target.value
    });
  };

  goToCreateStore = () => {
    let href = '/developmentNote/dataProcessing/createStore';
    Router.push(href);
  };

  render() {
    return (
      <>
        <h2>전산 프로그램</h2>
        <div className="dataProcessing-form">
          <div className="dataProcessing-header">
            <Menu />
          </div>
          <h5>매장관리</h5>
          <div className="dataProcessing-content">
            <select onChange={this.onChangeMenu}>
              <option value="MM">월 별</option>
              <option value="YY">년 별</option>
            </select>
            {this.onChangeDateMenu()}
            <table className="dataProcessing-list">
              <thead>
                <tr>
                  <th>No</th>
                  <th>사업장명</th>
                  <th>매출액</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>3</th>
                  <th>가리명</th>
                  <th>가리매출</th>
                </tr>
                <tr>
                  <th>2</th>
                  <th>가리명</th>
                  <th>가리매출</th>
                </tr>
                <tr>
                  <th>1</th>
                  <th>가리명</th>
                  <th>가리매출</th>
                </tr>
              </tbody>
            </table>
            <hr />
            <div className="dataProcessing-footer">
              <button
                className="dataProcessing-button"
                onClick={this.goToCreateStore}
              >
                등록
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default storeManagement;
