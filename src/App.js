import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import 'animate.css';
import "bootstrap/dist/css/bootstrap.min.css";

import LandingPage from "./views/landingPage.js";
import Login from "./views/login/Login.js";
import Signup from "./views/Signup.js";
import Feeds from "./views/Feeds.js";
import Community from "./views/Community.js"
import Notifications from "./views/Notifications.js"
function App() {
  const isLoggedOn = JSON.parse(localStorage.getItem("user")) !== undefined;

  useEffect(() => {
    console.log('Current Path:', window.location.pathname);
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<LandingPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/communities" element={<Community />} />
        <Route exact path="/feeds" element={<Feeds />} />
        <Route exact path="/notifications" element={<Notifications />} />

        {/* 
          <Route path="/communities" element={}></Route>
          <Route path="/network" element={}></Route>
          <Route path="/users" element={}></Route>
          <Route path="/moderators" element={}></Route>
          <Route path="/notifications" element={}></Route>
          <Route path="/myProfile" element={}></Route>
        */}
      </Routes>
    </Router>
  );
}

export default App;
