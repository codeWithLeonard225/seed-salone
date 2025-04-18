// pages/Entrepreneurship.jsx
import React from "react";
import Nav from "../Nav";

const Entrepreneurship = () => {
  return (
    <>
      <Nav />
      <section
        id="entrepreneurship"
        className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-green-700 text-center mb-6 pt-10">
            LIVELIHOOD & ENTREPRENEURSHIP
          </h1>

          <div className="text-left md:text-justify text-gray-700 text-base sm:text-lg md:text-xl space-y-6 leading-relaxed">
            <p>
              <strong>Unlocking Potential:</strong> Empowering Rural Women Through Microloans and Enterprise Support:
            </p>

            <p>
              Many women in rural areas possess strong entrepreneurial potential and creativity, yet they are often
              relegated to unpaid farm labor due to limited access to land and other essential resources.
            </p>

            <p>
              <strong>SEED</strong> is committed to empowering these women by offering small loans that allow them
              to tap into their skills, establish micro-enterprises, and create their own sources of employment. In doing so,
              they can generate income and contribute to the rural economy, advancing the Sustainable Development Goals.
            </p>

            <p>
              With support from{" "}
              <a
                href="https://social-business-stiftung.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:underline font-medium"
              >
                Social Business Stiftung
              </a>
              , this initiative has helped <strong>700 women</strong> secure loans, even without collateral.
              The project provides a comprehensive package, including low-interest loans and enterprise development training,
              aimed at helping women start or grow small businesses and achieve economic independence.
            </p>

            <p>
              🎥 <strong>Watch the impact of our loans:</strong>{" "}
              <a
                href="https://www.youtube.com/watch?v=7AOD0GRKABc&feature=share"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:underline font-medium"
              >
                View Video
              </a>
            </p>
          </div>

          <div className="mt-12 sm:mt-16 text-center px-2">
            <img
              src="/ent.jpg"
              alt="Small business women supported by SEED microloan scheme"
              className="w-full max-w-3xl mx-auto rounded-xl shadow-md object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Entrepreneurship;
