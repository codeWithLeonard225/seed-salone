// pages/VoicesOfImpact.jsx
import React from "react";

const VoicesOfImpact = () => {
  const resources = [
    {
      title: "Restoring Roots: Community-Led Mangrove Conservation and Livelihoods in Sierra Leone",
      url: "https://www.switsalone.com/39197_gef-small-grants-stories-creating-alternative-livelihood-support-to-scale-up-sustainable-mangrove-conservation-in-bonthe-district/",
    },
    {
      title: "The Story of Four Women – Impact of SEED Microloan Programme",
      url: "https://social-business-stiftung.org/die-geschichte-der-vier-frauen/",
    },
    {
      title: "German Biggest Newspaper – Hamburgur Abendblatt acknowledges SEED’s work",
      url: "https://www.abendblatt.de/hamburg/harburg/article107863133/Er-hilft-den-Aermsten-der-Armen-in-Afrika.html",
    },
    {
      title: "Unlocking Potential: Empowering Rural Women Through Microloans and Enterprise Support",
      url: "https://www.youtube.com/watch?v=7AOD0GRKABc&feature=share",
    },
    {
      title: "Promoting Peace and Combating Hate Speech in Sierra Leone",
      url: "https://www.youtube.com/watch?v=7aFUbDGUETo",
    },
  ];

  return (
    <section id="bold-visionary" className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 mb-4">
            Bold & Visionary
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium">
            "Voices of Impact: Sharing Our Work, Celebrating Community-Led Change"
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {resources.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-green-600 hover:bg-green-50 rounded-xl px-4 py-3 md:px-6 md:py-4 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <h3 className="text-base sm:text-lg font-semibold text-green-800 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-green-600 break-words">{item.url}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center px-2">
          <img
            src="/FB_IMG_1744446405795.jpg"
            alt="Small business women supported by SEED microloan scheme"
            className="w-full max-w-3xl mx-auto rounded-xl shadow-md object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default VoicesOfImpact;
