import React from 'react';
import '../App.scss';
import DataEntry from './DataEntry';
import Result from './Result';
import Details from './Details';

function App() {
  return (
    <div>
      <header>
        <span className="logo-wrapper">
          <i className="logo" />
          <span>Green Power</span>
        </span>
        <div className="button">
        </div>
      </header>
      
      <div className="App">
        <DataEntry />
        <Result />
        <Details />
      </div>
    </div>
  );
}

export default App;
