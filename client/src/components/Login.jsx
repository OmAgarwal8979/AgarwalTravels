import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center dark:bg-slate-800 min-h-screen">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg dark:bg-slate-600 shadow-md">
        <h2 className="text-2xl font-semibold dark:text-gray-200 gray-800 mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 dark:bg-slate-500 rounded focus:outline-none focus:border-indigo-500" placeholder="Enter your email address" autoComplete="off"/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Password</label>
            <input type="password" id="password" className="w-full px-3 py-2 border border-gray-300 rounded dark:bg-slate-500 focus:outline-none focus:border-indigo-500" placeholder="Enter your password" autoComplete="off"/>
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-indigo-500 dark:bg-indigo-900 dark:text-gray-200 text-white font-semibold rounded hover:bg-indigo-600 transition duration-200">Sign In</button>
        </form>
        <div className="text-sm dark:text-gray-200 text-gray-500 mt-4">
          Don't have an account? <Link to="/signup" className="text-indigo-500 dark:text-gray-200 dark:hover:text-white hover:text-indigo-700">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
