function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-card">
        <img
          src="https://via.placeholder.com/300"
          alt="Portfolio Website"
          loading="lazy"
        />
        <h3>Portfolio Website</h3>
        <p>
          A personal portfolio website built using React to showcase projects,
          skills, and resume.
        </p>
      </div>

      <div className="project-card">
        <img
          src="https://via.placeholder.com/300"
          alt="Shopping Cart"
          loading="lazy"
        />
        <h3>Shopping Cart Application</h3>
        <p>
          Built using React Context and useReducer for global state management.
        </p>
      </div>

      <div className="project-card">
        <img
          src="https://via.placeholder.com/300"
          alt="Weather App"
          loading="lazy"
        />
        <h3>Weather Dashboard</h3>
        <p>
          Weather application using API integration and React hooks.
        </p>
      </div>
    </section>
  );
}

export default Projects;
