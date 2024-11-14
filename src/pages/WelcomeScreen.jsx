import React from 'react'
import { OidcSecure } from '@axa-fr/react-oidc';
import { useOidcUser, useOidcIdToken, useOidcAccessToken } from '@axa-fr/react-oidc';
import { useEffect } from 'react';



const WelcomeScreen = () => {
  const {oidcUser, oidcUserLoadingState} = useOidcUser();
  const {idToken, idTokenPayload} = useOidcIdToken();
  const {accessToken, accessTokenPayload} = useOidcAccessToken();
  
    return (
      <OidcSecure>
        <h1>Welcome{oidcUser ? `, ${oidcUser.name}` : ''}</h1>
        {oidcUser && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <p>Email: {oidcUser.email}</p>
            <br />
            <button onClick={() => {
              if (oidcUser.groups.includes("TASK_ADMIN_GRP1")) {
                console.log("You are part of the group")
              } else {
                console.log("You are not part of the group")
              }
            }}>Click Me!</button>
          </div>
        )}
        {<p className="card-text">{JSON.stringify(accessToken)}</p>}
        {accessTokenPayload != null && <p className="card-text">{JSON.stringify(accessTokenPayload)}</p>}
      </OidcSecure>
    );
};

export default WelcomeScreen;
