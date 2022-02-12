import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteContext from './NoteContext';

const NoteState = (props) => {
    const navigate = useNavigate()
    const [addNote, setAddNote] = useState(false);
    const [user, setUser] = useState({})
    const link = 'http://localhost:8000'

    const fetchuser = async () => {
        if (localStorage.getItem("inotetoken")) {
            try {
                const response = await fetch(`${link}/inotesApi/auth/getuser`, {
                    method: "GET",
                    headers: {
                        'Content-Type': "application/json",
                        'auth-token': localStorage.getItem("inotetoken"),
                    }
                })
                const json = await response.json()
                localStorage.setItem("inoteuser", JSON.stringify(json))
                setUser(json)
            } catch (error) {
                console.log(error)
            }
        }
    }
    useEffect(() => {
        if (localStorage.getItem("inoteuser") && !user.username) {
            const userinfo = JSON.parse(localStorage.getItem("inoteuser"))
            console.log(userinfo);
            setUser(userinfo)
            console.log("user",user)
        }
    })
    const logout = () => {
        localStorage.removeItem("inotetoken")
        localStorage.removeItem("inoteuser")
        navigate("/")
    }
    //notes usestate hooks
    const [notes, setNotes] = useState([])
    const [fetchload, setFetchload] = useState(false)
    const [delload, setDelload] = useState(false)
    //notes endpoints
    const fetchallnotes = async()=>{
        try {
            setFetchload(true)
            const response = await fetch(`${link}/inotesApi/notes/fetchallnotes`,{
                method: "GET",
                headers: {
                    'Content-Type': "application/json",
                    'auth-token': localStorage.getItem("inotetoken"),
                }
            });
            const json = await response.json()
            setNotes(json)
            setFetchload(false)
            console.log(json)
        } catch (error) {
            console.log(error)
        }
    }

    const deletenote = async(noteid)=>{
        try {
            setDelload(true)
            const response = await fetch(`${link}/inotesApi/notes/deletenote/${noteid}`,{
                method:"DELETE",
                headers: {
                    'Content-Type': "application/json",
                    'auth-token': localStorage.getItem("inotetoken"),
                }
            })
            const json = await response.json();
            console.log(json)
            setDelload(false)
            setNotes(notes.filter((u)=>u._id!==noteid))
        } catch (error) {
            console.log(error)
        }
    }
    return <NoteContext.Provider value={{
        addNote, setAddNote,
        link,
        user, setUser,
        fetchuser, logout,
        fetchallnotes, fetchload,
        notes, setNotes,
        deletenote,delload
    }}>
        {props.children}
    </NoteContext.Provider>;
};

export default NoteState;
