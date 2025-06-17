import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

Counter.propTypes = {

};

function Counter(props) {
  const buttonStyle = {
    padding: '8px 16px',
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '4px'
  }

  const [counter, setCounter] = useState(0);

  const handleZero = () => {
    if (counter > 0) {
      setCounter(counter + 1)
    } else {
      alert('Counter is already  at 0')
    }
  }
  return (
    <div>
      {counter}

      <div className="change-counter">
        <button style={buttonStyle} onClick={() => {
          setCounter(x => x + 1)
        }}>Increase</button>
        <button style={buttonStyle} onClick={() => {
          counter === 0 ? alert('counter is already at 0') : setCounter(0)
        }}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;