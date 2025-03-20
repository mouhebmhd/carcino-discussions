import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SidebarS from "./components/Sidebar";
import SignupS from "./views/Signup";
import Community from "./views/Community";
import ProfilePageP from "./views/ProfilePage";


import Home from "./views/Home.js";

function App() {
  return (
    <Router>
      
       

        <main className="main-content">
          <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/SidebarS" element={<SidebarS />} />
            <Route path="/Community" element={<Community />} />
            <Route path="/profile" element={<ProfilePageP />} />
            <Route path="/SignupS" element={<SignupS />} />
          </Routes>
        </main>
      
    </Router>
  );
}

export default App;