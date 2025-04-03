import React from "react";

import StorySection from "../components/StorySection";
import CreatePostt from "../components/CreatePost";

import "../styles/Hom.css";

const Story = () => {
  return (
    <div className="home">
     
      <div className="main-content">
        <StorySection />
        <CreatePostt />
    
      </div>
    </div>
  );
};

export default Story;