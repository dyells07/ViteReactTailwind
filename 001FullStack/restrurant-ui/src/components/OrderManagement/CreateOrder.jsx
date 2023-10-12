import React, { useState } from 'react';
import { BaseUrl } from '../../../utils/ApiRoutes';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const CreateOrderForm = () => {
    const [customerData, setCustomerData] = useState({
        customerId: 0,
        customerName: '',
        email: '',
        birthDate: ''
    });

    const [foodItemData, setFoodItemData] = useState({
        foodItemName: '',
        price: 0,
        quantity: 0
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            orderMasterId: 0,
            orderNumber: '', // Add order number logic if needed
            customerId: customerData.customerId,
            pMethod: '', // Add payment method logic if needed
            gTotal: 0, // Add total calculation logic if needed
            orderDetails: [
                {
                    orderDetailId: 0,
                    orderMasterId: 0,
                    foodItemId: 0,
                    foodItem: {
                        foodItemId: 0,
                        foodItemName: foodItemData.foodItemName,
                        price: foodItemData.price
                    },
                    foodItemPrice: foodItemData.price,
                    quantity: foodItemData.quantity
                }
            ],
            deletedOrderItemIds: ''
        };

        try {
            const response = await fetch(`${BaseUrl}Order/PostOrderMaster`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                toastr.success('Order created successfully');
                // Reset the form after successful submission if needed
                setCustomerData({
                    customerId: 0,
                    customerName: '',
                    email: '',
                    birthDate: ''
                });
                setFoodItemData({
                    foodItemName: '',
                    price: 0,
                    quantity: 0
                });
            } else {
                toastr.error('Failed to create order');
            }
        } catch (error) {
            console.error('Error:', error);
            toastr.error('Error creating order');
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 border rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Create Order</h2>
            <form onSubmit={handleSubmit}>
                {/* Customer Details Section */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Customer ID:</label>
                    <input type="number" value={customerData.customerId} onChange={(e) => setCustomerData({ ...customerData, customerId: e.target.value })} className="mt-1 p-2 w-full border rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Customer Name:</label>
                    <input type="text" value={customerData.customerName} onChange={(e) => setCustomerData({ ...customerData, customerName: e.target.value })} className="mt-1 p-2 w-full border rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Email:</label>
                    <input type="email" value={customerData.email} onChange={(e) => setCustomerData({ ...customerData, email: e.target.value })} className="mt-1 p-2 w-full border rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Birth Date:</label>
                    <input type="date" value={customerData.birthDate} onChange={(e) => setCustomerData({ ...customerData, birthDate: e.target.value })} className="mt-1 p-2 w-full border rounded-md" />
                </div>

                {/* Food Item Details Section */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Food Item Name:</label>
                    <input type="text" value={foodItemData.foodItemName} onChange={(e) => setFoodItemData({ ...foodItemData, foodItemName: e.target.value })} className="mt-1 p-2 w-full border rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Food Item Price:</label>
                    <input type="number" value={foodItemData.price} onChange={(e) => setFoodItemData({ ...foodItemData, price: e.target.value })} className="mt-1 p-2 w-full border rounded-md" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Quantity:</label>
                    <input type="number" value={foodItemData.quantity} onChange={(e) => setFoodItemData({ ...foodItemData, quantity: e.target.value })} className="mt-1 p-2 w-full border rounded-md" />
                </div>

                <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-green">
                    Create Order
                </button>
            </form>
        </div>
    );
};

export default CreateOrderForm;
