import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Login from './Login';
import Register from './Register';

const Auth = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="md:flex w-full h-full relative">
            <div className='lg:w-1/6 hidden lg:block'><Sidebar /></div>
            <div className='w-full h-full lg:w-5/6 bg-slate-100 flex flex-col items-center justify-start py-16 md:py-24'>
                <div className="lg:hidden text-2xl md:text-4xl px-3 py-2 md:px-6 md:py-4 text-green-700 font-serif">
                    <div className='flex'>
                        <span className='cursor-pointer font-medium'>iNotes</span>
                    </div>
                </div>
                <div className="md:max-w-3xl w-11/12 lg:max-w-2xl bg-white shadow-lg flex flex-col items-center py-2">
                    <div className='w-5/6 flex bg-green-200 rounded-full my-2 text-md md:text-lg lg:text-xl font-serif'>
                        <button className={`w-1/2 font-bold py-3 ${!toggle ? "bg-green-600 text-white" : "bg-transparent text-green-700"} rounded-full focus:bg-green-600 focus:text-white focus:outline-none focus:shadow-outline`} onClick={() => { setToggle(false) }}>Login</button>
                        <button className={`w-1/2 font-bold py-3 ${toggle ? "bg-green-600 text-white" : "bg-transparent text-green-700"} rounded-full focus:bg-green-600 focus:text-white focus:outline-none focus:shadow-outline`} onClick={() => { setToggle(true) }}>SignUp</button>
                    </div>
                    {toggle ? <Register setToggle={setToggle} /> : <Login setToggle={setToggle} />}
                </div>
            </div>
        </div>
    );
};

export default Auth;
