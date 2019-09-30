import React from 'react';
import Router from 'next/router';

const onClickMenu = e => {
  let name = e.target.name;
  switch (name) {
    case 'salesManagement':
      Router.push('/developmentNote/dataProcessing');
      break;
    case 'storeManagement':
      Router.push('/developmentNote/dataProcessing/storeManagement');
      break;
    case 'salesByStore':
      Router.push('/developmentNote/dataProcessing/salesByStore');
      break;
    case 'grossSales':
      Router.push('/developmentNote/dataProcessing/grossSales');
      break;
  }
};

const Menu = ({}) => {
  return (
    <>
      <nav className="dataProcessing-menus">
        <ul>
          <li>
            <a onClick={e => onClickMenu(e)} name="salesManagement">
              매출관리
            </a>
          </li>
          <li>
            <a onClick={e => onClickMenu(e)} name="storeManagement">
              매장관리
            </a>
          </li>
          <li>
            <a onClick={e => onClickMenu(e)} name="salesByStore">
              품목관리
            </a>
          </li>
          <li>
            <a onClick={e => onClickMenu(e)} name="grossSales">
              총 매출
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
