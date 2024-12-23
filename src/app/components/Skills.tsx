import React from 'react';

const Skills = () => {
    return(
        <div id="skills" className="skills-container">
            <div className="skills-grid">
                <div data-aos="zoom-in-up" className="skills-left">
                    <h2 className="skills-heading">Technologies I Work With</h2>
                    <p className="skills-text">I have a soild foundation in web development specializing in HTML CSS and Javascript My experience extends to using framworks like React and Next.js to create dynamic and user-friendly applications I am also proficient in Tailwind CSS for efficient styling and design, with a person for learning  I stay updated to the latest technologies to enhance my skills set and contribute effectively to projects</p>
                </div>
                <div className="skills-right">
                    <div className="skills-icons">
                        <div className="skills-space">
                            <h2 data-aos="zoom-in-up">Typescript</h2>
                            <h2 data-aos="zoom-in-up">React.js</h2>
                            <h2 data-aos="zoom-in-up">Next.js</h2>
                        </div>
                        <div className="skills-space">
                            <h2 data-aos="zoom-in-up">Node.js</h2>
                            <h2 data-aos="zoom-in-up">CSS</h2>
                            <h2 data-aos="zoom-in-up">Tailwind CSS</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;