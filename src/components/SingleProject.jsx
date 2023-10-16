import React from 'react';

const SingleProject = ({ img, name, text, live, code }) => {
  return (
    <article className='single-project'>
      <div className='project-container'>
        <img src={img} />
        <a href={live} className='project-icon' target='_blank'>
          <i className='fas fa-home'></i>
        </a>
      </div>
      <div className='project-details'>
        <h4>{name}</h4>
        <p>{text}</p>
        <div className='project-footer'>
          <span>
            <i className='fab fa-github'></i>
          </span>
          <a href={code} target='_blank'>
            source code
          </a>
        </div>
      </div>
    </article>
  );
};

export default SingleProject;
