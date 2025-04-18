// pages/ContactUs.jsx
import React from "react";

const ContactUs = () => {
  return (
    <section id="contact-us" className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 text-center mb-6 pt-5">
          CONTACT US
        </h1>

        <div className="max-w-2xl mx-auto">
  <p className="text-left md:text-justify text-gray-700 text-lg sm:text-xl mb-12 leading-relaxed tracking-normal">
    We’d love to hear from you! Whether you have questions, want to support our work,
    or are interested in volunteering, our team is here to help. Don’t hesitate to
    reach out through any of the channels below:
  </p>
</div>



        <div className="space-y-10 text-gray-800 text-base sm:text-lg">
          {/* Address */}
          <div>
            <h2 className="text-xl font-semibold text-green-800 mb-2">📍 Address</h2>
            <p>
              Visit us or send mail to our main office—we’re always happy to connect
              in person, by email, or on WhatsApp.
            </p>
            <p className="mt-2 font-medium">
              8 Timbo New Site, Mattru Jong, Bonthe District,<br />
              Southern Sierra Leone, West Africa
            </p>
          </div>

          {/* Email */}
          <div>
            <h2 className="text-xl font-semibold text-green-800 mb-2">📧 Email</h2>
            <p>
              For general inquiries, volunteer opportunities, or partnership requests:
            </p>
            <p className="mt-2 font-medium">
              <a href="mailto:info@seedsierraleone.org" className="text-green-700 hover:underline">
                info@seedsierraleone.org
              </a> /{" "}
              <a href="mailto:seedsierraleone@yahoo.com" className="text-green-700 hover:underline">
                seedsierraleone@yahoo.com
              </a>
            </p>
          </div>

          {/* Phone */}
          <div>
            <h2 className="text-xl font-semibold text-green-800 mb-2">📞 Phone</h2>
            <p>Prefer to speak with someone? Our team is available during business hours:</p>
            <p className="mt-2 font-medium">
              <a href="tel:+232787720632" className="text-green-700 hover:underline">
                (+232) 787-720632
              </a>
            </p>
          </div>

          {/* Donations */}
          <div>
            <h2 className="text-xl font-semibold text-green-800 mb-2">💖 Donations</h2>
            <p>
              Your support changes lives. To donate or learn more about how your
              contribution makes a difference, please contact us at:
            </p>
            <p className="mt-2 font-medium">
              <a href="mailto:info@seedsierraleone.org" className="text-green-700 hover:underline">
                info@seedsierraleone.org
              </a> /{" "}
              <a href="mailto:seedsierraleone@yahoo.com" className="text-green-700 hover:underline">
                seedsierraleone@yahoo.com
              </a>
            </p>
            <p className="mt-2">
              Every gift, big or small, brings us closer to achieving our mission. Thank you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
