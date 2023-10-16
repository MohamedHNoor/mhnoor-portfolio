import heroImg from '../assets/images/hero-img.svg';

const Hero = () => {
  return (
    <header className='hero'>
      <div className='section-center hero-center'>
        <article className='hero-info'>
          <div className='underline'></div>
          <h1>i'm Mohamed</h1>
          <h4>web & mobile full stack developer</h4>
          <a href='contact.html' className='btn hero-btn'>
            hire me
          </a>
          {/* social icons */}
          <ul className='social-icons hero-icons'>
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
        </article>
        <article className='hero-img'>
          <img src={heroImg} className='hero-photo' alt='john doe' />
        </article>
      </div>
    </header>
  );
};

export default Hero;
