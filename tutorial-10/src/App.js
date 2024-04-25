import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

import ColorSquare from './ColorSquare';
import ColorInput from './ColorInput';

function App() {
  const [colorValue, setColorValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <ColorSquare
        colorValue={colorValue}
        isDarkText={isDarkText}
      />

      <ColorInput
        colorValue={colorValue}
        setColorValue={setColorValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
