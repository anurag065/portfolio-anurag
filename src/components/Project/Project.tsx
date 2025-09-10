import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function ExperiencePublications() {
  return (
    <Container id="experience-publications">
      {/* Experience Section */}
      <div className="section">
        <h2>Experience</h2>
        <div className="projects">
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23ce6b"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Briefcase</title>
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                <div className="project-links">
                  <span className="date">Present</span>
                </div>
              </header>
              <div className="body">
                <h3>Full-Stack Consultant</h3>
                <h4>Micata Inc. | Tokyo, Japan</h4>
                <p>
                  Working as a Full-Stack Consultant at a Tokyo-based startup, specializing in building scalable web applications and cloud solutions. Leading development initiatives while combining technical expertise with leadership and management experience to drive impactful solutions.
                </p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Full-Stack Development</li>
                  <li>Cloud Solutions</li>
                  <li>Team Leadership</li>
                  <li>Project Management</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23ce6b"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Briefcase</title>
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                <div className="project-links">
                  <span className="date">2023-2024</span>
                </div>
              </header>
              <div className="body">
                <h3>Software Development Intern</h3>
                <h4>Terabiz Solutions | Remote</h4>
                <p>
                  Developed and launched backend APIs for Flutter applications, implementing mobile OTP login, live alerts using WebSockets, and push notifications with Firebase. Set up AWS services (EC2, S3) for server and file storage, utilized GitHub Actions and Docker for CI/CD, improving system performance by 40%.
                </p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Node.js</li>
                  <li>AWS (S3, EC2)</li>
                  <li>MongoDB</li>
                  <li>Docker</li>
                  <li>Flutter</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23ce6b"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Briefcase</title>
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                <div className="project-links">
                  <span className="date">2023</span>
                </div>
              </header>
              <div className="body">
                <h3>Full-Stack Development Intern</h3>
                <h4>Ugoki Inc. | Remote</h4>
                <p>
                  Developed a comprehensive motion tracking web application using React & TypeScript, handling 100+ exercise videos. Implemented secure video upload & processing with AWS S3, Lambda, & MediaConvert, reducing load times by 40%. Designed CRUD operations supporting management of 50+ facilities.
                </p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>TypeScript</li>
                  <li>AWS Lambda</li>
                  <li>React.js</li>
                  <li>SQL</li>
                  <li>MediaConvert</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Publications Section */}
      <div className="section">
        <h2>Publications & Research</h2>
        <div className="projects">
          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23ce6b"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Book</title>
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
                <div className="project-links">
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={externalLink} alt="View publication" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>Scalable Biometric Authentication Systems for Educational Institutions</h3>
                <h4>Published in IEEE Conference Proceedings | 2024</h4>
                <p>
                  Research paper on implementing secure biometric authentication systems in educational environments. The study demonstrates a 95% accuracy rate in fingerprint recognition while maintaining data privacy and scalability for large student populations. Featured real-world implementation at IIT Jodhpur.
                </p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Biometric Systems</li>
                  <li>Data Security</li>
                  <li>Authentication</li>
                  <li>Privacy</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23ce6b"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Book</title>
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
                <div className="project-links">
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={externalLink} alt="View publication" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>Cloud-Native Application Performance Optimization</h3>
                <h4>Journal of Cloud Computing | Under Review</h4>
                <p>
                  Comprehensive analysis of performance optimization techniques for cloud-native applications. The research explores microservices architecture, containerization strategies, and auto-scaling mechanisms, demonstrating up to 60% improvement in application response times and 40% reduction in infrastructure costs.
                </p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Cloud Computing</li>
                  <li>Microservices</li>
                  <li>Performance Optimization</li>
                  <li>Docker</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="flipInX">
            <div className="project">
              <header>
                <svg
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23ce6b"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Book</title>
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
                <div className="project-links">
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={githubIcon} alt="View research" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>Machine Learning Applications in Educational Technology</h3>
                <h4>Research Project | IIT Jodhpur | 2024</h4>
                <p>
                  Ongoing research exploring the integration of machine learning algorithms in educational platforms to enhance personalized learning experiences. The study focuses on adaptive learning systems, student performance prediction, and automated content recommendation systems.
                </p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Machine Learning</li>
                  <li>Educational Technology</li>
                  <li>Data Analytics</li>
                  <li>Personalization</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </Container>
  );
}