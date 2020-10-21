import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pages from "./pages";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <p>Some simple header page</p>
      </header>
        <Pages />
      <footer className="App-footer">
        <p>
          This is just a simple footer to show on the bottom part of the page.
        </p>
      </footer>
    </div>
  );
}

export default App;
