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
import Alert from "./components/Alert";

const App = () => {
  return (
    <Router>
      <NoteState>
        <div className="w-full h-screen">
          <Alert />
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
