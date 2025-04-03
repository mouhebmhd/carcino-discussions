import React from 'react'

import Story from './Story.js';
import NavbarN from '../components/Navbar.js';
import SidebarS from '../components/Sidebar.js';
import SuggestionsS from '../components/Suggestions.js';
import NewsN from '../components/News.js';

export default function Home() {
  return (
    <>

<div className="community-page">
      <NavbarN />
      <div className="main-container">
        <SidebarS />
        <div className="content">
          <Story />
        </div>
        <div className="right-sidebar">
          <SuggestionsS />
          <NewsN />
        </div>
      </div>
    </div>
    
    </>
  )
}
