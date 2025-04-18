// pages/Environment.jsx
import React from "react";
import Nav from "../Nav";

const Environment = () => {
  return (
    <>
      <Nav />
      <section
        id="environment"
        className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-green-700 text-center mb-6 pt-10">
            ENVIRONMENT AND CLIMATE CHANGE
          </h1>

          <div className="text-left md:text-justify text-gray-700 text-base sm:text-lg md:text-xl space-y-6 leading-relaxed">
            <p>
              <strong>Restoring Roots:</strong> Community-Led Mangrove Conservation and Livelihoods in Sierra Leone
            </p>

            <p>
              Sierra Leone is home to approximately 105,300 hectares of mangrove forests in the Sherbro River Estuary—an ecosystem
              vital for biodiversity, coastal protection, and local livelihoods. However, increasing human activities and rapid
              population growth along the coast are accelerating the degradation of these crucial habitats.
            </p>

            <p>
              In response, the Supporting Entrepreneurship and Economic Development (SEED) organization, with support from the{" "}
              <a
                href="https://www.undp.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:underline font-medium"
              >
                UNDP - Global Environmental Facility (GEF)
              </a>
              , is working actively in Bonthe District to combat this loss. Through community-based initiatives, SEED is promoting
              sustainable mangrove management while enhancing alternative livelihoods for local residents.
            </p>

            <p>
              Efforts include training communities on the ecological and economic benefits of mangrove conservation, as well as
              introducing sustainable practices such as vegetable farming and oyster harvesting. These interventions not only aim
              to protect the mangroves but also empower communities to thrive economically without harming their natural environment.
            </p>

            <p>
              🎥 <strong>Watch the impact of our work:</strong>{" "}
              <a
                href="https://youtu.be/lMRFQ3QGx-A?si=4xg75KMbzQAKNk7Y"
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
              src="/environment.jpg" // Replace with an image of the mangrove conservation
              alt="Mangrove conservation in Sierra Leone"
              className="w-full max-w-3xl mx-auto rounded-xl shadow-md object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Environment;
