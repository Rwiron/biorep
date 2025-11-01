import { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You can add email service integration here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 md:py-24 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="scroll-animate-fade">
          <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Interested in collaboration or learning more about our research? We'd love to hear from you.
          </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="scroll-animate" delay={200}>
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4e74d0] focus:border-transparent outline-none transition-all"
                  placeholder="Wiron"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4e74d0] focus:border-transparent outline-none transition-all"
                  placeholder="wiron@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4e74d0] focus:border-transparent outline-none transition-all"
                  placeholder="Research Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4e74d0] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#4e74d0] text-white font-semibold rounded-full hover:bg-[#3d5fb8] transition-all shadow-lg shadow-[#4e74d0]/25 hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15950.058814040784!2d30.09871421472356!3d-1.9470947684327524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca774626f129f%3A0x6226e99fffd9a3ed!2sRemera%2C%20Kigali!5e0!3m2!1sen!2srw!4v1761997718045!5m2!1sen!2srw"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px', height: '100%' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BioRep Labs Location - Remera, Kigali"
            />
          </div>
          </div>
        </ScrollAnimation>

        {/* Contact Info Below */}
        <ScrollAnimation animation="scroll-animate" delay={400}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#4e74d0]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#4e74d0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Phone</h4>
            <a href="tel:+250788999842" className="text-gray-600 hover:text-[#4e74d0] transition-colors">
              +250 788 999 842
            </a>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#8eb348]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#8eb348]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Email</h4>
            <a href="mailto:mugenganaalex3@gmail.com" className="text-gray-600 hover:text-[#8eb348] transition-colors break-all">
              mugenganaalex3@gmail.com
            </a>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#4e74d0]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#4e74d0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Location</h4>
            <p className="text-gray-600">
              Kigali, Rwanda<br />East Africa
            </p>
          </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
