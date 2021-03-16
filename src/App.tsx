import React from 'react';
import './App.css';
import GetUser from './Components/GetUser'
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GetUser/>
        <Home/>
      </header>
    </div>
  );
}

export default App;
