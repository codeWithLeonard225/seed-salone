// pages/PeaceAndSecurity.jsx
import React from "react";
import Nav2 from "../Nav2";

const PeaceAndSecurity = () => {
  return (
    <>
      <Nav2 />
      <section
        id="peace-and-security"
        className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 text-center mb-6 pt-10">
            PEACE AND HUMAN SECURITY
          </h1>

          <div className="text-left md:text-justify text-gray-700 text-base sm:text-lg md:text-xl space-y-6 leading-relaxed">
            <p>
              <strong>Promoting Peace and Combating Hate Speech in Sierra Leone</strong>
            </p>

            <p>
              Sierra Leone, having emerged from a brutal civil war two decades ago, continues to grapple with the lingering effects of conflict. A troubling trend is the rise of hateful rhetoric and dangerous political speech, especially during Presidential and Parliamentary elections. This growing issue poses a serious threat to the nation’s fragile peace.
            </p>

            <p>
              With financial and technical support from the{" "}
              <a
                href="https://www.npf.or.jp/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:underline font-medium"
              >
                Niwano Peace Foundation
              </a>
              , SEED is actively engaging local communities and government stakeholders to counter this challenge. Through anti-hate speech campaigns, reconciliation workshops, and community dialogues, SEED empowers citizens to understand the dangers of ethnic stereotyping and inciting speech.
            </p>

            <p>
              The initiative also supports communities in drafting and committing to peace and non-violence communiqués. By fostering inclusive spaces for dialogue, SEED helps communities recognize and mitigate the risks of ethnic-based violence, particularly during sensitive pre- and post-election periods, thus reinforcing national unity and long-term peace.
            </p>
          </div>

          <div className="mt-12 sm:mt-16 text-center px-2">
            <img
              src="/peace.jpg" // Replace with an image related to peace or a community dialogue
              alt="Community dialogue promoting peace in Sierra Leone"
              className="w-full max-w-3xl mx-auto rounded-xl shadow-md object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PeaceAndSecurity;
