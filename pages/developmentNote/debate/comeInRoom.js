import React from 'react';

const ComeInRoom = ({ comeInUser }) => {
  return (
    <>
      <div>
        userId : <input type="text" />
        <button onClick={comeInUser}>입장</button>
      </div>
    </>
  );
};

export default ComeInRoom;
