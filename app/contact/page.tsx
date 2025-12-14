'use client';

import { useRef } from 'react';

const ContactPage = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value || '';
    const email = emailRef.current?.value || '';
    const message = messageRef.current?.value || '';

    const mailtoLink = `mailto:support@smartsleep.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-8 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-400">
          Contact SmartSleep
        </h1>
        <p className="text-lg md:text-xl text-green-400">
          Have questions or need support? We’re here to help you rest easy.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-400">
          Get in Touch
        </h2>
        <form
          className="max-w-3xl mx-auto space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              ref={nameRef}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-400 focus:border-green-400"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              ref={emailRef}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-400 focus:border-green-400"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              ref={messageRef}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-400 focus:border-green-400"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-md font-medium shadow-md cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-400">
          Contact Information
        </h2>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-12 text-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-600">support@smartsleep.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-600">+1 (800) 555-1234</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p className="text-gray-600">
              456 SmartSleep Ave, Wellness City, USA
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
