import React from 'react';
import GetStarted from "./GetStarted";
import DestinationCard from "./DestinationCard";
import Navbar from "./Navbar";
import Delhi from "../assets/images/delhi.jpg"
import France from "../assets/images/france.jpg"
import Mumbai from "../assets/images/mumbai.jpg"
import Bali from "../assets/images/bali.jpg"
import NewYork from "../assets/images/newyork.jpg"
import Shimla from "../assets/images/shimla.jpg"

const Home = () => {
  return (
    <div className='dark:bg-gray-700'>
      <Navbar />
      <GetStarted
        title="Plan Your Dream Vacation"
        subtitle="Explore destinations, find flights, book hotels, and create your perfect itinerary."
        buttonText="Get Started"
      />
      <section className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-4">Discover Amazing Places</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DestinationCard
            image={Delhi}
            title="Delhi, India"
            description="Vibrant capital of India known for rich history and diverse culture."
          />
          <DestinationCard
            image={France}
            title="Paris, France"
            description="Discover the beauty and charm of the City of Love."
          />
          <DestinationCard
            image={Mumbai}
            title="Mumbai, India"
            description="Bustling metropolis on India's west coast, famous for Bollywood and finance."
          />
          <DestinationCard
            image={Bali}
            title="Bali, Indonesia"
            description="Relax on beautiful beaches and experience the rich culture."
          />
          <DestinationCard
            image={NewYork}
            title="New York City, USA"
            description="Explore the city that never sleeps and discover iconic landmarks."
          />
          <DestinationCard
            image={Shimla}
            title="Shimla, India"
            description="Idyllic hill station in the Himalayas, offering scenic beauty and tranquility."
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
