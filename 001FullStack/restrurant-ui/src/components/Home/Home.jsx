import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate
import { BaseUrl } from '../../../utils/ApiRoutes';

export default function Home() {
    const navigate = useNavigate(); // Initialize useNavigate

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch(`${BaseUrl}Customer/GetCustomers`)
            .then(response => response.json())
            .then(data => {
                setCustomers(data);
            })
    }, []);

    const handleEditClick = (customerId) => {
        // Navigate to the edit customer page using the navigate function
        navigate(`/editcustomer/${customerId}`);
    };
    const handleDeleteClick =async (customerId) => {

        try {
            const response = await fetch(`${BaseUrl}Customer/DeleteCustomer/${customerId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log('Customer created successfully');
                window.location.reload();
            } else {
                console.error('Error creating customer');
            }
        } catch (error) {
            console.error('Error:', error);
        }
        
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-semibold mb-4">Customer List</h1>
                    <Link
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                        to="/Contact"
                    >
                        <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add Customer
                    </Link>
                </div>
                <div className="overflow-x-auto mx-auto">
                    <div className="overflow-y-auto max-h-96">
                        <table className="w-1/2 min-w-max divide-y divide-gray-200">
                            <thead className="sticky top-0 bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Customer Id</th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Edit</th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Delete</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {customers.map((customer) => (
                                    <tr key={customer.customerID}>
                                        <td className="px-6 py-4 whitespace-no-wrap">{customer.customerID}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap">{customer.customerName}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap">
                                            <FontAwesomeIcon
                                                icon={faEdit}
                                                className="text-blue-500 hover:text-blue-700 cursor-pointer"
                                                onClick={() => handleEditClick(customer.customerID)} // Call the function on click
                                            />
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap">
                                            <FontAwesomeIcon icon={faTrash} className="text-red-500 hover:text-red-700 cursor-pointer" onClick={() => handleDeleteClick(customer.customerID)}/>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
