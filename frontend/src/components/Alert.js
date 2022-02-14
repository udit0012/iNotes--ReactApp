import React, {useContext } from 'react'
import NoteContext from '../context/NoteContext'

const Alert = () => {
    const { alert } = useContext(NoteContext)
    return (
        <div className='w-full absolute z-30'>
            {alert && <div className={`font-serif flex items-center text-lg py-4 font-medium px-4 border-b-4 ${alert.type==="error"?"text-red-700 border-red-700 bg-red-100":alert.type==="warning"?"text-amber-700 border-amber-700 bg-amber-100":"text-green-700 border-green-700 bg-green-100"}`}>
                <span className='material-icons-outlined px-2'>{alert.type==="success"?"check_circle":"warning"}</span> {alert.message}
            </div>}
        </div>
    )
}

export default Alert