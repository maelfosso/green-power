import React from 'react';
import '../App.scss';
import DataEntry from '../containers/DataEntry';
import Result from '../containers/Result';

function App() {
  return (
    <div>
      <header>
        <span className="logo-wrapper">
          <i className="logo" />
          <span>Green Power Cameroon</span>
        </span>
      </header>
      <div className="App">
        <DataEntry />
        <Result />
        {/* <Details /> */}
      </div>
    </div>
  );
}

export default App;
