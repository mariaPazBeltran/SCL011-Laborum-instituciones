import React from 'react';

import './App.css';
// import LoginScreen from './components/Login&register/ContenedorLogin'
import RegisterScreen  from './components/Login&register/ContenedorRegister';
import ProviderContext from './states/provider';
import {useFirebaseApp} from 'reactfire';
// import Footer from './components/Footer';

function App() {
  const firebase=useFirebaseApp();
  console.log(firebase);
  return (
    <ProviderContext>
    <div className="App">
      {/* <LoginScreen/> */}
     <RegisterScreen/>
      {/* <Footer/> */}
    </div>
    </ProviderContext>
  );
}

export default App;
