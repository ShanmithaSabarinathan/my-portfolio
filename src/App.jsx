
import './App.css'

function App() {
  const skills = ['C', 'Python', 'Java', 'React', 'GitHub', 'Electronics']

  const projects = [
    {
      title: 'ECE Engineering Toolkit',
      description:
        'A programming project created to support useful tasks for Electronics and Communication Engineering students.',
      tech: 'Python',
      link: 'https://github.com/ShanmithaSabarinathan/ECE--Engineering-Toolkit',
    },
    {
      title: 'Portfolio Website',
      description:
        'My personal website to showcase my skills, projects, education and learning journey.',
      tech: 'React · CSS',
      link: 'https://github.com',
    },
  ]

  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="logo" href="#home">Shanmitha.</a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <p className="eyebrow">ECE STUDENT · ASPIRING DEVELOPER</p>
          <h1>Hello, I'm <span>Shanmitha.</span></h1>
          <p className="hero-text">
            I’m an Electronics and Communication Engineering student
            passionate about programming, electronics and building useful projects.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">Explore My Projects ↗</a>
            <a className="button secondary" href="#contact">Contact Me</a>
          </div>
          <p className="hero-note">Curious mind. Continuous learning. Practical ideas.</p>
        </section>

        <section className="section" id="about">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>Learning by building.</h2>
          <p className="section-text">
            I am an ECE student exploring the connection between electronics
            and software. I enjoy learning programming, working on technical
            projects and improving my problem-solving skills step by step.
          </p>
        </section>

        <section className="section" id="skills">
          <p className="eyebrow">WHAT I WORK WITH</p>
          <h2>My Skills</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>{skill}</div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <p className="eyebrow">SOME THINGS I'VE BUILT</p>
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <p className="project-tech">{project.tech}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer">
                  View project ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <p className="eyebrow">MY JOURNEY</p>
          <h2>Education</h2>
          <div className="education-card">
            <h3>Electronics and Communication Engineering</h3>
            <p>Engineering student · Currently pursuing my degree</p>
            <p className="muted">
              I’m developing my knowledge in electronics, programming and technology.
            </p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Have an idea? Let's connect.</h2>
          <p>Feel free to explore my work and connect with me professionally.</p>
          <div className="hero-actions">
            <a className="button primary"
              href="https://github.com/ShanmithaSabarinathan"
              target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a className="button secondary"
              href="https://www.linkedin.com/"
              target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a className="logo" href="#home">Shanmitha.</a>
        <p>Designed and built with React · © {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App
