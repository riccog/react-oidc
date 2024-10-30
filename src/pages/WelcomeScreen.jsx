import React from 'react'
import { OidcSecure } from '@axa-fr/react-oidc';
import { useOidcUser } from '@axa-fr/react-oidc';

const WelcomeScreen = () => {
  const {oidcUser, oidcUserLoadingState} = useOidcUser();
    return (
      <OidcSecure>
        <h1>Welcome{oidcUser ? `, ${oidcUser.given_name}` : ''}</h1>
        {oidcUser && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <p>Email: {oidcUser.email}</p>
          </div>
        )}
      </OidcSecure>
    );
};

export default WelcomeScreen;
