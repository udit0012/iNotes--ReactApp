import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Navbar = () => {
    const d = new Date()
    const [menu, setMenu] = useState(false);
    return <div className='md:w-full flex justify-between lg:py-4'>
        <div className="lg:hidden text-3xl md:text-4xl lg:text-5xl px-3 py-2 md:px-6 md:py-4 text-green-600 font-serif">
            <div className='flex md:justify-between items-center'>
                <span className='material-icons lg:hidden mx-3 p-1 text-3xl cursor-pointer' onClick={() => { setMenu(!menu) }}>menu</span>
                <span className='cursor-pointer'>iNotes</span>
            </div>
        </div>
        <div className="hidden md:flex text-green-600 text-xl lg:text-2xl px-4 font-serif items-center pointer-events-none">
            <span>{d.toLocaleTimeString('en-US', {
                hour12: true,
                hour: "numeric",
                minute: "numeric"
            })}</span>
            <span className="material-icons text-[0.5rem] px-1">
                fiber_manual_record
            </span>
            <span>{d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
        </div>
        <div className='flex items-center px-4 md:px-7 text-green-600 text-2xl font-serif'>
            <span className='hidden md:block'>Udit</span>
            <span className="material-icons text-4xl px-2">account_circle</span>
        </div>
        <div className={`${menu ? "block" : "hidden"} h-full w-full fixed pb-4 lg:hidden backdrop-blur-[2px]`}><Sidebar menu={menu} setMenu={setMenu} />
            <div className='w-full h-full' onClick={() => { setMenu(!menu) }}></div>
        </div>
    </div>;
};

export default Navbar;
