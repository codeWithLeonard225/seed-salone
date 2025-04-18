// pages/Education.jsx
import React from "react";
import Nav2 from "../Nav2";

const Education = () => {
  return (
    <>
      <Nav2 />
      <section id="education" className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 text-center mb-6 pt-8 ">
            EDUCATION: Empowering Young Mothers
          </h1>

          <div className="text-left md:text-justify text-gray-700 text-base sm:text-lg md:text-xl space-y-6 leading-relaxed">
            <p>
              The <strong>Ebola</strong> and <strong>COVID-19</strong> outbreaks severely impacted Sierra Leone's
              socio-economic landscape, leading to school closures and widespread disruption of education.
              This situation contributed to a rise in teenage pregnancies, particularly among girls aged 15 to 18,
              many of whom became young mothers facing economic hardships in caring for their children or pursuing their goals.
            </p>

            <p>
              With support from the{" "}
              <a
                href="https://sl.usembassy.gov/embassy/freetown/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:underline font-medium"
              >
                U.S. Embassy’s Ambassador’s Fund
              </a>
              , <strong>SEED</strong> initiated skill development training for these girls, offering programs in
              soap making, tailoring, hairdressing, and more. As a result,{" "}
              <strong>100 girls</strong> gained financial independence, overcame stigma, and{" "}
              <strong>80% returned to secondary school after childbirth</strong>.
            </p>

            <p>
              SEED's education and empowerment programs are designed to create a new generation of young women who are not only
              capable of supporting their families but also making significant contributions to their communities.
            </p>

            <p>
              🎥 <strong>Watch how our programs are changing lives:</strong>{" "}
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
              src="/education.jpg"
              alt="Young mothers benefiting from SEED skills training"
              className="w-full max-w-3xl mx-auto rounded-xl shadow-md object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
