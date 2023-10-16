import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarFixed(window.pageYOffset > 80);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavBtnClick = () => {
    setIsSidebarVisible(true);
  };

  const handleCloseBtnClick = () => {
    setIsSidebarVisible(false);
  };

  return (
    <>
      <nav className={`${isNavbarFixed ? 'navbar-fixed' : ''} nav`} id='nav'>
        <div className='nav-center'>
          {/* nav header */}
          <div className='nav-header'>
            <img src='' className='nav-logo' alt='nav logo' />
            <button
              className='nav-btn'
              id='nav-btn'
              onClick={handleNavBtnClick}
            >
              <i className='fas fa-bars'></i>
            </button>
          </div>
          {/* links */}
          <ul className='nav-links'>
            <li>
              <a href='index.html'>home</a>
            </li>
            <li>
              <a href='#about'>about</a>
            </li>
            <li>
              <a href='#projects'>projects</a>
            </li>
            <li>
              <a href='#contact'>contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* sidebar */}

      <aside
        className={`sidebar ${isSidebarVisible ? 'show-sidebar' : ''}`}
        id='sidebar'
      >
        <div>
          <button
            className='close-btn'
            id='close-btn'
            onClick={handleCloseBtnClick}
          >
            <i className='fas fa-times'></i>
          </button>
          {/* NAVLINKS */}
          <ul className='sidebar-links'>
            <li>
              <a href='index.html'>home</a>
            </li>
            <li>
              <a href='#about'>about</a>
            </li>
            <li>
              <a href='#projects'>projects</a>
            </li>
            <li>
              <a href='#contact'>contact</a>
            </li>
          </ul>
          {/* SOCIAL ICONS */}
          <ul className='social-icons'>
            <li>
              <a
                href='https://github.com/MohamedHNoor'
                className='social-icon'
                target='_blank'
              >
                <i className='fab fa-github'></i>
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/mohamedhnoor/'
                className='social-icon'
                target='_blank'
              >
                <i className='fab fa-linkedin'></i>
              </a>
            </li>
            <li>
              <a
                href='https://www.twitter.com'
                className='social-icon'
                target='_blank'
              >
                <i className='fab fa-twitter'></i>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
