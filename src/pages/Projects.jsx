// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../css/app.css';

const projectsData = [
  {
    title: "Lago Hotel's Booking Website",
    image: "img/lagohotel.jpg",
    description: "HTML, CSS, PHP (Laravel), MySQL & JavaScript",
    sourceCode: "https://github.com/rickyananada1/PA1-Kel8.git"
  },
  {
    title: "Yosephine Prtama Clinic Health Service Management Website using Laravel",
    image: "img/yosephineKlinik2.jpg",
    description: "HTML, CSS, PHP (Laravel), & JavaScript",
    sourceCode: "https://github.com/sabarmartua/Yosephine-Prtama-Clinic-Health-Service-Management-Website-using-Laravel.git"
  },
  {
    title: "Yosephine Prtama Clinic Health Service Management Website Implementing Microservices and Rest APIs",
    image: "img/yosephineKlinik2.jpg", // Make sure this is a different image if it represents a different project
    description: "HTML, CSS, PHP (Laravel), Go, Microservices, MySql, Rest APIs",
    sourceCode: "https://github.com/sabarmartua/Yosephine-Prtama-Clinic-Health-Service-Management-Website-Implementing-Microservices-and-Rest-APIs.git"
  },
  {
    title: "Interactive Learning Platform for Elementary School Children",
    image: "img/quisweb.jpg",
    description: "C#, MVC, SQL Server",
    sourceCode: "https://drive.google.com/drive/folders/16ib1Cd_hBERbFw6tUmRun8SItvwXqnRV?usp=sharing"
  },
  {
    title: "Data Management Application Using DOM and Web Storage for Book Management",
    image: "img/bookweb.jpg",
    description: "HTML, CSS, & JavaScript",
    sourceCode: "https://github.com/sabarmartua/Data-Management-Application-Using-DOM-and-Web-Storage-for-Book-Management.git"
  },
  {
    title: "Desktop-based Hotel Management Java Application",
    image: "img/JAVAHOTELAPP.jpg",
    description: "Java, OOP Concept, JavaFx (UI)",
    sourceCode: "https://github.com/sabarmartua/Desktop-based-Hotel-Management-Java-Application.git"
  },
];

const Projects = () => {
  return (
    <main>
      <section className="content">
        <div className="content-description">
          <h1 className="title">My Projects</h1>
          <div className="project-card-container">
            {projectsData.map((project, index) => (
              <div className="project-card" key={index}>
                <img src={project.image} alt={`Project ${index + 1}`} className="project-image" />
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a href={project.sourceCode} className="btn">Source Code</a>
              </div>
            ))}
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

export default Projects;
