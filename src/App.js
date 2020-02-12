import React from 'react';
import './App.css';
import Login from './components/Login'
//import Register from './components/Register';
import ProviderContext from './states/provider';
import {useFirebaseApp} from 'reactfire';
import Footer from './components/Footer';
import Header from './components/Header';
//import Sidebar from './components/Sidebar';

function App() {
  const firebase=useFirebaseApp();
  console.log(firebase);
  return (
    <ProviderContext>
<div className="App">
  <Header/>
      <Login/>
      <Footer/>
    </div>
    </ProviderContext>
  );
}

export default App;
