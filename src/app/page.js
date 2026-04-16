// import { Carousel } from "../../components/AnimatedButtons";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <>

    <div className="w-full flex justify-center py-4">
      {/* <Carousel /> */}
    </div>

    <div className="min-h-screen flex flex-col">

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Official Islam 4 Everyone</h1>
            <p className="text-lg text-gray-700 mb-8">Your trusted source for authentic Islamic knowledge and resources.</p>
            <a href="/about" className="bg-[#e6c17a] text-white px-6 py-3 rounded hover:bg-[#d1a15b] transition-colors">Learn More</a>
          </div>
        </section>

        {/* Additional sections can be added here */}
      </main>

    </div>
    </>
  );
}

export default Home;
