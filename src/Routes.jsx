import React from 'react'
import {Route, Routes} from 'react-router-dom'
import LoginScreen from './pages/LoginScreen.jsx'
import WelcomeScreen from './pages/WelcomeScreen.jsx'

const RouteList = () => {
    return (
        <Routes>
            <Route path="/" element = {<LoginScreen />} />
            <Route path="/welcomescreen" element = {<WelcomeScreen />} />
        </Routes>
    );
};

export default RouteList;