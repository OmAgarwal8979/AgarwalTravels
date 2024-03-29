import React from 'react';

import Navbar from './Navbar';
import Hero from './Hero';
import Destinations from './Destinations';
import Search from './Search';
import Selections from './Selections';
import Carousel from './Carousel';
import Footer from './Footer';

const Home1 = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selections />
      <Carousel />
      <Footer />
    </div>
  );
};

export default Home1;