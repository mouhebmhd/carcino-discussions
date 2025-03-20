import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Suggestions from "../components/Suggestions";
import News from "../components/News";


function Community() {
  return (
    <div className="community-page">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <div className="content">
          <h2>Community Groups</h2>
          <div className="group">
            <h3>Long Term Investing</h3>
            <p>All Post For Educational Purposes Only.</p>
            <span>220 Members</span>
            <button>Follow</button>
          </div>
          <div className="group">
            <h3>Short Term Investing</h3>
            <p>All Post For Educational Purposes Only.</p>
            <span>423 Members</span>
            <button>Follow</button>
          </div>
          <div className="group">
            <h3>Ideas For Wealth Generation</h3>
            <p>All Post For Educational Purposes Only.</p>
            <button>Follow</button>
            </div>
        </div>
        <div className="right-sidebar">
          <Suggestions />
          <News />
        </div>
      </div>
    </div>
  );
};

export default Community;