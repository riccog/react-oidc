import { OidcProvider } from '@axa-fr/react-oidc';
import './App.css';
import RouteList from './Routes.jsx';
import { BrowserRouter as Router } from 'react-router-dom';


const configuration = {
  client_id: 'custos-u8fth4tahwfil3ue3vpm-10000000',
  redirect_uri: 'http://localhost:5173/callback',
  scope: 'openid profile email',
  authority: 'https://authz.playground.usecustos.org/realms/10000000',
  response_type: 'code',
  state: 'active'
};

function App() {

  return (
    <OidcProvider configuration={configuration}>
      <Router>
        <RouteList />
      </Router>
    </OidcProvider>
  );
}

export default App;
