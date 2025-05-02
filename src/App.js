import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import 'animate.css';
import "bootstrap/dist/css/bootstrap.min.css";

import LandingPage from "./views/landingPage.js";
import Login from "./views/login/Login.js";
import Signup from "./views/Signup.js";
import Analyse from "./views/Analyse.js";
import Community from "./views/Community.js"
import Notifications from "./views/Notifications.js"
import Users from "./views/users.js"
import Moderators from "./views/moderators.js"
import Network  from "./views/Network.js";
import SeeProfile  from "./views/SeeProfile.js";
import UpdateUser from "./views/updateProfile.js";
import Publications from "./views/publications.js";
import FeedDisplay from "./views/FeedDisplay.js";
import Dashboard from "./views/Dashboard.js";
import Abonnements from "./views/Abonnements.js";
import ViewCommunity from "./views/viewCommunity.js";
import AdminDashboard from "./views/ControlPanel.js";
import CommunitiesDisplay from "./views/communitiesDisplay.js"
import ModerateurMo from "./views/Moderateur1.js";

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
        <Route exact path="/communitiesDisplay" element={<CommunitiesDisplay />} />
        <Route exact path="/community/SeePublications/:communityId" element={<ViewCommunity />} />
        <Route exact path="/notifications" element={<Notifications />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/moderators" element={<Moderators />} />
        <Route exact path="/network" element={<Network />} />
        <Route exact path="/profile/seeUserProfile/:id" element={<SeeProfile />} />
        <Route exact path="/myProfile/:id" element={<UpdateUser />} />
        <Route exact path="/publications" element={<Publications />} />
        <Route exact path="/feedDisplay" element={<FeedDisplay />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/abonnements" element={<Abonnements />} />
        <Route exact path="/analyse" element={<Analyse />} />
        <Route exact path="/dashboardAdmin" element={<AdminDashboard />} />
        <Route exact path="/ModerateurMo" element={<ModerateurMo />} />
        

        
        
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
