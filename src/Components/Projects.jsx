import React, { useEffect, useState } from 'react';
import ProjectGallery from './ProjectGallery';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projectData = {
  uiux: [
    { src: 'ring.webp', title: 'Ring mobile App' },
    { src: ' untitled-1.webp', title: 'Suzuki Ui Concept' },
    { src: ' hydration.webp', title: 'Hydration Ui Concept' },
    { src: ' emirates app mockup (1).webp', title: 'Emirates Mobile Ui' },
    { src: ' Group 1.webp', title: 'Airpod Max Ui Concept' },
    { src: ' mockup.webp', title: 'Game MarketPlace' },
    { src: ' weather.webp', title: 'Weather App Ui' },
    { src: ' cover.webp', title: 'Reading Book App' },
  ],
  graphic: [
    { src: ' burger (12).webp', title: 'Velves Brand Logo' },
    { src: ' burger (2).webp', title: 'RDX post' },
    { src: ' burger (3).webp', title:'Packaging Design' },
    { src: ' burger (4).webp', title: 'Shoes Post' },
    { src: ' burger (1).webp', title: 'Fast-Food Post' },
    { src: ' burger (21).webp', title: 'Serum Packaging' },
    { src: ' size.webp', title: 'Women Clothing Tape Packageing' },
    { src: ' AMAZON 7 LISTING-01.webp', title: 'Amazon Listing' },
  ],
  react: [  
    { src: ' capture.webp', title: 'Real-Time Coode Editor' },
    { src: ' gym.webp', title: 'Gym WebSite' },
    { src: ' repair.webp', title: 'Washing Machine Reapir' },
    { src: ' spa.webp', title: 'Spa-Saloon' },
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