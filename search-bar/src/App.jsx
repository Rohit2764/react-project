import React from 'react';
import Header from './Header';

function App() {
  return (
    <div style={{ backgroundColor: '#181818', minHeight: '100vh', color: '#fff' }}>
      <Header />
      <div style={{ paddingTop: '80px', textAlign: 'center' }}>
        <h2>Welcome to the YouTube Clone UI!</h2>
      </div>
    </div>
  );
}

export default App;
