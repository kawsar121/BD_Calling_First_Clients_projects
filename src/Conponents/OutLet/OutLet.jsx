import React from 'react';
import Navbar from '../LayOuts/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../LayOuts/Footer';

const OutLet = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default OutLet;