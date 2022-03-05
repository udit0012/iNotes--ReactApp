import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteContext from '../context/NoteContext';

const Sidebar = ({ menu, setMenu }) => {
    const navigate = useNavigate()
    const {setAddNote} = useContext(NoteContext)
    const createnoteclick = ()=>{
        if(localStorage.getItem("inotetoken")){
            setAddNote(true)
        }
        else{
            navigate("/auth")
        }
    }
    return <div className={`w-full lg:h-full bg-green-600 pb-4 relative shadow-lg shadow-gray-500 lg:shadow-none`}>
        <div className="text-3xl md:text-4xl lg:text-5xl px-3 py-2 md:px-6 md:py-4 text-white font-serif">
            <div className='flex justify-between items-center'>
                <span className='cursor-pointer'>iNotes</span>
                <span className='material-icons lg:hidden mx-3 p-1 text-xl md:text-3xl cursor-pointer' onClick={() => { setMenu(false) }}>close</span>
            </div>
        </div>
        <div className={`mt-2 md:mt-5 lg:block font-serif`}>
            <div className='flex items-center text-white border-b rounded-xl border-b-white md:py-4 py-4 text-md md:text-xl lg:text-2xl hover:bg-green-700 cursor-pointer transition-[0.1s]' onClick={()=>{setAddNote(false)}}><span className='material-icons-outlined text-white md:text-4xl mx-4'>dashboard</span>My Notes</div>
            <div className='flex items-center text-white border-b rounded-xl border-b-white md:py-4 py-4 text-md md:text-xl lg:text-2xl cursor-pointer hover:bg-green-700 transition-[0.1s]' onClick={createnoteclick}><span className='material-icons-outlined text-white md:text-4xl mx-4'>add</span>Create Note</div>
        </div>
    </div>;
};

export default Sidebar;
