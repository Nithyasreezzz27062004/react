
import React from "react";
import "./App.css";

function App() {
    return (
        <>
            <nav>
                <div className="logo">
                    <img src="/logo.jfif" alt="Logo" />
                    <span>NITHYASREE</span>
                </div>

                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skill</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <div className="home" id="home">
                <div className="blue"></div>

                <div className="photo">
                    <img src="/nithu.jpeg" alt="Nithyasree" />
                </div>

                <div className="content">
                    <h1>Hi, I'm NITHYASREE</h1>
                    <h2>FULLSTACK DEVELOPER</h2>

                    <div>
                        <button>Hire Me</button>
                        <button>Download CV</button>
                    </div>
                </div>
            </div>

            <div className="about" id="about">
                <h1>ABOUT ME</h1>
                <p>
                    I'm Nithyasree, an MCA graduate and a Full Stack Developer.
                    I enjoy creating simple and user-friendly websites.
                    I am interested in learning new technologies and improving
                    my skills in the IT field.
                </p>
            </div>

            <div className="skills" id="skills">
                <div className="skills-image">
                    <img src="/skill.jfif" alt="Skills" />
                </div>

                <div className="skills-content">
                    <h1>MY SKILLS</h1>

                    <div className="skill">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                        <h3>HTML</h3>
                    </div>

                    <div className="skill">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                        <h3>CSS</h3>
                    </div>

                    <div className="skill">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                        <h3>JavaScript</h3>
                    </div>
                </div>
            </div>

            <div className="project" id="project">
                <div className="project-content">
                    <h1>MY PROJECT</h1>

                    <h2>Portfolio Website</h2>
                    <p>I created this portfolio using HTML and CSS.</p>

                    <h2>Duplicate File Detection</h2>
                    <p>This project detects duplicate file activities.</p>
                </div>

                <div className="project-image">
                    <img src="/plp.jfif" alt="Project" />
                </div>
            </div>

            <div className="contact" id="contact">
                <div className="contact-image">
                    <img src="/contact.jpg" alt="Contact" />
                </div>

                <div className="contact-content">
                    <h1>CONTACT ME</h1>
                    <p>Email: nithyasree45678@gmail.com</p>
                    <p>Phone: 9159513521</p>
                    <p>Location: Madurai</p>
                </div>
            </div>

            <div className="thankyou">
                <img src="/ty.jfif" alt="Thank You" />
            </div>
        </>
    );
}

export default App;
