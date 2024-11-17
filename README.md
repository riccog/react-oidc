# Custos Authentication and Authorization Integration

This project demonstrates how to integrate Custos for authentication and authorization in a React application. It uses the `@axa-fr/react-oidc` library to handle OpenID Connect (OIDC) authentication and manage user access control.

## Features
- **Authentication**: Handles user login and token management using Custos as the identity provider.
- **Authorization**: Checks user roles/groups to determine access rights.
- **Secure Routes**: Protects routes using `OidcSecure` to ensure only authenticated users can access specific pages.
- **Access Control Model**: Role-based access control (RBAC) based on user groups.

## Setup

### 1. Install Dependencies

Install the required dependencies using npm:

```bash 
npm install @axa-fr/react-oidc react-router-dom
```

###  2. App Configuration
The authentication configuration is defined in the `App.jsx` file. It includes the client ID, redirect URI, and endpoints for authentication and token management. Ensure that your Custos information (such as the authorization and token endpoints) is properly set in the configuration.

### 3. Authentication Flow
Login: When users visit the login page (defined in `LoginScreen.jsx`), they are redirected to Custos for authentication. After successful login, they are redirected back to the app.
Callback Handling: Once the user returns from Custos, the tokens are automatically managed by the OidcProvider in the `App.jsx` file.
### 4. Route Protection
The `WelcomeScreen.jsx` component demonstrates how to protect routes. By wrapping the content in the OidcSecure component, access is restricted to authenticated users.

Protected Routes: The `RouteList.jsx` file defines the routing logic, with certain pages being accessible only to authenticated users.
### 5. Role-based Access Control (RBAC)
Access Control: In `WelcomeScreen.jsx`, user roles are checked based on group membership. The app checks if the user belongs to certain groups (e.g., "TASK_ADMIN_GRP1") to determine if they have the required permissions to access certain functionality.
### 6. Handling Authentication and Access Tokens
User Data: Use the useOidcUser hook to access the authenticated user's information (name, email, etc.).
Tokens: The useOidcAccessToken and useOidcIdToken hooks provide the access and ID tokens, which can be used for making API requests or for additional authentication checks.
### 7. Files Structure
The project is organized as follows:

`App.jsx`: Main entry point where the OIDC provider is configured.

`RouteList.jsx`: Defines the routing logic for the app and controls which pages are displayed.

`LoginScreen.jsx`: The login page where users initiate the login process with Custos.

`WelcomeScreen.jsx`: A protected page where the authenticated user is greeted, and role-based access is demonstrated.
Conclusion
This integration demonstrates how to implement authentication and authorization with Custos in a React app. It leverages role-based access control (RBAC) to ensure that only authorized users can access certain routes or actions.
