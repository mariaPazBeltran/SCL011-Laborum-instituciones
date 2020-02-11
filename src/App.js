import React from 'react';
import './App.css';
import {useFirebaseApp} from 'reactfire';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';



function App() {
  const firebase=useFirebaseApp();
  console.log(firebase);
  return (
    <div className="App">
      <Login/>
      <Register/>
      <Footer/>
    </div>
  );
}

export default App;
