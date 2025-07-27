import React from 'react';
import './Projects.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
          <LazyLoadImage
            src={img.src}
            alt={img.title}
            effect="blur"
            className="project-img"
          />
          <div className="project-title">{img.title}</div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery; 