import React from 'react';
import Navbar from './Navbar';
import Notes from './Notes';
import Sidebar from './Sidebar';

const Homepage = () => {
    return(
        <div className="md:flex w-screen h-screen relative">
            <div className='lg:w-1/6 hidden lg:block'><Sidebar /></div>
            <Notes />
        </div>)
};

export default Homepage;
