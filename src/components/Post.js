import React from "react";
import VideoPlayer from "./VideoPlayer";

const Post = ({ user, date, text, video }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex align-items-center mb-2">
          <span className="fw-bold me-2">{user}</span> 
          <small className="text-muted">{date}</small>
        </div>
        <p className="card-text">{text}</p>
        {video && <VideoPlayer videoSrc={video} />}
        <div className="d-flex justify-content-around mt-3">
          <button className="btn btn-outline-primary"> Like</button>
          <button className="btn btn-outline-secondary"> Comment</button>
          <button className="btn btn-outline-success"> Share</button>
          <button className="btn btn-outline-warning"> Save</button>
        </div>
      </div>
    </div>
  );
};

export default Post;