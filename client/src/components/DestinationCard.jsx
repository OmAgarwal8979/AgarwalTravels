import React from 'react';

const DestinationCard = ({ image, title, description }) => {
  return (
    <div className="bg-white dark:bg-blue-500 rounded-lg shadow">
      <img src={image} alt="Destination" className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-lg font-semibold dark:text-gray-100 text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-200">{description}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
