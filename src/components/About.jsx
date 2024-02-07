import aboutImg from '../assets/images/about-img.svg';

const About = () => {
  return (
    <section className='section about' id='about'>
      <div className='section-center about-center'>
        <article className='about-img'>
          <img src={aboutImg} className='hero-photo' alt='about img' />
        </article>
        <article className='about-info'>
          <div className='section-title about-title'>
            <h2>About</h2>
            <div className='underline'></div>
          </div>
          <p>
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Next.js, Node.js, Express,
            Ruby on Rails, PostgreSQL, MongoDB, HTML5, CSS3, and Git. I am a
            quick learner and I am always looking to expand my knowledge and
            skill set. I am a team player and I am excited to work with others
            to create amazing applications.
          </p>

          <a href='#contact' className='btn'>
            contact me
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
