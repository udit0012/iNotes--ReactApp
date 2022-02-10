import React from 'react';
import Auth from './Authentictaion/Auth';
import Login from './Authentictaion/Login';
import Notes from './Notes';
import Sidebar from './Sidebar';

const Homepage = () => {
    return(
        <div className="md:flex w-screen h-screen relative">
            <div className='lg:w-1/6 hidden lg:block'><Sidebar /></div>
            {/* <Notes /> */}
            <Auth />
        </div>)
};

export default Homepage;
