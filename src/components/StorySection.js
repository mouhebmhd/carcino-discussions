import React from "react";
import "../styles/StorySection.css";

const StorySection = () => {
  const stories = new Array(5).fill("Your Story");

  return (
    <div className="story-section justify-content-center">
      {stories.map((story, index) => (
        <div key={index} className="story">
          <span>{story}</span>
        </div>
      ))}
    </div>
  );
};

export default StorySection;