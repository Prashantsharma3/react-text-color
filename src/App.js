import React, { useState } from 'react';

function App() {
  const [style, setStyle] = useState({ color: 'red', fontSize: '30px', fontStyle: 'normal' });

  const handleClick = () => {
    if (style.color === 'red') {
      setStyle({ color: 'blue', fontSize: '30px', fontStyle: 'italic' });
    } else {
      setStyle({ color: 'red', fontSize: '30px', fontStyle: 'normal' });
    }
  };

  return (
    <div>
      <p style={style}>Newton School</p>
      <button id="button" onClick={handleClick}>
        Change Style
      </button>
      
    </div>
  );
}

export default App;
