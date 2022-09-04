import React from 'react';
import './App.css';
import Home from './Components/RoutAll/Home';
import {
  BrowserRouter as Router,
Routes,
Route,
} from "react-router-dom";
import Nomatch from './Components/NoMatch/Nomatch';
import Userdetails from './Components/UserDetails/Userdetails';
function App() {
 
  return (
    <div className="App"> 
    <Router> 
      <Routes> 
          <Route path="/home" element={<Home />}/> 
          <Route path="/user/:userId" element={<Userdetails />}/> 
          <Route path="/" element={<Home />}/> 
          <Route path="*" element={<Nomatch /> }/> 
      </Routes>
    </Router>
    </div>
  );
}

export default App;
