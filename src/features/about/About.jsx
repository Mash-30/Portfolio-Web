import React from 'react'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h1 className="about-title">Mashrur Shaheer</h1>
            <p className="about-description">
              Passionate frontend developer with expertise in React, JavaScript, and modern web technologies. 
              I create engaging user experiences and responsive web applications that combine beautiful design 
              with seamless functionality. Let's build something amazing together.
            </p>
            <button className="about-cta">Let's get started &gt;</button>
          </div>
          <div className="about-image">
            <div className="profile-circle">
              <img src="/dp.jpg" alt="Profile" className="profile-img" />
            </div>
          </div>
        </div>
        
        <div className="worked-with">
          <h3 className="worked-title">Worked with</h3>
          <div className="carousel-container">
            <div className="carousel-track">
              <div className="logo-box">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" alt="Laravel" className="brand-logo" />
              </div>
              <div className="logo-box">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React" className="brand-logo" />
              </div>
              <div className="logo-box">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" alt="Vue.js" className="brand-logo" />
              </div>
              <div className="logo-box">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png" alt="NPM" className="brand-logo" />
              </div>
              <div className="logo-box">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1200px-MongoDB_Logo.svg.png" alt="MongoDB" className="brand-logo" />
              </div>
              <div className="logo-box">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt="PostgreSQL" className="brand-logo" />
              </div>
              <div className="logo-box">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png" alt="GraphQL" className="brand-logo" />
              </div>
              <div className="logo-box">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png" alt="Svelte" className="brand-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
