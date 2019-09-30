import React from 'react';
import '../../../static/styles/assets/css/developer/dataProcessing.css';
import Menu from '../../../components/shared/dataProcessing/menu';

class dataProcessing extends React.Component {
  render() {
    return (
      <>
        <h2>전산 프로그램</h2>
        <div className="dataProcessing-form">
          <div className="dataProcessing-header">
            <Menu />
          </div>
          <h5>매출관리</h5>
          <div className="dataProcessing-content">
            <table className="dataProcessing-list">
              <thead>
                <tr>
                  <th>No</th>
                  <th>사업자</th>
                  <th>사업장명</th>
                  <th>품목</th>
                  <th>갯수</th>
                  <th>매출액</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>3</th>
                  <th>가리</th>
                  <th>가리명</th>
                  <th>가리품목</th>
                  <th>가리개</th>
                  <th>가리매출</th>
                </tr>
                <tr>
                  <th>2</th>
                  <th>가리</th>
                  <th>가리명</th>
                  <th>가리품목</th>
                  <th>가리개</th>
                  <th>가리매출</th>
                </tr>
                <tr>
                  <th>1</th>
                  <th>가리</th>
                  <th>가리명</th>
                  <th>가리품목</th>
                  <th>가리개</th>
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

export default dataProcessing;
