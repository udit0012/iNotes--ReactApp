import React from "react"
import Homepage from "./components/Homepage";
import NoteState from "./context/NoteState";

const App = () => {
  return (<NoteState>
    <div>
      <Homepage />
    </div>
  </NoteState>);
};

export default App;
