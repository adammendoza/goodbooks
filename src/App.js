import React from 'react';

// import HorizontalBar from './Repeat/HorizontalBar';
import VerticalBar from './Repeat/VerticalBar';

import {GlobalProvider} from './contexts/store';

import './App.css'

function App() {
  return (
    <GlobalProvider>
    <div className="App">
      {/* <HorizontalBar/> */}
        <VerticalBar/>
        
    </div>
    </GlobalProvider>
  );
}

export default App;
