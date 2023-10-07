import React, { useState } from 'react';
import { BaseUrl } from '../../../utils/ApiRoutes';

export default function Contact() {
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${BaseUrl}api/Customer/PostCustomer`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ customerName: name }),
            });

            if (response.ok) {
                // Successfully created customer, you can handle the success case here
                console.log('Customer created successfully');
                // Optionally, you can reset the name field
                setName('');
            } else {
                // Handle errors, if any
                console.error('Error creating customer');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
            {/* ... (your existing content) ... */}
            <form className="p-6 flex flex-col justify-center" onSubmit={handleSubmit}>
                {/* Name */}
                <div className="flex flex-col mt-2">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
