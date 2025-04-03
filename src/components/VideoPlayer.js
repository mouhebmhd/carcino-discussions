import React from "react";
import "../styles/VideoPlayer.css";;  

const VideoPlayer = ({ videoSrc }) => {
  return (
    <div className="video-player">
      <video controls className="video-element">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;