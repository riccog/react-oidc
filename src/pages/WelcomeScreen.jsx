import React from 'react'
import { OidcSecure } from '@axa-fr/react-oidc';
import { useOidcUser, useOidcIdToken, useOidcAccessToken } from '@axa-fr/react-oidc';
import { useEffect } from 'react';
import UserInfo from '../UserInfo.jsx';





const WelcomeScreen = () => {
  const {oidcUser, oidcUserLoadingState} = useOidcUser();
  const {idToken, idTokenPayload} = useOidcIdToken();
  const {accessToken, accessTokenPayload} = useOidcAccessToken();

  useEffect(() => {
    const fetchUserInfo = async () => {
      console.log("access token", accessToken);
      if (accessToken) {
        response = await UserInfo(accessToken);
        console.log("userInfo: Response:", reponse);
      } else {
        console.log('waiting');
      }
    };

    fetchUserInfo(); // Call the async function

  }, [accessToken]);

    return (
      <OidcSecure>
        <h1>Welcome{oidcUser ? `, ${oidcUser.given_name}` : ''}</h1>
        {oidcUser && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <p>Email: {oidcUser.email}</p>
          </div>
        )}
        {<p className="card-text">{JSON.stringify(accessToken)}</p>}
        {accessTokenPayload != null && <p className="card-text">{JSON.stringify(accessTokenPayload)}</p>}
      </OidcSecure>
    );
};

export default WelcomeScreen;
