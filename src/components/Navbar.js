import React from "react";

function NavbarN() {
  return (
    <div className="navbar">
       <img src="/logoo.jpg" alt="CarsinoDisc Logo" className="logo" />
      <h2>Crcino-Disc</h2>
      <nav>
        <a href="#">Home</a>
        <a href="#">Community</a>
        <a href="#">Network</a>
        <a href="#">Video</a>
      </nav>
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default NavbarN;