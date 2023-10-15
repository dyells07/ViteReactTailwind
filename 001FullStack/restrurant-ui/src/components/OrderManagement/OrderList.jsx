import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import { BaseUrl } from '../../../utils/ApiRoutes';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

export default function OrderList() {
    const navigate = useNavigate();

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`${BaseUrl}Order/GetOrderMasters`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    toastr.error('Failed to fetch orders from the server');
                    throw new Error('Failed to fetch');
                }
            })
            .then(data => {
                setOrders(data);
            })
            .catch(error => {
                toastr.error('Error:', error);
            });
    }, []);

    const handleDeleteClick = async (orderMasterId) => {
        // Implement your delete logic here
    };

    const handleEditClick = (orderMasterId) => {
        navigate(`/editOrder/${orderMasterId}`);
    };

    return (
        <div className="flex justify-center items-center h-screen">
        <div className="p-4">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-semibold mb-4">Orders List</h1>
                <Link
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                    to="/addOrder"
                >
                    <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add New Order
                </Link>
            </div>
            <div className="overflow-x-auto mx-auto">
                <div className="overflow-y-auto max-h-96">
                    <table className="w-1/2 min-w-max divide-y divide-gray-200">
                        <thead className="sticky top-0 bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Order Number</th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Payment Method</th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Edit</th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Delete</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {orders.map((order) => (
                                <tr key={order.orderMasterId}>
                                    <td className="px-6 py-4 whitespace-no-wrap">{order.orderNumber}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap">{order.customer.customerName}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap">{order.pMethod}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                        <FontAwesomeIcon
                                            icon={faEdit}
                                            className="text-blue-500 hover:text-blue-700 cursor-pointer"
                                            onClick={() => handleEditClick(order.orderMasterId)}
                                        />
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                        <FontAwesomeIcon
                                            icon={faTrash}
                                            className="text-red-500 hover:text-red-700 cursor-pointer"
                                            onClick={() => handleDeleteClick(order.orderMasterId)}
                                        />
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
