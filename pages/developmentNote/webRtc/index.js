import React from 'react';
import Router from 'next/router';

class WebRtc extends React.Component {
  roomConnect = () => {
    Router.push('/developmentNote/webRtc/room');
  };

  render() {
    return (
      <>
        <button onClick={this.roomConnect}>방 입장</button>
      </>
    );
  }
}

export default WebRtc;
