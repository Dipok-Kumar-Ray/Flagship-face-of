import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <>
          <Navbar/>
        <div className=' min-h-[calc(100vh-112px)]'>
        <div className='max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24'>
        <Outlet/>
        </div>
        </div>
          <Footer/>
        </>
    );
};

export default MainLayout;