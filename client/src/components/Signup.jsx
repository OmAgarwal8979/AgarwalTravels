import React from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-slate-800 overflow-hidden">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md dark:bg-slate-600">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Name</label>
            <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none dark:bg-slate-500  focus:border-indigo-500" placeholder="Enter your name" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded dark:bg-slate-500 focus:outline-none focus:border-indigo-500" placeholder="Enter your email address" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Password</label>
            <input type="password" id="password" className="w-full px-3 py-2 border border-gray-300 rounded dark:bg-slate-500 focus:outline-none focus:border-indigo-500" placeholder="Enter your password" />
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-indigo-500 dark:bg-indigo-900 text-white font-semibold rounded hover:bg-indigo-600 transition duration-200">Sign Up</button>
        </form>
        <div className="text-sm text-gray-500 dark:text-gray-200 mt-4">
          Already have an account? <Link to="/login" className="text-indigo-500 dark:text-gray-200 hover:text-indigo-700 dark:hover:text-white">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
