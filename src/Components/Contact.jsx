import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // WhatsApp redirect
    const phone = '923168428223'; // Your WhatsApp number without +
    const text = `Name: ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <section className="contact-section" id='contact'>
      <h2>Contact</h2>
      <div className="contact-info">
        <div>Email: <a href="mailto:hanifumar169@gmail.com">hanifumar169@gmail.com</a></div>
        <div>Phone: <a href="tel:+923168428223">+923168428223</a></div>
        <div>Location: Rawalpindi, Pakistan</div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact; 