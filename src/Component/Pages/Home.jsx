import Nav from "../Nav";

const Home = () => {
  return (
    <>
    <Nav/>
    <section 
      className="bg-top bg-cover bg-no-repeat min-h-screen flex items-center justify-center px-6"
      style={{
        backgroundImage: "url('/bgImg.jpg')", // Replace with your actual image
      }}
    >
      <div className="bg-black bg-opacity-60 p-10 md:p-16 rounded-lg text-center max-w-4xl text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to Seed Salone
        </h1>
        <p className="text-lg md:text-xl mb-6">
        "Small Acts, Big Impact"
        </p>
        <a
          href="#"
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-lg font-semibold transition"
        >
          Learn More
        </a>
      </div>
    </section>
    </>

    
  );
};

export default Home;
