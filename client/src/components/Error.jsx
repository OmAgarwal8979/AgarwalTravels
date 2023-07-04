import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex items-center justify-center dark:bg-gray-800 min-h-screen">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200">404</h1>
        <h2 className="text-4xl font-semibold text-gray-800 mb-4 dark:text-gray-200">Page Not Found</h2>
        <Link to="/" className="text-indigo-500 hover:text-indigo-700 underline">Go back to the homepage</Link>
      </div>
    </div>
  );
};

export default Error;
