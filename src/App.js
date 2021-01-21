import React from 'react';

// import Home from 'pages/home';
import DeclareWinner from 'pages/declareWinner';
import Navbar from 'components/navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="layout">
        <DeclareWinner />
      </div>
    </>
  );
}

export default App;
