import React from 'react';

export default function CallForCollection() {
  const vendors = [
    {
      id: 1,
      name: 'Bio Gas Company',
      phone: '+977 1234567890',
      email: 'vendor1@example.com',
      avatar: 'https://via.placeholder.com/150', // Placeholder URL for vendor avatar image
    },
    {
      id: 2,
      name: 'Green Hub',
      phone: '+977 9876543210',
      email: 'vendor2@example.com',
      avatar: 'https://via.placeholder.com/150', // Placeholder URL for vendor avatar image
    },
    // Add more vendors as needed
  ];

  const handleCallVendor = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`);
  };

  const handleEmailVendor = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-green-700 sm:text-4xl">
          Available Vendors
        </h2>

        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {vendors.map((vendor) => (
            <div key={vendor.id} className="bg-white overflow-hidden shadow-sm rounded-lg">
              <div className="p-6">
                <img src={vendor.avatar} alt={`${vendor.name}'s Avatar`} className="w-20 h-20 mb-4 mx-auto rounded-full" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">{vendor.name}</h3>
                <div className="flex items-center justify-center space-x-4">
                  <button
                    onClick={() => handleCallVendor(vendor.phone)}
                    className="text-green-600 hover:text-green-700"
                  >
                    Call
                  </button>
                  <button
                    onClick={() => handleEmailVendor(vendor.email)}
                    className="text-green-600 hover:text-green-700"
                  >
                    Email
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
