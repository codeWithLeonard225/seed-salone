import Nav2 from "../Nav2";
import mohamed from "/kk.jpg"; // adjust path if needed
import signature from "/sig.png"; // adjust path if needed

const FounderMessage = () => {
  return (
    <>
    <Nav2/>
    <div className="max-w-4xl mx-auto px-4 py-16 mt-20 text-gray-800 relative">
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700">
          Founder's Message
        </h1>

        <img
          src={mohamed}
          alt="Mohamed Salia"
          className="h-28 w-28 object-cover rounded-full shadow-lg border-2 border-green-600"
        />
      </div>

      <h2 className="text-xl font-semibold mb-2">
        Supporting Entrepreneurship & Economic Development (SEED)
      </h2>

      <p className="mb-4 text-lg">
        <strong>Dear Friends, Partners, and Supporters,</strong>
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        As I reflect on SEED’s journey since its founding in 2009, I am filled with gratitude and hope. What began as a vision to uplift underserved communities through entrepreneurship and economic empowerment has grown into a vibrant movement rooted in resilience, collaboration, and the belief that lasting change starts at the grassroots.
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        This past year has been one of growth, learning, and unwavering determination. Despite ongoing challenges—whether economic, environmental, or social—our commitment to empowering individuals and strengthening communities has never been stronger. From our base in Mattru Jong to our expanding presence across the country, we continue to see the power of local action in shaping a better future.
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        Over the past year, SEED has made meaningful strides. We expanded our work in mangrove conservation in Bonthe, provided microloans and business training to women entrepreneurs, and deepened our involvement in climate resilience and peace building initiatives. These achievements would not have been possible without the dedication of our team, the trust of our communities, and the invaluable support of our partners—locally and globally.
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        Looking ahead, we remain focused on creating inclusive opportunities, building local capacity, and aligning our efforts with both national priorities and global development goals. Our vision is clear: a more just, inclusive, and sustainable future where every person has the tools and opportunities to thrive.
      </p>

      <p className="mb-6 text-lg leading-relaxed">
        Thank you for standing with us on this journey. Together, we are planting the seeds of hope and transformation—community by community.
      </p>

      <div className="mt-6">
        <p className="font-semibold text-lg">With deep appreciation,</p>

        <img
          src={signature}
          alt="Mohamed Salia Signature"
          className="h-16 mt-2 mb-1"
        />

        <p className="text-lg italic">Mohamed Salia</p>
        <p className="text-lg">Founder & Executive Director, SEED</p>
      </div>
    </div>
    </>
  );
};

export default FounderMessage;
