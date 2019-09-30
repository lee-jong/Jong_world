//품목 component
import React from 'react';
import '../../../static/styles/assets/css/developer/dataProcessing.css';
import Menu from '../../../components/shared/dataProcessing/menu';

class salesByStore extends React.Component {
  render() {
    return (
      <>
        <h2>전산 프로그램</h2>
        <div className="dataProcessing-form">
          <div className="dataProcessing-header">
            <Menu />
          </div>
          <h5>품목관리</h5>
          <div className="dataProcessing-content">
            <table className="dataProcessing-list">
              <thead>
                <tr>
                  <th>No</th>
                  <th>품목</th>
                  <th>재고</th>
                  <th>원가</th>
                  <th>판매액</th>
                  <th>매출액</th>
                  <th>실매출</th>
                  <th>입하일</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>3</th>
                  <th>가리명</th>
                  <th>가리매출</th>
                  <th>가리명</th>
                  <th>가리매출</th>
                  <th>가리명</th>
                  <th>가리매출</th>
                  <th>입하일</th>
                </tr>
                <tr>
                  <th>2</th>
                  <th>가리명</th>
                  <th>가리매출</th>
                  <th>가리명</th>
                  <th>가리매출</th>
                  <th>가리명</th>
                  <th>가리매출</th>
                  <th>입하일</th>
                </tr>
                <tr>
                  <th>1</th>
                  <th>가리명</th>
                  <th>가리매출</th>
                  <th>가리명</th>
                  <th>가리매출</th>
                  <th>가리명</th>
                  <th>가리매출</th>
                  <th>입하일</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default salesByStore;
