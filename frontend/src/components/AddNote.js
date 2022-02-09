import React, { useContext, useEffect, useState } from 'react';
import NoteContext from '../context/NoteContext';

const AddNote = () => {
    const { addNote, setAddNote } = useContext(NoteContext)

    // useState hook
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("");
    const [othertag, setOthertag] = useState("");

    //useEffect hook


    return <div className={`w-full flex justify-center ${addNote ? "block" : "hidden"}`}>
        <div className="md:max-w-3xl w-11/12 lg:max-w-5xl">
            <div className='text-2xl md:text-3xl lg:text-4xl py-4 text-green-600 font-serif'>Create a new note</div>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-green-600 text-sm font-bold mb-2" htmlFor="username">
                        Title
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-green-600" id="title" type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder="Title" />
                </div>
                <div className="mb-2">
                    <label className="block text-green-600 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-green-600" id="description" value={description} onChange={(e) => { setDescription(e.target.value) }} type="text" rows={5} placeholder="Note description....." />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="tag" className="block text-sm font-medium text-green-600">
                        Tag
                    </label>
                    <div className='flex space-x-2'>
                        <select
                            id="tag"
                            name="tag"
                            autoComplete="tag-name"
                            value={tag}
                            onChange={(e) => { setTag(e.target.value) }}
                            className="mt-1 block w-1/2 md:w-1/3 lg:w-1/4 py-2 px-3 border border-gray-300 bg-white rounded shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        >
                            <option>work</option>
                            <option>reminder</option>
                            <option>todo</option>
                            <option>money</option>
                            <option>other</option>
                        </select>
                        <input className={`${tag==="other" ? 'block' : 'hidden'} shadow appearance-none border rounded w-1/2 md:w-1/3 lg:w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-green-600`} id="title" type="text" value={othertag} onChange={(e) => { setOthertag(e.target.value) }} placeholder="Other Tag.." required />
                    </div>
                </div>
                <div className="flex items-center py-4 space-x-2">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-sm shadow-neutral-500" type="button">
                        Create
                    </button>
                    <button className="bg-green-100 hover:bg-green-600 duration-150 text-green-600 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:shadow-sm hover:shadow-neutral-500" onClick={() => { setAddNote(false) }} type="button">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    </div>;
};

export default AddNote;
