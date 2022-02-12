import React, { useContext, useEffect } from 'react';
import NoteContext from '../context/NoteContext';
import AddNote from './Notes/AddNote';
import Navbar from './Navbar';
import NoteItem from './Notes/NoteItem';
import Spinner from './loaders/Spinner';

const Notes = () => {
  const { addNote, fetchallnotes, notes,delload,fetchload } = useContext(NoteContext)
  useEffect(() => {
    fetchallnotes()
  }, [])

  return <div className='w-full h-full lg:w-5/6 bg-slate-100'>
    <Navbar />
    <div className='w-full h-10 flex justify-center items-center'>
      {(fetchload || delload) && <Spinner />}
    </div>
    <div className={`${addNote ? "hidden" : 'block'} w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 px-1 md:px-8`}>
      {notes?.map((note) => {
        return <NoteItem key={note._id} note={note} />
      })}
    </div>
    <AddNote />
  </div>;
};

export default Notes;
