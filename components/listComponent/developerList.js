import React from 'react';
import { withRouter } from 'next/router';

const printList = (itemList, goToDetailPage) => {
  let list = itemList.map(item => (
    <div
      className="devaloper-item"
      key={item.seq}
      onClick={() => goToDetailPage(item.seq)}
    >
      <img
        className="devaloper-img"
        src={`http://localhost:4000/static2/${item.img}`}
      />
      <div className="devaloper-content">
        <h3 className="devaloper-title">{item.title}</h3>
        <p className="devaloper-subTitle">{item.sub_title}</p>
        <p className="devaloper-text">{item.content}</p>
      </div>
    </div>
  ));

  return list;
};

const devaloperList = ({ goToDetailPage, goToCreatePage, itemList }) => {
  return (
    <>
      <div className="inner">
        <div className="content">
          {/* 여기서부터 map ==> go  */}
          {itemList.length === 0 ? (
            <div className="devaloper-item">
              <h3> not contnet</h3>
            </div>
          ) : (
            printList(itemList, goToDetailPage)
          )}
          <hr />
          <div className="devaloper-footer">
            <button className="devaloper-button" onClick={goToCreatePage}>
              생성
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(devaloperList);
