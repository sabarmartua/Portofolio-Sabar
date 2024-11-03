// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/app.css'; 

const Dashboard = () => {
  return (
    <>
      <main>
        <div className="content">
          <div className="content-description">
            <br />
            <h1 className="title">Sabar Martua Tamba</h1>
            <h3>Welcome to my Dashboard!</h3>
            <p>
              Hello! My name is Sabar Martua Tamba, a passionate software developer, dreamer and adventure lover.
              <br />
              Come on explore together!
            </p>
            <Link to="/personaldata">
              <button>More Information...</button>
            </Link>
          </div>

          <div className="content-image">
            <img src="/img/Sabar MC 3.jpg" alt="Sabar Martua Tamba" />
          </div>
        </div>

        <aside>
          <div className="social-media">
            <ul>
              <li>
                <a href="https://youtube.com/@sabarmartuatamba1660?si=dnfs3C2sGsAuuV3o" aria-label="YouTube Sabar Martua Tamba">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sabar-martua-tamba-896a3925a/" aria-label="LinkedIn Sabar Martua Tamba">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/sabarmarttuaa?igsh=MWljdTFhdHQ3cjRu" aria-label="Instagram Sabar Martua Tamba">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/sabarmartua" aria-label="GitHub Sabar Martua Tamba">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </main>

      <section className="values-section">
        <div className="container">
          <div className="value-card">
            <i className="fas fa-praying-hands"></i>
            <h4>MarTuhan</h4>
            <p>Promoting the values of faith in every step of life.</p>
          </div>
          <div className="value-card">
            <i className="fas fa-heart"></i>
            <h4>MarRoha</h4>
            <p>Maintain good relationships with others and have a high level of care.</p>
          </div>
          <div className="value-card">
            <i className="fas fa-graduation-cap"></i>
            <h4>MarBisuk</h4>
            <p>Continue to learn and strive for academic excellence.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
