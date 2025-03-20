import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import SectionC from './components/compent.js';
import NumberSection from './components/comp2.js';
import SidebarS from './components/Sidebar.js';
import NavbarN from './components/Navbar.js';
import SuggestionsS from './components/Suggestions.js';
import NewsN from './components/News.js';
import Community from './views/Community.js';
import SignupS from './views/Signup.js';
import ProfilePageP from './views/ProfilePage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   <Header></Header>
   <SectionC></SectionC>
   <NumberSection></NumberSection>
   
   <Community></Community>
   <SignupS></SignupS>
   <ProfilePageP></ProfilePageP>

   
   



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
