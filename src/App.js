import React from 'react';
import './App.css';
import LoginScreen from './components/Login&register/ContenedorLogin'
import RegisterScreen  from './components/Login&register/ContenedorRegister';
import ProviderContext from './states/provider';
import {useFirebaseApp, useUser} from 'reactfire';
import {BrowserRouter as Router,
  Route, Redirect} from 'react-router-dom';
import ProfileInstitution from './views/ProfileInstitution';

function App() {
  const firebase=useFirebaseApp();
  const user = useUser();
  console.log(firebase);
  return (
    <ProviderContext>
    <Router>
    <Route exact path="/">
  {user ? <Redirect to="/profile" /> : <LoginScreen />}
</Route>
        
        <Route path="/register" component={ RegisterScreen } />
        <Route path="/profile" component={ ProfileInstitution } />
    </Router>

    </ProviderContext>
  );
}

export default App;