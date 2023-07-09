import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-gray-200 py-8'>
      <div className='container px-4 sm:flex justify-between items-center'>
        <h1 className='px-2'>Agarwal Travels</h1>
        <ul className='flex flex-wrap'>
          <li className='p-0 px-2'>
            <Link to ="/">Home</Link>
          </li>
          <li className='p-0 px-2'>
            <Link to="destination">Destinations</Link>
          </li>
          <li className='p-0 px-2'>
            <Link to = "travel">Packages</Link>
          </li>
          <li className='p-0 px-2'>
            <Link to="book">My Bookings</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
