import React from 'react';

const GetStarted = ({ title, subtitle, buttonText }) => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4">{title}</h1>
        <p className="text-lg lg:text-xl xl:text-2xl mb-8">{subtitle}</p>
        <a
          href="/plan"
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default GetStarted;
