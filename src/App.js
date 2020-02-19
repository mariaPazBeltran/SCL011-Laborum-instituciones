import React from 'react';
import './App.css';
import LoginScreen from './components/Login&register/ContenedorLogin'
import RegisterScreen  from './components/Login&register/ContenedorRegister';
import ProviderContext from './states/provider';
import {useFirebaseApp, useUser} from 'reactfire';
import {BrowserRouter as Router,
  Route, Redirect} from 'react-router-dom';
import Profile from './components/perfil/contInstitution';

function App() {
  const firebase=useFirebaseApp();
  const user = useUser();
  console.log(firebase);
  return (
    <ProviderContext>
      <div className="App">
      <Router>
    <Route exact path="/">
  {user ? <Redirect to="/profile" /> : <LoginScreen />}
</Route>
        
        <Route path="/register" component={ RegisterScreen } />
        <Route path="/profile" component={ Profile } />
    </Router>
    </div>

    </ProviderContext>
  );
}

export default App;