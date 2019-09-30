import React from 'react';

const info = ({ onPopup, blockPopup }) => {
  return (
    <div
      id="myModal"
      className="modal"
      style={{ display: onPopup ? 'block' : 'none' }}
    >
      <div id="modal-content" className="modal-content">
        <span className="closeBtn" onClick={blockPopup}>
          ×
        </span>
        <img className="infoImg" src="/static/styles/images/infoImg.jpg" />
        <br />
        <h4 className="info-title">Name : IRON-MAN</h4>
        <span className="info-content" style={{ fontSize: 25 }}>
          Special ability : laser shooting with one hand
        </span>
        <span className="info-content" style={{ fontSize: 25 }}>
          Career : I almost beat Hulk,
          <br />
          &emsp;&emsp;&emsp;&nbsp; arms sales business
        </span>
      </div>
    </div>
  );
};

export default info;
