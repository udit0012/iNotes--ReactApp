import React from "react"
import Homepage from "./components/Homepage";
import NoteState from "./context/NoteState";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import Auth from "./components/Authentictaion/Auth";

const App = () => {
  return (
    <Router>
      <NoteState>
        <div>
          <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path="/auth" exact element={<Auth />} />
          </Routes>
        </div>
      </NoteState>
    </Router>
  );
};

export default App;
