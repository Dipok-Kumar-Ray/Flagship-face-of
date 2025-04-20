import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <>
          <Navbar/>
        <div className='bg-amber-300 min-h-[calc(100vh-112px)]'>
        <Outlet/>
        </div>
          <Footer/>
        </>
    );
};

export default MainLayout;