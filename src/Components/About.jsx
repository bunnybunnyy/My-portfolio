import React, { useEffect } from 'react';
import './About.css';
import { FaUser, FaLeaf, FaGlobe, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaLinkedin, FaGithub, FaInstagram, FaBehance } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const infoCards = [
  {
    icon: <FaUser />, title: 'Bio', desc: 'Hi, I Am A Software Engineer.Passionate Front-End Developer,Ui/Ux & Graphic Designer with 3 years Of Experience.'
  },
  { icon: <FaLeaf />, title: 'Hobbies', desc: 'Learning New Skills, photography, Prototyping & wireframing, and contributing to open-source projects.' },
  { icon: <FaGlobe />, title: 'Languages', desc: 'Fluent in Urdu. Intermediate proficiency in English.' },
  {
    icon: <FaEnvelope />, title: 'Contact', desc: (
      <>
        Email: <a href="hanifumar169@gmail.com">hanifumar169@gmail.com</a>
        Phone: <a href="tel:+923168428223">+923168428223</a>
        LinkedIn: <a href="https://www.linkedin.com/in/muhammad-umar-b62810255/" target="_blank" rel="noopener noreferrer">Muhammad Umar</a>
        Behance: <a href="https://www.behance.net/hunnybunnyy" target="_blank" rel="noopener noreferrer">Muhammad Umar</a>
      </>
    )
  },
  { icon: <FaMapMarkerAlt />, title: 'Location', desc: 'Based in Rawalpindi,punjab,Pakistan. Available for remote work worldwide & On-site For Islamabad.' },
  { icon: <FaGraduationCap />, title: 'Education Summary', desc: 'Bachelor of Software Engineering, Arid Agriculture University (2021-2025). Front-End Developer & UI/UX Designer(2022).' }
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once:true });
  }, []);

  return (
    <section className="aboutme-section" id="About" data-aos="fade-up">
      <h2 className="aboutme-title">About <span>Me</span></h2>
      <p className="aboutme-subtitle">Discover my journey, passions, and the story behind my work</p>
      <div className="aboutme-main">
        <div className="aboutme-img">
          <div className="aboutme-blob"></div>
          <img src="/me.png" alt="Profile" />
        </div>
        <div className="aboutme-info">
          <div className="aboutme-cards">
            {infoCards.map((card, idx) => (
              <div
                className="aboutme-card"
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 120}
              >
                <div className="aboutme-icon">{card.icon}</div>
                <div className="aboutme-card-content">
                  <div className="aboutme-card-title">{card.title}</div>
                  <div className="aboutme-card-desc">{card.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="aboutme-socials">
            <span>Follow me on:</span>
            <a href="https://www.linkedin.com/in/muhammad-umar-b62810255/" aria-label="LinkedIn" className="social-icon"><FaLinkedin /></a>
            <a href="https://github.com/bunnybunnyy" aria-label="GitHub" className="social-icon"><FaGithub /></a>
            <a href="https://www.behance.net/hunnybunnyy" aria-label="Twitter" className="social-icon"><FaBehance /></a>
            <a href="https://www.instagram.com/i_umar_0/" aria-label="Instagram" className="social-icon"><FaInstagram /></a>
          </div>
          <a href="MuhammadUmarResumee.pdf" download className="aboutme-cv-btn">Download CV</a>
        </div>
      </div>
    </section>
  );
};

export default About; 