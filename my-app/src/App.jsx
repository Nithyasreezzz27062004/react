import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


import Navigation from './Navigation.jsx';
import Login from './Login.jsx';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import Service from './assets/Service.jsx';

function App() {
    return (
        <>
            <BrowserRouter>

                <Navigation />
               

                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/service" element={<Service/>} />
                </Routes>

            </BrowserRouter>
        </>
    );
}

export default App;