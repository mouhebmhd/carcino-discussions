import React from "react";
import Header from "../components/Header";
import SidebarS from "../components/Sidebar";
import Post from "../components/Post";
import "../styles/VideoPage.css";
import NavBar from "../components/NavBar";
import SuggestionsS from "../components/Suggestions";
import NewsN from "../components/News";


const VideoPage = () => {
  return (
    <div className="video-page">
      
      <NavBar />

      <div className="content">
        <SidebarS />

        <main className="main-content">
          <h2> Video Feed</h2>
          
          <Post
            user="Danish Paul"
            date="August 25, 2021"
            text="Lorem ipsum dolor sit amet..."
            video="/vid1.mp4"
          />
          
        </main>
        <div className="right-sidebar">
          <SuggestionsS />
          <NewsN />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;