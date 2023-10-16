import React from 'react';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className='footer'>
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

      <p>
        &copy; <span id='date'>{date}</span> Mohamed Hassan Noor.all rights
        reserved
      </p>
    </footer>
  );
};

export default Footer;
