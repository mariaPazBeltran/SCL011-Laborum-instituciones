import React from 'react';
import './App.css';
import {useFirebaseApp} from 'reactfire';
import Footer from './components/Footer';
import Login from './components/Login';
//import Register from './components/Register';
import ProviderContext from './states/provider';



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
