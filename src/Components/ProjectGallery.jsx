import React from 'react';
import './Projects.css';

const ProjectGallery = ({ images, isReact }) => {
  if (!Array.isArray(images)) {
    return <div className="project-gallery-empty">No projects to display.</div>;
  }
  return (
    <div className="project-gallery">
      {images.map((img, idx) => (
        <div
          className={`project-item${isReact ? ' react-project' : ''}`}
          key={idx}
          data-aos="fade-up"
          data-aos-delay={idx * 120}
        >
          <img src={img.src}  alt={img.title} loading="lazy" />
          <div className="project-title">{img.title}</div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery; 