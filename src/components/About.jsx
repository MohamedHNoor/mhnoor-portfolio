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
            I am seeking a position with a company that embodies the following
            values:
          </p>
          <p>
            - Innovative and Forward-thinking: I am drawn to environments that
            are at the forefront of technology, continuously adapting and
            evolving to set new industry standards.
          </p>
          <p>
            - Team Collaboration: I value being part of a team where knowledge
            sharing is encouraged, and each member actively contributes to
            collective goals, fostering mutual growth and understanding.
          </p>
          <p>
            - Opportunities for Growth: As a junior developer, I am eager to
            work on projects that not only challenge me but also allow for
            continuous learning and professional development.
          </p>
          <p>
            I am open to joining companies of all scales, although I have a
            particular interest in smaller organizations where I can make a
            significant impact. While my expertise lies in web development, I am
            open to exploring roles in various industries, always eager to
            assimilate new knowledge and perspectives.
          </p>
          <p>
            If your organization aligns with these values and you are looking
            for a dedicated Developer skilled in JavaScript, React, and Ruby on
            Rails, I would be thrilled to discuss potential opportunities with
            you.
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
