import React, { useState } from 'react';

function ColorBox(props) {
  const [colorBox, setColorBox] = useState('white');
  const [count, setCount] = useState(5);

  const boxStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: colorBox,
    border: '1px solid black',
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px'
  };

  const buttonStyle = {
    padding: '8px 16px',
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '4px'
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert('Counter is already at 0!');
    }
  };

  return (
    <div style={boxStyle}>
      <div>Current color: {colorBox}</div>
      <div>Count: {count}</div>
      <button style={buttonStyle} onClick={() => setColorBox('white')}>change to white</button>
      <button style={buttonStyle} onClick={() => setColorBox('black')}>change to black</button>
      <button style={buttonStyle} onClick={handleDecrease}>Decrease Count</button>
    </div>
  );
}

export default ColorBox;