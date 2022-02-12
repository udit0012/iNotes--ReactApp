import React, { useContext, useEffect, useState } from 'react';
import NoteContext from '../../context/NoteContext';

const NoteItem = ({ note }) => {
    const { link, deletenote, fetchallnotes } = useContext(NoteContext)
    const [modaltoggle, setModaltoggle] = useState(false)
    const [unote, setUnote] = useState({ title: note.title, description: note.description, tag: note.tag })
    const bgcolor = note.tag === "work" ? 'bg-rose-500' : note.tag === "reminder" ? 'bg-amber-500' : note.tag === "todo" ? 'bg-cyan-500' : note.tag === "money" ? 'bg-emerald-500' : 'bg-purple-500'
    const fontcolor = note.tag === "work" ? 'text-rose-200' : note.tag === "reminder" ? 'text-amber-200' : note.tag === "todo" ? 'text-cyan-200' : note.tag === "money" ? 'text-emerald-200' : 'text-purple-200'

    useEffect(() => {
        setTimeout(() => {
            if(modaltoggle){
                document.querySelector(".modal").classList.add('translate-y-48')
            }
        }, 50);
    }, [modaltoggle])
    

    const updatenote = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${link}/inotesApi/notes/updatenote/${note._id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': "application/json",
                    'auth-token': localStorage.getItem("inotetoken"),
                },
                body: JSON.stringify({ title: unote.title, description: unote.description, tag: unote.tag })
            })
            const json = await response.json()
            fetchallnotes()
            setModaltoggle(false)
        } catch (error) {
            console.log(error);
        }
    }
    const onchange = (e) => {
        setUnote({ ...unote, [e.target.name]: e.target.value })
    }
    return <>
        <div className='bg-white mx-1 py-3'>
            <div className='flex justify-between'>
                <div className='flex items-center space-x-2 mx-3 my-2 capitalize'>
                    <div className={`w-12 h-12 flex justify-center items-center text-2xl rounded-full ${bgcolor} ${fontcolor} capitalize`}>{note.tag.slice(0, 1)}</div>
                    <div className='text-lg lg:text-xl font-serif '>{note.title}
                        <div className='text-xs text-zinc-600 font-semibold mt-1'>{note.tag}</div>
                    </div>
                </div>
                <div className='flex justify-center items-center mx-4 space-x-3'>
                    <span className="material-icons md:text-2xl text-zinc-500 cursor-pointer" onClick={() => { deletenote(note._id) }}>delete</span>
                    <button onClick={() => { setModaltoggle(true) }}><span className="material-icons md:text-2xl text-zinc-500 cursor-pointer">edit</span></button>
                </div>
            </div>
            <div className='px-4 py-2 font-serif'>{note.description}</div>
        </div>
        {modaltoggle && <div className="flex items-center md:justify-center md:items-start bg-neutral-600 bg-opacity-40 fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto backdrop-blur-[2px]" id="updatedialog" role="dialog">
            <div className='w-full h-full absolute ' onClick={() => { setModaltoggle(false) }}></div>
            <div className={`modal w-full md:w-3/4 lg:w-1/2 absolute pointer-events-none -top-48 transition ease-out duration-[1.5s]`}>
                <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div className="flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <h5 className="text-xl font-medium leading-normal text-green-600" id="exampleModalLgLabel">
                            Update Note
                        </h5>
                        <span className='material-icons text-green-600 cursor-pointer' onClick={() => { setModaltoggle(false) }}>close</span>
                    </div>
                    <div className="modal-body relative p-4">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={updatenote}>
                            <div className="mb-4">
                                <label className="block text-green-600 text-sm font-bold mb-2" htmlFor="username">
                                    Title
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-green-600" id="title" name='title' type="text" value={unote.title} onChange={onchange} placeholder="Title" />
                            </div>
                            <div className="mb-2">
                                <label className="block text-green-600 text-sm font-bold mb-2" htmlFor="description">
                                    Description
                                </label>
                                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-green-600" id="description" name='description' value={unote.description} onChange={onchange} type="text" rows={5} placeholder="Note description....." />
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
                                        value={unote.tag}
                                        onChange={onchange}
                                        className="mt-1 block w-1/2 md:w-1/3 lg:w-1/4 py-2 px-3 border border-gray-300 bg-white rounded shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                    >
                                        <option>work</option>
                                        <option>reminder</option>
                                        <option>todo</option>
                                        <option>money</option>
                                        <option>other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex items-center py-4 space-x-2">
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-sm shadow-neutral-500" type="submit">
                                    Update
                                </button>
                                <button className="bg-green-100 hover:bg-green-600 duration-150 text-green-600 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:shadow-sm hover:shadow-neutral-500" onClick={() => { setModaltoggle(false); }} type="button">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>}
    </>;
};

export default NoteItem;
