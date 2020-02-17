import React from 'react';
import './App.css';
<<<<<<< HEAD
// import LoginScreen from './components/Login&register/ContenedorLogin'
//import Register from './components/Register';
import ProviderContext from './states/provider';
import {useFirebaseApp} from 'reactfire';

 import ProfileInstitution from '../src/views/ProfileInstitution'
=======
import {useFirebaseApp} from 'reactfire';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';

>>>>>>> becbae9224730426a8fe2f51b585b3696d73ca91


function App() {
  const firebase=useFirebaseApp();
  console.log(firebase);
  return (
    <ProviderContext>
    <div className="App">
<<<<<<< HEAD
     
      {/* <LoginScreen/> */}
    <ProfileInstitution/>
    
=======
      <Login/>
      <Register/>
      <Footer/>
>>>>>>> becbae9224730426a8fe2f51b585b3696d73ca91
    </div>
    </ProviderContext>
  );
}

export default App;
