import React, { useContext, useState } from 'react';
import NoteContext from '../context/NoteContext';

const Sidebar = ({ menu, setMenu }) => {
    const {setAddNote} = useContext(NoteContext)
    return <div className={`w-full bg-white pb-4 relative shadow-lg shadow-gray-500 lg:shadow-none`}>
        <div className="text-3xl md:text-4xl lg:text-5xl px-3 py-2 md:px-6 md:py-4 text-green-600 font-serif">
            <div className='flex justify-between items-center'>
                <span className='cursor-pointer'>iNotes</span>
                <span className='material-icons lg:hidden mx-3 p-1 text-3xl cursor-pointer' onClick={() => { setMenu(false) }}>close</span>
            </div>
        </div>
        <div className={`mt-2 md:mt-5 md:block`}>
            <div className='flex items-center md:py-4 py-2 text-lg md:text-xl lg:text-2xl hover:bg-slate-200 cursor-pointer transition-[0.1s]' onClick={()=>{setAddNote(false)}}><span className='material-icons-outlined text-green-600 md:text-4xl mx-4'>dashboard</span>My Notes</div>
            <div className='flex items-center md:py-4 py-2 text-lg md:text-xl lg:text-2xl cursor-pointer hover:bg-slate-200 transition-[0.1s]' onClick={(()=>{setAddNote(true)})}><span className='material-icons-outlined text-green-600 md:text-4xl mx-4'>add</span>Create Note</div>
        </div>
    </div>;
};

export default Sidebar;
