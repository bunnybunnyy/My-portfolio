import React, { useEffect, useState } from 'react';
import ProjectGallery from './ProjectGallery';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projectData = {
  uiux: [
    { src: 'ring.png', title: 'Ring mobile App' },
    { src: 'untitled-1.png', title: 'Suzuki Ui Concept' },
    { src: 'hydration.png', title: 'Hydration Ui Concept' },
    { src: 'emirates app mockup (1).jpg', title: 'Emirates Mobile Ui' },
    { src: 'Group 1.png', title: 'Airpod Max Ui Concept' },
    { src: 'mockup.png', title: 'Game MarketPlace' },
    { src: 'weather.png', title: 'Weather App Ui' },
    { src: 'Cover.png', title: 'Reading Book App' },
  ],
  graphic: [
    { src: 'burger (1).png', title: 'Velves Brand Logo' },
    { src: 'burger (2).png', title: 'RDX post' },
    { src: 'burger (3).png', title:'Packaging Design' },
    { src: 'burger (4).png', title: 'Shoes Post' },
    { src: 'burger (1).jpg', title: 'Fast-Food Post' },
    { src: 'burger (2).jpg', title: 'Serum Packaging' },
    { src: 'size.png', title: 'Women Clothing Tape Packageing' },
    { src: 'AMAZON 7 LISTING-01.png', title: 'Amazon Listing' },
  ],
  react: [  
    { src: 'Capture.png', title: 'Real-Time Coode Editor' },
    { src: 'gym.png', title: 'Gym WebSite' },
    { src: 'repair.png', title: 'Washing Machine Reapir' },
    { src: 'spa.png', title: 'Spa-Saloon' },
  ],
};

const tabList = [
  { key: 'uiux', label: 'UI/UX' },
  { key: 'graphic', label: 'Graphic Designing' },
  { key: 'react', label: 'React' },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('uiux');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="projects-section" id='project'>
      <h2>Projects</h2>
      <div className="projects-tabs">
        {tabList.map(tab => (
          <button
            key={tab.key}
            className={activeTab === tab.key ? 'active' : ''}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <ProjectGallery images={projectData[activeTab]} isReact={activeTab === 'react'} />
    </section>
  );
};

export default Projects; 