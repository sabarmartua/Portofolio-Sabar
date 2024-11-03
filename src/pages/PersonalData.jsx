// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../css/style.css';

const PersonalData = () => {
  return (
  
    <main className="container">
        <div className="sidebar">
            <ol>
                <li><a href="#location">Personal Data</a></li>
                <li><a href="#date-and-time">Studies Data</a></li>
                <li><a href="#payment">Hobby</a></li>
            </ol>
        </div>

        <div className="main-content">
            <section id="location">
                <h1>Personal Data</h1>
                <p>Welcome to my personal data section. Here you will find all the essential information about me.</p>
                <div className="form-section">
                  <h2>Details</h2>
                  <table>
                      <tr>
                          <th>Attribute</th>
                          <th>Details</th>
                      </tr>
                      <tr>
                          <td>Name</td>
                          <td>Sabar Martua Tamba</td>
                      </tr>
                      <tr>
                          <td>Place/Date of Birth</td>
                          <td>Mandala/September 30, 2004</td>
                      </tr>
                      <tr>
                          <td>Address</td>
                          <td>Pandumaan, Kec. Pollung, Kab. Humbang Hasundutan, North Sumatra</td>
                      </tr>
                      <tr>
                          <td>Social Media</td>
                          <td>
                            <li>Email : sabarmartuatamba@gmail.com</li>
                            <li>LinkedIn : Sabar Martua Tamba</li>
                            <li>Instagram : @sabarmarttuaa</li>
                          </td>
                      </tr>
                  </table>
              </div>
            </section>
            <section id="date-and-time">
                <h1>Studies Data</h1>
                <p>In this section, you can find detailed information about my academic background and studies.</p>
                <div className="form-section">
                  <h2>Details</h2>
                  <table>
                      <tr>
                          <th>Attribute</th>
                          <th>Details</th>
                      </tr>
                      <tr>
                          <td>College</td>
                          <td>Del Institute of Technology</td>
                      </tr>
                      <tr>
                          <td>Senior High School</td>
                          <td>SMA Negeri 1 Pollung</td>
                      </tr>
                      <tr>
                          <td>Junior High School</td>
                          <td>SMP Negeri 2 Pollung</td>
                      </tr>
                      <tr>
                          <td>Elementary School</td>
                          <td>SD Negeri 176349 Pollung</td>
                      </tr>
                  </table>
              </div>
                <h3>Additional Information</h3>
                <ul>
                    <li>College : <strong>DIII Information of Technology</strong><br />
                    2022 - Now
                    <br /><strong>Organisational Experience :</strong>
                    </li>
                    <ul>
                        <li>Committee of the Program Cinta Almamater - First Aid Coordinator</li>
                        <li>Information Technology Student Association - Member</li>
                        <li>Student Leadership Program - Abang Asuh</li>
                    </ul>
                    <strong>IPK : 3.53</strong>
                    <br /><br />
                    <li>SHS : <strong>Mathematics and Natural Sciences</strong><br />
                      2019 - 2022
                      </li>
                </ul>
            </section>
            <section id="payment">
                <h1>Hobby</h1>
                <p>This section highlights my hobbies and interests outside of academics and professional life.</p>
                <ul>
                    <li>Reading books</li>
                    <li>Playing Mobile Games</li>
                    <li>Master Of Ceremony</li>
                    <li>Design Interface</li>
                </ul>
            </section>
        </div>
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

export default PersonalData;