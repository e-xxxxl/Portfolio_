import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://portfolio-backend-3-fttv.onrender.com/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Message sent successfully!',
          text: 'Your message has been sent. I will get back to you soon!',
        });
        setIsSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to send the message. Please try again.',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred. Please try again later..',
      });
    }
  };

  return (
    <div className="container mt-5">
      <h2 class="pb-2 border-bottom ">Let’s Collaborate</h2>
      <p>I’m excited to learn more about your project and explore how I can assist you.</p>
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Please enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Please enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            placeholder="Please enter your subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            placeholder="How can I help?"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn  w-100">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
