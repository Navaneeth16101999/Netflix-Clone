import './NavBar.css'
import React, { useState } from 'react';

function NavBar() {
  const [showSideScreen, setShowSideScreen] = useState(false);
  const toggleSideScreen = () => {
    setShowSideScreen(!showSideScreen);
  };

  return (
    <div className='navbar'>
    <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
    <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="User Avatar" onClick={toggleSideScreen} />
      
      {/* Conditional rendering for the side screen */}
      {showSideScreen && (
        <div className='side-screen'>
          {/* Content of the side screen goes here */}
          <p>User Profile Options</p>
          <ul>
            <li>Profile</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
