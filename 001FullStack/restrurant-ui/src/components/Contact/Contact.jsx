import React, { useState } from 'react';
import { BaseUrl} from '../../../utils/ApiRoutes';
import { Link,useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    const [name, setName] = useState('');
    const navigate = useNavigate(); 
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${BaseUrl}Customer/PostCustomer`, {
                method: 'POST',
                headers: {
                'Content-type': 'application/json',
                },
                body: JSON.stringify({ customerName: name }),
            });

            if (response.ok) {
                console.log('Customer created successfully');
                navigate(-1); 
            } else {
                console.error('Error creating customer');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
            <form className="p-6 flex flex-col justify-center" onSubmit={handleSubmit}>
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
                <div className="flex justify-between mt-3">
                    <Link
                        to="/"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                        Back to list
                    </Link>
                    <button
                        type="submit"
                        className="md:w-32 bg-green-700 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition ease-in-out duration-300"
                    >
                        <FontAwesomeIcon icon={faSave} className="mr-2" />
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
