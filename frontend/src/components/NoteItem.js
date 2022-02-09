import React from 'react';

const NoteItem = ({ note }) => {
    const bgcolor = note.tag === "work" ? 'bg-rose-500' : note.tag === "reminder" ? 'bg-amber-500' : note.tag === "todo" ? 'bg-cyan-500' : note.tag === "money" ? 'bg-emerald-500' : 'bg-purple-500'
    const fontcolor = note.tag === "work" ? 'text-rose-200' : note.tag === "reminder" ? 'text-amber-200' : note.tag === "todo" ? 'text-cyan-200' : note.tag === "money" ? 'text-emerald-200' : 'text-purple-200'

    return <div key={note.id} className='bg-white mx-1 py-3'>
        <div className='flex justify-between'>
            <div className='flex items-center space-x-2 mx-3 my-2 capitalize'>
                <div className={`w-12 h-12 flex justify-center items-center text-2xl rounded-full ${bgcolor} ${fontcolor} capitalize`}>{note.tag.slice(0, 1)}</div>
                <div className='text-xl font-serif '>{note.title}
                <div className='text-xs text-zinc-600 font-semibold mt-1'>{note.tag}</div>
                </div>
            </div>
            <div className='flex justify-center items-center mx-4 space-x-3'>
                <span className="material-icons md:text-2xl text-zinc-500 cursor-pointer">delete</span>
                <span className="material-icons md:text-2xl text-zinc-500 cursor-pointer">edit</span>
            </div>
        </div>
        <div className='px-4 py-2 font-serif'>{note.description}</div>
    </div>;
};

export default NoteItem;
