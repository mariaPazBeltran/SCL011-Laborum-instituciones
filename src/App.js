import React from 'react';
import './App.css';
import Login from './components/Login'
//import Register from './components/Register';
import ProviderContext from './states/provider';
import {useFirebaseApp} from 'reactfire';
import Footer from './components/Footer';

function App() {
  const firebase=useFirebaseApp();
  console.log(firebase);
  return (
    <ProviderContext>
<div className="App">
      <Login/>
      <Footer/>
    </div>
    </ProviderContext>
  );
}

export default App;
