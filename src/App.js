import React from 'react';
import './App.css';
import LoginScreen from './components/Login&register/ContenedorLogin'
//import Register from './components/Register';
import ProviderContext from './states/provider';
import {useFirebaseApp} from 'reactfire';
//import Footer from './components/Footer';
//import Header from './components/Header';
//import Sidebar from './components/Sidebar';


function App() {
  const firebase=useFirebaseApp();
  console.log(firebase);
  return (
    <ProviderContext>
    <div className="App">
    
      <LoginScreen/>
      
    
    </div>
    </ProviderContext>
  );
}

export default App;
