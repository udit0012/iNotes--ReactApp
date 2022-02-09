import React from 'react';
import Navbar from './Navbar';
import NoteItem from './NoteItem';

const Notes = () => {
  const note = {
    "id":1,
    "title": "Birthday",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    "tag":"todo"
  }
  return <div className='w-full h-full lg:w-5/6 bg-slate-100'>
    <Navbar />
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 px-8'>
      <NoteItem note={note} />
      <NoteItem note={note} />
      <NoteItem note={note} />
      <NoteItem note={note} />
    </div>
  </div>;
};

export default Notes;
