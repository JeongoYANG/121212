import React from "react";
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import Home from "./hello/Home";
import Bmi from "./hello/Bmi";
import Calc from "./hello/Calc";
import Grade from "./hello/Grade";
import Login from "./hello/Login";
import Join from "./hello/Join";

const App = () =>{
return (
        <div>
          <Router>
          <Routes>
            <Route expected path="/" element={<Home/>}/>
            <Route path="/bmi" element={<Bmi/>}/>
            <Route path="/calc" element={<Calc/>}/>
            <Route path="/grade" element={<Grade/>}/>
            <Route path="/join" element={<Join/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
          </Router>
        </div>
      )
}

export default App