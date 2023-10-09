import React, { useState } from 'react';
import { BaseUrl } from '../../../utils/ApiRoutes';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSave,faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function AddCustomer() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState(''); 
    // const [dob, setDob] = useState('');
    const navigate = useNavigate();
    const [dob, setDob] = useState(new Date());
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const data = {
                customerName: name,
                email: email,
                birthDate: dob,    
            };
    
            const response = await fetch(`${BaseUrl}Customer/PostCustomer`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(data),
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
        required
    />
</div>
<div className="flex flex-col mt-2">
    <label htmlFor="email">Customer Email</label>
    <input
        type="text"
        name="email"
        id="email"
        placeholder="Email"
        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
    />
</div>
<div className="flex flex-col mt-2">
    <label htmlFor="dob">Date of Birth</label>
    <div className="relative">
        <DatePicker
            selected={dob}
            onChange={(date) => setDob(date)}
            dateFormat="mm/dd/yyyy"
            placeholderText="Date format mm/dd/yy"
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            required
        />
   <div className="absolute top-0 right-0 px-3 py-2 pointer-events-none">
    <FontAwesomeIcon icon={faCalendarAlt} size="3x" color="gray" />
</div>
    </div>
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
