import React from 'react';
import './App.css';
import LoginScreen from './components/Login&register/ContenedorLogin'
import RegisterScreen  from './components/Login&register/ContenedorRegister';
import ProviderContext from './states/provider';
import { useUser} from 'reactfire';
import {BrowserRouter as Router,
  Route, Redirect} from 'react-router-dom';
import Information from './components/perfil/infoInstitution';
import InstitutionProfile from './components/perfil/InstitutionProfile'
function App() {
  
  const user = useUser();

  return (
    <ProviderContext>
      <div className="App">
      <Router>
    <Route exact path="/">
  {user ? <Redirect to="/InformacionInstitucion" /> : <LoginScreen />}
</Route>
        
        <Route path="/register" component={ RegisterScreen } />
        <Route path="/InformacionContacto" component={ Information } />
        <Route path="/InformacionInstitucion" component={ InstitutionProfile } />
    </Router>
    </div>

    </ProviderContext>
  );
}

export default App;