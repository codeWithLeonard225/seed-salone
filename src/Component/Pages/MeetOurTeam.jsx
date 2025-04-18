// pages/MeetOurTeam.jsx
import React, { useState } from "react";
import { ExternalLinkIcon } from "lucide-react"; // You need lucide-react installed

const teamMembers = [
  {
    name: "MOHAMED SALIA",
    role: "FOUNDER AND EXECUTIVE DIRECTOR",
    image: "/kk.jpg",
    bio: `Mohamed Salia is the visionary founder and director of Supporting Entrepreneurship and Economic Development (SEED) Sierra Leone. With a passion for social impact and inclusive growth, Mohamed leads the organization’s strategic management, program coordination, donor relations, reporting, and cross-sector collaboration. His leadership has been instrumental in empowering local entrepreneurs and strengthening community-driven development initiatives across Sierra Leone.

A distinguished Social Entrepreneur and Development Specialist, Mohamed brings a wealth of knowledge and experience to his role. He holds a BSc in Peace and Conflict Studies from Fourah Bay College, University of Sierra Leone. His international education includes a diploma in Entrepreneurship and Organizational Development from The DO School in Germany and a certificate in Social Entrepreneurship from Kanthari in India.

Mohamed’s professional background includes specialized training in strategic project planning and management, budgeting and finance, communications, and microenterprise/microfinance development. His multifaceted expertise enables SEED to create sustainable economic opportunities for underserved communities.

In recognition of his outstanding contributions to social change, Mohamed has received several prestigious awards, including the DO School Award for Courageous Entrepreneurship, African Entrepreneur of the Year, and the South Got Talent Development Personality of the Year.

Through SEED Sierra Leone, Mohamed remains committed to building a more equitable and economically empowered future for all Sierra Leoneans.

Fellowships:
- Trinity Church Wall Street Leadership Programme: https://trinitywallstreet.org/stories-news/announcing-2023-trinity-leadership-fellows-cohort
- Startingbloc: https://startingbloc.org/wp-content/uploads/2019/12/StartingBloc-Transparency-Report-2015.pdf
- Global Community Impact Leader: https://thoughtpartnerships.org/community-leaders`,
  },
  {
    name: "MARTIN KAILIE",
    role: "PROGRAM DEVELOPMENT CONSULTANT",
    image: "/MARTIN KAILIE.jpg",
    bio: `Martin Kailie serves as the Program Development Consultant for the Supporting Entrepreneurship and Economic Development (SEED) initiative, where he leads Monitoring and Evaluation (M&E) activities. His role involves collecting and analyzing data to assess the effectiveness of pilot projects, evaluate impact and change, and guide overall project and program design. With over a decade of experience as a freelancer and consultant, Martin has supported numerous NGOs and entrepreneurs across Africa, offering technical guidance and strategic insight.

He began his professional journey as a university lecturer, holding an MPhil in Linguistics from the University of Sierra Leone, where he taught for ten years. However, his path shifted after witnessing firsthand the devastating effects of droughts and floods while documenting endangered languages in rural Sierra Leone. This experience inspired him to redirect his efforts toward sustainable agriculture and rural development.

Passionate about driving impact in his homeland, Martin now works to support development organizations and empower smallholder farmers. His vision is to combat climate change through sustainable agricultural practices, aiming to uplift vulnerable communities and promote long-term resilience.

LinkedIn: https://www.linkedin.com/in/martin-kailie-0b7a4056/?originalSubdomain=sl`,
  },
  {
    name: "JOHN SILLAH",
    role: "HEAD OF ADMINISTRATION",
    image: "/Admin.jpg",
    bio: `John Sillah serves as the Head of Administration at Supporting Entrepreneurship and Economic Development (SEED), where he oversees key administrative functions critical to the organization’s operations. His responsibilities include managing human resources, coordinating procurement processes, providing logistical support, preparing financial reports, processing project payments, and handling general administrative tasks.

John plays a central role in ensuring that internal systems run smoothly and efficiently to support SEED’s mission.

He holds a Bachelor of Education degree in Chemistry and a Master of Science in Environmental Management and Quality Control from Njala University, University of Sierra Leone. In addition to his academic credentials, John has received professional training in financial management, organizational development, and budget administration.

His comprehensive knowledge in these areas is backed by more than eight years of hands-on experience in human resource management.

John brings a strong background in non-profit administration, with particular expertise in data management and data protection. His combination of academic qualifications, professional training, and practical experience makes him a valuable asset to SEED, contributing to its effective governance and sustainable development goals.`,
  },
];

// Helper function to convert URLs into links
function renderBioWithLinks(bio) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = bio.split(urlRegex);

  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline break-words"
        >
          {part}
        </a>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

const MeetOurTeam = () => {
    const [selectedMember, setSelectedMember] = useState(null);
  
    return (
      <section id="meet-team" className="min-h-screen bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-700 mb-4">
            Meet Our Team
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            United by purpose. Driven by impact. These are the people working every day to build stronger communities.
          </p>
  
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-green-200"
                />
                <h3 className="text-xl font-semibold text-green-800">{member.name}</h3>
                <p className="text-sm text-green-600 font-medium mb-2">{member.role}</p>
                <button
                  onClick={() => setSelectedMember(member)}
                  className="mt-2 text-sm text-green-700 underline hover:text-green-900 transition-all"
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
  
          {/* Modal with fade animation */}
          {selectedMember && (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity animate-fadeIn">
              <div className="bg-white rounded-xl max-w-3xl w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-2xl font-bold"
                >
                  &times;
                </button>
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-green-200 mb-4"
                />
                <h2 className="text-xl font-bold text-green-800">{selectedMember.name}</h2>
                <p className="text-sm font-medium text-green-600 mb-2">{selectedMember.role}</p>
                <div className="text-gray-700 text-sm mt-4 whitespace-pre-line leading-relaxed">
                  {renderBioWithLinks(selectedMember.bio)}
                </div>
  
                {/* Optionally add social media links here */}
                {/* <div className="mt-4 flex justify-center space-x-4">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                  </a>
                </div> */}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  };

export default MeetOurTeam;
