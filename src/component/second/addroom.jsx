import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

function RoomComponent() {
  const [roomCount, setRoomCount] = useState(0);

  const handleIncrement = () => {
    setRoomCount(roomCount + 1);
  };

  const handleDecrement = () => {
    if (roomCount > 0) {
      setRoomCount(roomCount - 1);
    }
  };

  const circleButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    border: '1px solid #ccc',
    margin: '0 5px',
    cursor: 'pointer',
  };

  return (
    <div>
      <p className='addroom'>
        Add Rooms:
        <span>
          <div onClick={handleDecrement} style={circleButtonStyle}>
            <FaMinus />
          </div>
          {roomCount}
          <div onClick={handleIncrement} style={circleButtonStyle}>
            <FaPlus />
          </div>
        </span>
      </p>
      {/* Other content of your component */}
    </div>
  );
}

export default RoomComponent;
