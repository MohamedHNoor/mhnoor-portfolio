import data from '../data';
import SectionTitle from './SectionTitle';
import SingleProject from './SingleProject';

const Projects = () => {
  return (
    <section className='section projects' id='projects'>
      <SectionTitle text='Projects' />

      <div>
        <div className='section-center projects-page-center'>
          {data.map((project) => {
            const { img, name, text, live, code, id } = project;
            return (
              <SingleProject
                img={img}
                name={name}
                text={text}
                live={live}
                code={code}
                key={id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
