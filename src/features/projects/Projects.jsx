import React from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Social Media App",
      description: "Social networking platform with image sharing, real-time messaging, and user profiles",
      image: "/Media_X_Logo.html",
      technologies: ["React", "Firebase", "Cloudinary", "Socket.io"],
      liveUrl: "#",
      githubUrl: "https://github.com/Mash-30/Media-X"
    },
    {
      id: 2,
      title: "Real Estate App",
      description: "Property listing platform with advanced search, virtual tours, and agent management",
      image: "/estatery-logo.html",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Mapbox"],
      liveUrl: "#",
      githubUrl: "https://github.com/Mash-30/estatery"
    },
    {
      id: 3,
      title: "EdTech Platform",
      description: "Online learning management system with video streaming, quizzes, and progress tracking",
      image: "/My_Tutor_Logo.html",
      technologies: ["React", "Express", "PostgreSQL", "AWS"],
      liveUrl: "https://ed-tech-h2jt.vercel.app/",
      githubUrl: "https://github.com/Mash-30/Ed-tech"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern responsive portfolio with video backgrounds and interactive animations",
      image: "/portfolio-logo.html",
      technologies: ["React", "Vite", "CSS3", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "https://github.com/Mash-30/Portfolio-Web"
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">A showcase of my recent work and side projects</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                {project.image.includes('.html') ? (
                  <iframe
                    src={project.image}
                    title={project.title}
                    className="project-iframe"
                    allowFullScreen
                  />
                ) : (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="project-video"
                  >
                    <source src={project.image} type="video/mp4" />
                  </video>
                )}
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.liveUrl} 
                      className="project-link live-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Live Demo</span>
                    </a>
                    <a 
                      href={project.githubUrl} 
                      className="project-link github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
