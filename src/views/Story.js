import React from "react";

import StorySection from "../components/StorySection";
import CreatePostt from "../components/CreatePost";

import "../styles/Hom.css";

const Story = () => {
  return (
    <div className="storyContainer  w-100 d-flex flex-column ">
        <StorySection />
        <CreatePostt />
        <div className="card postCard mb-4 border-0 shadow-sm">
                <div className="card-body d-flex">
                  <div className="me-3">
                    <img 
                      src="avat3.jpg" 
                      alt="Ideas For Wealth Generation" 
                      className="rounded-circle" 
                      width="100" 
                      height="100" 
                    />
                  
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start">
                      <h4 className="mb-2">Ideas For Wealth Generation</h4>
                      <button className="btn btn-outline-danger rounded-pill px-4">Follow</button>
                    </div>
                    <p className="text-muted">All Post For Educational Purposes Only.</p>
                  </div>
                </div>
          </div>
              
      
    </div>
  );
};

export default Story;