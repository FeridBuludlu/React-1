import React, { useState } from 'react';

import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);


  const switchBackgroundColor = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <button onClick={switchBackgroundColor}>Change Background</button>
      <h1>Welcome to React JS</h1>
    </div>
  );
}

export default App;