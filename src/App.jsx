import { OidcProvider } from '@axa-fr/react-oidc';
import './App.css';
import RouteList from './Routes.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

async function fetchData() {
  try{
    const response = await fetch("https://api.playground.usecustos.org/api/v1/identity-management/tenant/10000000/.well-known/openid-configuration")
    const data = await response.json();
    console.log(data)
    return data;
  } catch(error) {
    console.error(error);
  }
}

const custosInfo = await fetchData();
console.log(custosInfo.token_endpoint);


const configuration = {
  client_id: 'custos-u8fth4tahwfil3ue3vpm-10000000',
  redirect_uri: 'http://localhost:5173/callback',
  scope: 'openid profile email',
  authority: 'https://api.playground.usecustos.org/api/v1/identity-management/tenant/10000000/.well-known/openid-configuration',
  authority_configuration: {
    authorization_endpoint: custosInfo.authorization_endpoint,
    token_endpoint: custosInfo.token_endpoint,
    userinfo_endpoint: custosInfo.userinfo_endpoint,
    issuer: 'https://authz.playground.usecustos.org/realms/10000000',
  },
  response_type: 'code',
  state: 'active',
  loadUserInfo: true,
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
