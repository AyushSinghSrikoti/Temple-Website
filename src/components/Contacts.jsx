import React from 'react';
import Navbar from './navbar';
import Footer from './Footer';

function Contact() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
          <p className="text-gray-700 mb-8">
            We are here to assist you on your spiritual journey to Kedarnath Temple. Please feel free to reach out to us for any inquiries or assistance. Below are the contact details for your convenience:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="contact-method">
              <h2 className="text-xl font-semibold mb-2">Email</h2>
              <p className="text-gray-700">
                For general inquiries and information, please email us at{' '}
                <a href="mailto:info@kedarnathtemple.com" className="text-blue-500">
                  info@kedarnathtemple.com
                </a>
              </p>
            </div>

            <div className="contact-method">
              <h2 className="text-xl font-semibold mb-2">Phone</h2>
              <p className="text-gray-700">
                Call our helpline at{' '}
                <a href="tel:+91-XXXXXXXXXX" className="text-blue-500">
                  +91-XXXXXXXXXX
                </a>{' '}
                for immediate assistance and information.
              </p>
            </div>

            <div className="contact-method">
              <h2 className="text-xl font-semibold mb-2">Address</h2>
              <p className="text-gray-700">
                Visit us at our office located at:<br />
                Kedarnath Temple Trust<br />
                [Address Line 1]<br />
                [Address Line 2]<br />
                [City, State, Zip Code]
              </p>
            </div>
          </div>

          <p className="text-gray-700 mt-8">
            Our dedicated team is available to answer your queries and provide assistance. Whether you're planning your pilgrimage or have specific concerns, we are committed to ensuring a smooth and enriching experience for all devotees.
          </p>

          <p className="text-gray-700 mt-4">
            Connect with us through the provided channels, and let us be a part of your spiritual journey to the sacred Kedarnath Temple.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
