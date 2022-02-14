import React from 'react';
import Alert from './Alert';
import Notes from './Notes';
import Sidebar from './Sidebar';

const Homepage = () => {
    return (
        <div className='w-screen h-screen'>
            <Alert />
            <div className="md:flex w-full h-full relative">
                <div className='lg:w-1/6 hidden lg:block'><Sidebar /></div>
                <Notes />
            </div>
        </div>)
};

export default Homepage;
