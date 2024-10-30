import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const LoginScreen = () => {
    
    return (
        <div>
          <h1>Manage Tasks More Efficiently</h1>
          <div className="card">
            <Link to="/welcomescreen">Log on via Custos</Link>
          </div>
        </div>
      );
};

export default LoginScreen;