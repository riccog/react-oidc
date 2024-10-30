import React from 'react'
import { OidcSecure } from '@axa-fr/react-oidc';
import { useOidcUser } from '@axa-fr/react-oidc';

const WelcomeScreen = () => {
  const {oidcUser, oidcUserLoadingState} = useOidcUser();
    return (
      <OidcSecure>
        <div>
          <h1>Welcome</h1>
          {oidcUser && <div style={{display: 'flex', justifyContent: 'space-between'}}>{JSON.stringify(oidcUser)} </div>}
        </div>
      </OidcSecure>
    );
};

export default WelcomeScreen;