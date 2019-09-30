//매장관리 component
import React from 'react';
import '../../../static/styles/assets/css/developer/dataProcessing.css';
import Menu from '../../../components/shared/dataProcessing/menu';

class storeManagement extends React.Component {
  state = {
    dateMenu: 'MM'
  };

  onChangeDateMenu = () => {
    const { dateMenu } = this.state;

    if (dateMenu === 'MM') {
      return (
        <nav className="dataProcessing-date-menu">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
          </ul>
        </nav>
      );
    }

    if (dateMenu === 'YY') {
      return (
        <nav className="dataProcessing-date-menu">
          <ul>
            <li>2018</li>
            <li>2019</li>
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
          </div>
        </div>
      </>
    );
  }
}

export default storeManagement;
