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
import Users from "./views/users.js"
import Moderators from "./views/moderators.js"
import Network  from "./views/Network.js";
import SeeProfile  from "./views/SeeProfile.js";
import UpdateUser from "./views/updateProfile.js";
import Publications from "./views/publications.js";


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
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/moderators" element={<Moderators />} />
        <Route exact path="/network" element={<Network />} />
        <Route exact path="/profile/seeUserProfile/:id" element={<SeeProfile />} />
        <Route exact path="/myProfile/:id" element={<UpdateUser />} />
        <Route exact path="/publications" element={<Publications />} />
        publications
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
