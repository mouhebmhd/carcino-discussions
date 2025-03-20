import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SidebarS from "./components/Sidebar";
import SignupS from "./views/Signup";
import Community from "./views/Community";
import ProfilePageP from "./views/ProfilePage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <SidebarS />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<SignupS />} />
            <Route path="/community" element={<Community />} />
            <Route path="/profile" element={<ProfilePageP />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;