import React from 'react';
import './App.css';
// import LoginScreen from './components/Login&register/ContenedorLogin'
// import RegisterScreen  from './components/Login&register/ContenedorRegister';
import ProviderContext from './states/provider';
import {useFirebaseApp} from 'reactfire';
import Profile from './components/perfil/contInstitution';
//import Footer from './components/Footer';
//import Header from './components/Header';
//import Sidebar from './components/Sidebar';


function App() {
  const firebase=useFirebaseApp();
  console.log(firebase);
  return (
    <ProviderContext>
    <div className="App">
      {/* <LoginScreen/> */}
     {/* <RegisterScreen/> */}
      {/* <Footer/> */}
      <Profile/>
    </div>
    </ProviderContext>
  );
}

export default App;