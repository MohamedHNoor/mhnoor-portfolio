import SectionTitle from './SectionTitle';

const Skills = () => {
  return (
    <section className='section bg-grey'>
      <SectionTitle text='Skills' />

      <div className='section-center service-center'>
        {/* frontend */}
        <div class='section-center services-center'>
          <article class='service'>
            <i class='fas fa-code service-icon'></i>
            <h4>Front-End</h4>
            <div class='underline'></div>
            <div className='skill'>
              <ul className='skill-lists'>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Next.js</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
          </article>
          <article class='service'>
            <i class='fas fa-server service-icon'></i>
            <h4>Back-End</h4>
            <div class='underline'></div>
            <div className='skill'>
              <ul className='skill-lists'>
                <li>Ruby</li>
                <li>Ruby on Rails</li>
                <li>Node JS</li>
                <li>Express</li>
                <li>SQL</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </article>
          <article class='service'>
            <i class='fas fa-screwdriver-wrench service-icon'></i>
            <h4>Tools & Methods</h4>
            <div class='underline'></div>
            <div className='skill'>
              <ul className='skill-lists'>
                <li>Git</li>
                <li>Github</li>
                <li>Jest</li>
                <li>RSpec</li>
                <li>TDD</li>
                <li>Mobile-first approach</li>
                <li>Chrome Dev Tools</li>
                <li>Postman</li>
              </ul>
            </div>
          </article>
          <article class='service'>
            <i class='fas fa-user-tie service-icon'></i>
            <h4>Professional</h4>
            <div class='underline'></div>
            <div className='skill'>
              <ul className='skill-lists'>
                <li>Remote Pair Programming</li>
                <li>Teamwork</li>
                <li>Mentoring</li>
                <li>Communication Skills</li>
                <li>Code Review</li>
                <li>Attention to Details</li>
                <li>Problem solving Skills</li>
              </ul>
            </div>
          </article>
        </div>
        {/* backend */}
      </div>
    </section>
  );
};

export default Skills;
