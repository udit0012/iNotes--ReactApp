import React, { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
    const [addNote, setAddNote] = useState(false);
    return <NoteContext.Provider value={{
        addNote, setAddNote
    }}>
        {props.children}
    </NoteContext.Provider>;
};

export default NoteState;
