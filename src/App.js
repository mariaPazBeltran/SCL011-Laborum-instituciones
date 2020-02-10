import React from 'react';
import './App.css';
import {useFirebaseApp} from 'reactfire';
import Footer from './components/Footer'
import Login from './components/Login'

function App() {
  const firebase=useFirebaseApp();
  console.log(firebase);
  return (
    <div className="App">
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;
