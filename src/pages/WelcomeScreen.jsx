import React from 'react'
import { OidcSecure } from '@axa-fr/react-oidc';
import { useOidcUser, useOidcIdToken, useOidcAccessToken } from '@axa-fr/react-oidc';
import { useEffect } from 'react';



const WelcomeScreen = () => {
  const {oidcUser, oidcUserLoadingState} = useOidcUser();
  const {idToken, idTokenPayload} = useOidcIdToken();
  const {accessToken, accessTokenPayload} = useOidcAccessToken();

  // Handler for creating a task
  const handleCreateTask = () => {
    alert('Task created!');
  };

  // Handler for deleting a task
  const handleDeleteTask = () => {
    if (oidcUser && oidcUser.groups.includes('taskManG1')) {
      alert('Task deleted!');
    } else {
      alert('You are not an admin, permission denied.');
    }
  };

  const role = oidcUser && oidcUser.groups.includes('taskManG1') ? 'Admin' : 'User';

  return (
    <OidcSecure>
      <h1>Welcome{oidcUser ? `, ${oidcUser.name}` : ''}</h1>
      {oidcUser && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
          <p>Email: {oidcUser.email}</p>
          <p>Role: {role}</p>
          
          {/* Buttons below the email */}
          <div style={{ marginTop: '10px' }}>
            <button onClick={handleCreateTask} style={{ marginBottom: '10px', backgroundColor: '#4CAF50' }}>
              Create Task
            </button>
            <button onClick={handleDeleteTask} style={{ marginBottom: '10px', backgroundColor: '#f44336' }}>
              Delete Task
            </button>
          </div>
        </div>
      )}

    </OidcSecure>
  );
};

export default WelcomeScreen;
