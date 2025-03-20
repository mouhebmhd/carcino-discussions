import React from "react";
import { Link } from "react-router-dom";
import { FaBell, FaEnvelope, FaUsers, FaFile, FaCalendar, FaUser, FaEllipsisH } from "react-icons/fa";

function SidebarS() {
  return (
    <div className="sidebar">
      <ul>
        <li><FaBell /> Notifications</li>
        <li><FaEnvelope /> Messages</li>
        <li><FaUsers /> Groups</li>
        <li><FaFile /> Pages</li>
        <li><FaCalendar /> Events</li>
        <li><Link to="/profile"><FaUser/>Profile</Link></li>
        <li><FaEllipsisH /> See More</li>
      </ul>
    </div>
  );
};

export default SidebarS;