import React, { useState } from 'react';

const NewContact = () => {
  const [fertilizers, setFertilizers] = useState([]);
  const [newFertilizer, setNewFertilizer] = useState('');
  const [selectedFertilizer, setSelectedFertilizer] = useState('');
  const [submittedFertilizers, setSubmittedFertilizers] = useState([]);

  const handleInputChange = (event) => {
    setNewFertilizer(event.target.value);
  };

  const handleAddItem = () => {
    const updatedSubmittedFertilizers = [...submittedFertilizers, newFertilizer];
    setSubmittedFertilizers(updatedSubmittedFertilizers);
    setSelectedFertilizer(newFertilizer);
    setNewFertilizer('');
  };

  const handleDropdownChange = (event) => {
    setSelectedFertilizer(event.target.value);
    setNewFertilizer(event.target.value);
  };

  return (
    <div className="container mx-auto flex flex-col items-center p-6" style={{ height: '70vh' }}>
      <h1 className="text-3xl font-semibold text-green-700 mb-4">From Trash To Treasure</h1>
      <div className="flex items-center mb-4">
        <div className="flex flex-grow">
          <input
            type="text"
            value={newFertilizer}
            onChange={handleInputChange}
            placeholder="Trash To Treasure"
            className="border border-gray-300 p-2 rounded-l-lg"
          />
          <button
            type="button"
            className="flex items-center bg-white hover:bg-green-600 text-green-700 font-semibold p-2 rounded-r-lg gap-2"
            onClick={handleAddItem}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
        <button
          type="button"
          className="bg-green-700 hover:bg-green-600 text-white font-semibold p-2 rounded-lg ml-2"
        >
            Submit
        </button>
      </div>

      <div className="mb-4">
        <select
          value={selectedFertilizer}
          onChange={handleDropdownChange}
          className="border border-gray-300 p-2 rounded-lg"
        >
          <option value="" disabled>
            Lists of Solid Waste
          </option>
          {submittedFertilizers.map((fertilizer, index) => (
            <option key={index} value={fertilizer}>
              {fertilizer}
            </option>
          ))}
        </select>
      </div>
      <ul className="list-disc text-center">
        {fertilizers.map((fertilizer, index) => (
          <li key={index} className="mt-2">
            {fertilizer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewContact;
