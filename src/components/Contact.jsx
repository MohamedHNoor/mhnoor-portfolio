import project1 from '../assets/images/project-2.jpeg';
import connectVideo from '../assets/videos/connect.mp4';

const Contact = () => {
  return (
    <section className='connect' id='contact'>
      <video
        controls
        autoPlay
        muted
        loop
        className='video-container'
        poster={project1}
      >
        <source src={connectVideo} type='video/mp4' />
        Sorry, your browser does not support embedded videos
      </video>
      <div className='video-banner'>
        <div className='section-title'>
          <h2>let's get in touch</h2>
          <div className='underline'></div>
        </div>

        <p className='video-text'>
          If you're seeking a dedicated Full Stack Developer who can deliver
          exceptional results, I would love to discuss how my skills and
          experience align with your project. Let's connect and explore the
          possibilities together.
        </p>
        <a href='mailto:mohmed.hassannoor114@gmail.com' className='btn'>
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default Contact;
