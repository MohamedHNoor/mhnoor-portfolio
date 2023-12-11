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
            Hi, my name is Mohamed Hassan Noor. I am a Full Stack Developer
            with a solid foundation in JavaScript, React, and Ruby on Rails, I
            am passionate about building intuitive and efficient web
            applications. I am always on the lookout for opportunities to expand
            my skills and take on innovative projects that push the boundaries
            of these technologies.
          </p>
          
          <p>
           If you need a skilled developer proficient in JavaScript, React, and Ruby on Rails who can positively impact your company's projects, look no further. Reach out to me through the following contact details.
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
