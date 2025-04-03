import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
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

function App() {
  return (
    <Router>
      
       

        <main className="main-content">
          <Routes>
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
            <Route path="/" element={<PersonalLandingPage />} />
            <Route path="/ContactForm" element={<ContactForm />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Team" element={<Team />} />
            

            

          </Routes>
        </main>
      
    </Router>
  );
}

export default App;