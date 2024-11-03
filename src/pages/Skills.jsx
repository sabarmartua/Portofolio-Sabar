// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../css/app.css';

const Skills = () => {
  return (
    <main>
      <section className="content">
        <div className="content-description">
          <h1 className="title">Basic Skills</h1>
          <div className="card-container">
            <div className="card">
              <i className="fas fa-code card-icon"></i>
              <h2>Web Developer</h2>
              <p>
                Experience in website development using HTML, CSS, JavaScript, as well as modern frameworks such as Laravel, PHP, and Golang using Gin, while implementing microservice architecture and REST APIs, alongside utilizing C#.
              </p>
            </div>
            <div className="card">
              <i className="fas fa-database card-icon"></i>
              <h2>Database Management</h2>
              <p>
                Skilled in managing database projects including design, implementation, and maintenance using MySQL, SQL Server, and MongoDB, as well as MS Access.
              </p>
            </div>
            <div className="card">
              <i className="fas fa-project-diagram card-icon"></i>
              <h2>Project Manager</h2>
              <p>
                Experienced as a project manager twice in the development of the Lagos Hotel Booking Website and Yosephine Pratama Klinik Health Services Website projects, including planning, implementation, and monitoring of software development projects.
              </p>
            </div>
          </div>
          <div className="card-container">
            <div className="card">
              <i className="fas fa-chart-line card-icon"></i>
              <h2>Data Analysis</h2>
              <p>
                Skilled in analyzing data using statistical techniques and tools such as Excel and R to gain insights and make data-driven decisions.
              </p>
            </div>
            <div className="card">
              <i className="fas fa-cogs card-icon"></i>
              <h2>Systems Analyst</h2>
              <p>
                Experienced in analyzing, designing, and implementing information systems to meet organizational requirements and improve efficiency.
              </p>
            </div>
            <div className="card">
              <i className="fas fa-mobile-alt card-icon"></i>
              <h2>Mobile Development</h2>
              <p>
                Familiar with mobile application development using technologies such as Flutter and Laravel (WebServices).
              </p>
            </div>
          </div>
        </div>
      </section>
      <aside>
        <div className="social-media">
          <ul>
            <li>
              <a href="https://youtube.com/@sabarmartuatamba1660?si=dnfs3C2sGsAuuV3o"><i className="fab fa-youtube"></i></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sabar-martua-tamba-896a3925a/"><i className="fab fa-linkedin-in"></i></a>
            </li>
            <li>
              <a href="https://www.instagram.com/sabarmarttuaa?igsh=MWljdTFhdHQ3cjRu"><i className="fab fa-instagram"></i></a>
            </li>
            <li>
              <a href="https://github.com/sabarmartua"><i className="fab fa-github"></i></a>
            </li>
          </ul>
        </div>
      </aside>
    </main>
  );
};

export default Skills;
