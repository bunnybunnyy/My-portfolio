import React, { useEffect } from 'react';
import '../Components/Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className='hero-section' data-aos="fade-up">
      <div className='hero-avatar'>
        <div className='blob'></div>
        <img src='/me2.png' alt='3D Avatar' className='avatar-img' />
      </div>
      <div className='hero-content'>
        <h2 className='hero-intro'>HI, I AM MUHAMMAD UMAR</h2>
        <div className='change'>
          <span className='change-content'></span>
        </div>
        <p className='hero-desc'>A GRAPHICS DESIGNER THAT SOLVES DESIGN RELATED PROBLEMS.</p>
      </div>
    </div>
  );
}

export default Hero;