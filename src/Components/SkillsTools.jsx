import React, { useEffect } from 'react';
import { FaReact, FaFigma, FaHtml5, FaCss3Alt,  FaGitAlt, FaGithub, } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobexd, SiAdobeillustrator, SiVscodium, SiJavascript, SiBootstrap } from 'react-icons/si';
import './SkillsTools.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  { icon: <FaHtml5 />, label: 'HTML5' },
  { icon: <FaCss3Alt />, label: 'CSS3' },
  { icon: <SiJavascript />, label: 'JavaScript' },
  { icon: <FaReact />, label: 'React' },
  { icon: <SiBootstrap />, label: 'Bootstrap' },
];

const tools = [
  { icon: <FaFigma />, label: 'Figma' },
  { icon: <SiAdobephotoshop />, label: 'Photoshop' },
  { icon: <SiAdobexd />, label: 'Adobe XD' },
  { icon: <SiAdobeillustrator />, label: 'Adobe Illustrator' },
  { icon: <SiVscodium />, label: 'VS Code' },
  { icon: <FaGitAlt />, label: 'Git' },
  { icon: <FaGithub />, label: 'GitHub' },
];

const SkillsTools = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="skills-tools-section">
      <h2 className="skills-tools-title">Skills &amp; Tools</h2>
      <div className="skills-tools-content">
        <div className="skills-list">
          <h3>Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, idx) => (
              <div
                className="skill-item"
                key={idx}
                data-aos="flip-left"
                data-aos-delay={idx * 120}
              >
                <span className="skill-icon">{skill.icon}</span>
                <span>{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="tools-list">
          <h3>Tools</h3>
          <div className="tools-grid">
            {tools.map((tool, idx) => (
              <div
                className="tool-item"
                key={idx}
                data-aos="flip-left"
                data-aos-delay={idx * 120}
              >
                <span className="tool-icon">{tool.icon}</span>
                <span>{tool.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsTools; 