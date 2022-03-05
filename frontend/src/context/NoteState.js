import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteContext from './NoteContext';

const NoteState = (props) => {
    const navigate = useNavigate()
    const [addNote, setAddNote] = useState(false);
    const [alert, setAlert] = useState(null)
    const [user, setUser] = useState({})
    const link = 'http://localhost:8000'

    const showAlert = (message, type) => {
        setAlert({
            message, type
        })
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }

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
                showAlert("Some issue occured try login again","error")
            }
        }
    }
    useEffect(() => {
        if (localStorage.getItem("inoteuser") && !user.username) {
            const userinfo = JSON.parse(localStorage.getItem("inoteuser"))
            setUser(userinfo)
        }
    })
    const logout = () => {
        localStorage.removeItem("inotetoken")
        localStorage.removeItem("inoteuser")
        showAlert("Logged out Successfully","success")
        navigate("/")
    }
    //notes usestate hooks
    const [notes, setNotes] = useState([])
    const [fetchload, setFetchload] = useState(false)
    const [delload, setDelload] = useState(false)
    //notes endpoints
    const fetchallnotes = async()=>{
        if(localStorage.getItem("inotetoken")){
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
            } catch (error) {
                showAlert("Some Issue occured try login again","error")
            }
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
            setDelload(false)
            setNotes(notes.filter((u)=>u._id!==noteid))
            showAlert("Note Deleted","success")
        } catch (error) {
            showAlert("Note not deleted or note doesn't exists","warning")
        }
    }
    return <NoteContext.Provider value={{
        alert, showAlert,
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
