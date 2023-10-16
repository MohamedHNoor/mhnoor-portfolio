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
            Hi, my name is Mohamed Hassan Noor. I am an experienced Full Stack
            developer, committed to deliver a high-quality code and exceptional
            service to my clients. With two years of experience in web
            development, I am confident in my ability to provide you with the
            solutions you need to make your project a success.
          </p>
          <p>
            I am a graduate of Microverse, an online coding school where I
            completed Remote Full Stack Web Development Program, mastered
            algorithms, data structures, and full-stack development with Ruby,
            Rails, JavaScript, React, and Redux. I am Effective communicator and
            collaborator with a strong work ethic. Ready to contribute as a
            dedicated full-stack software developer.
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
