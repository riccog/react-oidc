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
npm install axios
```

Install the required dependencies using Go:
```bash 
go get github.com/gin-gonic/gin
go get github.com/jinzhu/gorm
go get github.com/jinzhu/gorm/dialects/sqlite
go get github.com/rs/cors
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
Access Control: The `WelcomeScreen.jsx` component includes functionality for task creation and deletion, with permissions based on user roles.

Role-Based Access Control: The role of the user is displayed based on whether they belong to the taskManG1 group. If the user is in this group, they are assigned the Admin role; otherwise, they are assigned the User role.
Task Deletion: Only users with the Admin role (i.e., those in the taskManG1 group) are allowed to delete tasks. Non-admin users will see a "Permission Denied" message.
### 6. Handling Authentication and Access Tokens
User Data: Use the useOidcUser hook to access the authenticated user's information (name, email, etc.).
Tokens: The useOidcAccessToken and useOidcIdToken hooks provide the access and ID tokens, which can be used for making API requests or for additional authentication checks.
### 7. Frontend File Structure
The project's frontend is organized as follows:

`App.jsx`: Main entry point where the OIDC provider is configured.

`RouteList.jsx`: Defines the routing logic for the app and controls which pages are displayed.

`LoginScreen.jsx`: The login page where users initiate the login process with Custos.

`WelcomeScreen.jsx`: A protected page where the authenticated user is greeted, and role-based access is demonstrated.

`DemoVideo`: A demo video demonstrating the entire authentication and authorization flow. The video is titled FullIntegrationWalkthrough and showcases how users log in, view their role, and perform actions based on their group membership.

### 8. Backend File Structure
The projects backend is organized as follows:

`controllers/task_controller.go`: Where we define the endpoint logic.

`initializer/database.go`: Where we connect our database to our server.

`migrations/migrate.go`: Here we link our task model to our database.

`migrations/20241212201227_tasks.sql`: This is where we describe the schema of our database.

`models/task_model.go`: Describes the task field in our database.

`main.go`: Where we generate our server, grant CORs permissions, and define endpoints.

Conclusion
This integration demonstrates how to implement authentication and authorization with Custos in a React app. It leverages role-based access control (RBAC) to ensure that only authorized users can access certain routes or actions.
