import React from 'react';

import './App.css';
import Footer from './components/Footer'
//import Login from './components/Login'
import Register from './components/Register';
import ProviderContext from './states/provider';

function App() {
  return (
    <ProviderContext>
<div className="App">
      <Register/>
      <Footer/>
    </div>
    </ProviderContext>
  );
}

export default App;
