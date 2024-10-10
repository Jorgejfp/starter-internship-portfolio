import React from 'react';
import { Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Main from "./pages/Main";

const Routez = () => {
    return (
        <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/" element={<Main />} />
        </Routes>
    );
}

export default Routez;
