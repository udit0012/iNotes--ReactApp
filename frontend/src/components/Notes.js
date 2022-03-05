import React, { useContext, useEffect } from 'react';
import NoteContext from '../context/NoteContext';
import AddNote from './Notes/AddNote';
import Navbar from './Navbar';
import NoteItem from './Notes/NoteItem';
import Spinner from './loaders/Spinner';
import Alert from './Alert';

const Notes = () => {
  const { addNote, fetchallnotes, notes, delload, fetchload, setAddNote } = useContext(NoteContext)
  useEffect(() => {
    fetchallnotes()
    console.log(notes.length);
  }, [])

  return <div className='w-full h-full lg:w-5/6 bg-slate-100'>
    <Navbar />
    <div className={`${addNote ? "hidden" : 'block'}`}>
      {(localStorage.getItem("inotetoken") && notes.length !== 0) ? <>
        <div className='w-full h-10 flex justify-end lg:justify-start mt-4 items-center'>
          {(fetchload || delload) ? <div className='w-20 lg:w-28 flex justify-center'><Spinner /></div>  :
            <div>
              <button onClick={() => { setAddNote(true) }} className="flex lg:hidden items-center mx-2 my-2 md:my-4 bg-green-600 hover:bg-green-700 text-sm md:text-lg duration-150 text-white font-bold py-1 md:py-2 px-3 md:px-2 rounded focus:outline-none focus:shadow-outline hover:shadow-sm hover:shadow-neutral-500" type="button">
                <span className='material-icons text-lg md:text-xl mr-1'>add</span>
                New note
              </button>
            </div>
          }
        </div>
        <div className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 my-2 md:my-5 px-1 md:px-8`}>
          {notes?.map((note) => {
            return <NoteItem key={note._id} note={note} />
          })}
        </div>
      </> :
        <div className='w-full flex justify-center py-64'>
          <div>
            <div className='w-full flex items-center text-3xl md:text-5xl font-bold text-neutral-600'>{!localStorage.getItem("inotetoken") && <span className='material-icons text-3xl md:text-5xl'>add</span>}Create a new note</div>
            {localStorage.getItem("inotetoken") ? <button onClick={() => { setAddNote(true) }} className="flex items-center mx-auto my-2 bg-green-600 hover:bg-green-700 text-sm md:text-xl duration-150 text-white font-bold py-1 md:py-2 px-3 md:px-4 rounded focus:outline-none focus:shadow-outline hover:shadow-sm hover:shadow-neutral-500" type="button">
              <span className='material-icons text-lg md:text-2xl'>add</span>
              Create first note
            </button> :
              <div className='flex justify-center text-lg md:text-2xl font-medium text-neutral-400'>Login to see your notes</div>}
          </div>
        </div>
      }
    </div>
    <AddNote />
  </div>;
};

export default Notes;
