// 총매출 component
import React from 'react';
import '../../../static/styles/assets/css/developer/dataProcessing.css';
import Menu from '../../../components/shared/dataProcessing/menu';

class GrossSales extends React.Component {
  render() {
    return (
      <>
        <h2>전산 프로그램</h2>
        <div className="dataProcessing-form">
          <div className="dataProcessing-header">
            <Menu />
          </div>
          <h5>총매출</h5>
          <div>총 매출 page</div>
        </div>
      </>
    );
  }
}

export default GrossSales;
