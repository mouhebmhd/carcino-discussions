import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import 'animate.css';

import Header from "./components/Header";
import SidebarS from "./components/Sidebar";
import SignupS from "./views/Signup";
import Community from "./views/Community";
import ProfilePageP from "./views/ProfilePage";
import VideoPage from "./views/VideoPage";
import Story from "./views/Story.js";
import Home from "./views/Home.js";
import FooterF from "./components/Foot.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Comments from "./components/comments.js";

import Login from "./components/login/Login.js";

import SuggestionsS from "./components/Suggestions.js";
import Network from "./views/Network.js";
import ProfilePage from "./views/ProfilePage";
import Post from "./components/Ppost.js";
import SectionC from "./components/compent.js";
import PersonalLandingPage from "./components/LandingPage/home.js";
import ContactForm from "./components/LandingPage/Contact.js";
import AboutUs from "./components/LandingPage/AboutUs.js";
import Team from "./components/LandingPage/Team.js";
import ModeratorDashboard from "./components/Moderateur/ModerateurM.js";
import ProfileManager from "./components/Moderateur/profilManager.js";
import CommunityManager from "./components/Moderateur/communityManager.js";
import AddCommunity from "./components/Moderateur/AddCommunity.js";
import NotificationManager from "./components/Moderateur/notificationManager.js";
import UsersManager from "./components/Moderateur/userManager.js";
import PublicationsManager from "./components/Moderateur/publicationManager.js";


function App() {
  return (
    <Router>
      
       

        <main className="main-content">
          <Routes>
          <Route path="/" element={<PersonalLandingPage />} />

          <Route path="/Home" element={<Home />} />
          <Route path="/SidebarS" element={<SidebarS />} />
            <Route path="/Community" element={<Community />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/SignupS" element={<SignupS />} />
            <Route path="/VideoPage" element={<VideoPage />} />
            <Route path="/Story" element={<Story />} />
            <Route path="/FooterF" element={<FooterF />} />
            <Route path="/Comments" element={<Comments />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SuggestionsS" element={<SuggestionsS />} />
            <Route path="/Network" element={<Network />} />
            <Route path="/Post" element={<Post />} />
            <Route path="/SectionC" element={<SectionC />} />
            <Route path="/ContactForm" element={<ContactForm />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/communities" element={<CommunityManager />} />
            <Route path="/ajouter-communaute" element={<AddCommunity />} />
            <Route path="/notifications" element={<NotificationManager />} />
            <Route path="/users" element={<UsersManager />} />
            <Route path="/publications" element={<PublicationsManager />} />
            <Route path="/dashboard" element={<ModeratorDashboard />} />
            <Route path="/profile" element={<ProfileManager />} />
      
            
          

          </Routes>
        </main>
      
    </Router>
  );
}

export default App;