import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { BaseUrl } from '../../../utils/ApiRoutes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSave, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function EditCustomer() {
    const [email, setEmail] = useState(''); 
    // const [dob, setDob] = useState('');
    const [dob, setDob] = useState(new Date());
    const customerId = parseInt(useParams().customerId, 10);
    const navigate = useNavigate(); 
  const [customerData, setCustomerData] = useState({});
  const [name, setName] = useState('');

  useEffect(() => {
    async function fetchCustomerDetails() {
        try {
            const response = await fetch(`${BaseUrl}Customer/GetCustomer/${customerId}`);
            if (response.ok) {
                const data = await response.json();
                setCustomerData(data);
                setName(data.customerName);
                setEmail(data.email);

                if (data.birthDate) {
                    setDob(new Date(data.birthDate));
                } else {
                    setDob(new Date()); 
                }
            } else {
                console.error('Error fetching customer details');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    fetchCustomerDetails();
}, [customerId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const data = {
            customerId: customerId,
            customerName: name,
            email: email,
            birthDate: dob.toISOString(),
        };

        const response = await fetch(`${BaseUrl}Customer/PutCustomer/${customerId}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log('Customer updated successfully');
            navigate(-1);
        } else {
            console.error('Error updating customer');
        }
    } catch (error) {
        console.error('Error updating customer:', error);
    }
}

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
        <input
  type="text"
  name="email"
  id="email"
  placeholder="Email"
  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
        <div className="flex flex-col mt-2">
    <label htmlFor="dob">Date of Birth</label>
    <div className="relative">
    <DatePicker
                        selected={dob}
                        onChange={(date) => setDob(date)}
                        dateFormat="MM/dd/yyyy"
                        placeholderText="MM/DD/YYYY"
                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                        isClearable
                    />
   <div className="absolute top-0 right-0 px-3 py-2 pointer-events-none">
    <FontAwesomeIcon icon={faCalendarAlt} size="3x" color="gray" />
      </div>
        </div>
          </div>
        <div className="flex justify-between mt-3">
        <Link
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                        to="/"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back to list
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