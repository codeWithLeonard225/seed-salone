// pages/About.jsx
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section id="about" className="min-h-screen bg-gray-50 py-12 px-6">
            <div className="container mx-auto max-w-4xl text-left">
                {/* About Us Header */}
                <h1 className="text-4xl sm:text-5xl font-bold text-center text-green-700 mb-10">
                    About Us
                </h1>

                {/* Main Title */}
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8 leading-snug">
                    Empowering the Margins: SEED’s Community-Led Approach to Sustainable Development and Social Impact
                </h2>

                {/* Paragraphs */}
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                    <p>
                        The Supporting Entrepreneurship and Economic Development (SEED) was founded in 2009 by former war child Mohamed Salia as a non-profit organization dedicated to empowering vulnerable and underserved communities in remote and hard-to-reach areas.
                        Registered with the Ministry of Social Welfare (MSW/VOL/BO/23/038) and District Local Council (BonDC/CBO/RC//2014/029) as a Community-Based Organization (CBO), SEED aims to build resilience and empower these communities to address their daily development challenges.
                    </p>

                    <p>
                        Our mission is to foster capacity building and drive change through community action, participation, and social cohesion in a transparent and accountable manner. SEED works across key areas such as sustainable livelihoods, environmental protection, climate change, health, agriculture, and entrepreneurship.
                    </p>

                    <p>
                        We are proud to be a member of several networks, including the Bonthe District Development NGO Forum, Sierra Leone Non-States Actors Forum, and UNDP GEF-Small Grant Network.
                    </p>

                    <p>
                        Explore the links below to learn more about our impactful work in Sierra Leone.
                    </p>
                </div>

                {/* External Links */}
                <div className="mt-8 space-y-4">
                    <a
                        href="https://www.switsalone.com/39197_gef-small-grants-stories-creating-alternative-livelihood-support-to-scale-up-sustainable-mangrove-conservation-in-bonthe-district/"
                        className="text-green-700 hover:underline font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GEF Small Grants Stories: Creating Alternative Livelihood Support to Scale-Up Sustainable Mangrove Conservation in Bonthe District
                    </a>

                    <a
                        href="https://www.youtube.com/watch?v=7AOD0GRKABc"
                        className="text-green-700 hover:underline font-medium block"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Watch: GEF Small Grants Impact Video
                    </a>

                    <a
                        href="https://youtube.com/watch?v=QuDoMr_kC28&feature=share"
                        className="text-green-700 hover:underline font-medium block"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Watch: SEED’s Community Impact in Action
                    </a>

                    <a
                        href="https://youtube.com/watch?v=7AOD0GRKABc&feature=share"
                        className="text-green-700 hover:underline font-medium block"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Watch: GEF Small Grants Impact Video Again
                    </a>
                </div>

                {/* Images Section */}
                <div className="mt-16">
                    <h3 className="text-3xl font-semibold text-center text-gray-800 mb-8">
                        Our Work in Action
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Community Action", img: "/community.jpg", alt: "Community Action" },
                            { title: "Sustainable Agriculture", img: "/Agri.jpg", alt: "Sustainable Agriculture" },
                            { title: "Environmental Protection", img: "/Protection.jpg", alt: "Environmental Protection" },
                        ].map(({ title, img, alt }, index) => (
                            <div key={index} className="text-center">
                                <h4 className="text-lg font-medium text-gray-700 mb-2">{title}</h4>
                                <img
                                    src={img}
                                    alt={alt}
                                    loading="lazy"
                                    className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Image Section */}
                <div className="mt-16 text-center">
                    <img
                        src="/Microloan.jpg"
                        alt="Small business women supported by SEED microloan scheme"
                        className="mx-auto rounded-lg shadow-lg w-full max-w-3xl object-cover h-auto hover:scale-105 transition-transform duration-300"
                    />
                    <p className="mt-4 text-sm sm:text-base text-gray-600 italic">
                        Cross section of small business women supported by SEED microloan scheme
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
