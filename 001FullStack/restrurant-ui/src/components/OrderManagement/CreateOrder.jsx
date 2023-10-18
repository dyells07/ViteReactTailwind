import React, { useState, useEffect } from 'react';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import { BaseUrl } from '../../../utils/ApiRoutes';

const CreateOrderForm = () => {
    const [customerData, setCustomerData] = useState({
        customerId: 0,
        customerName: '',
        email: '',
        birthDate: ''
    });

    const [foodItems, setFoodItems] = useState([]);
    const [foodItemData, setFoodItemData] = useState({
        foodItemId: 0,
        foodItemName: '',
        price: 0, // Assuming price is a number
        quantity: 0
    });

    const [isCreatingNewCustomer, setIsCreatingNewCustomer] = useState(false);
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const customersResponse = await fetch(`${BaseUrl}Customer/GetCustomers`);
                if (customersResponse.ok) {
                    const customersData = await customersResponse.json();
                    setCustomers(customersData);
                } else {
                    toastr.error('Failed to fetch customers');
                }

                const foodItemsResponse = await fetch(`${BaseUrl}FoodItem/GetFoodItems`);
                if (foodItemsResponse.ok) {
                    const foodItemsData = await foodItemsResponse.json();
                    setFoodItems(foodItemsData);
                } else {
                    toastr.error('Failed to fetch food items');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                toastr.error('Failed to fetch data');
            }
        };

        fetchData();
    }, []);

    const handleCustomerChange = (selectedCustomerId) => {
        if (selectedCustomerId === 'new') {
            // Creating a new customer
            setCustomerData({
                customerId: 0,
                customerName: '',
                email: '',
                birthDate: ''
            });
            setIsCreatingNewCustomer(true);
        } else {
            // Selecting an existing customer
            const selectedCustomer = customers.find(customer => customer.customerId === parseInt(selectedCustomerId)) || {
                customerId: 0,
                customerName: '',
                email: '',
                birthDate: ''
            };
    
            setCustomerData(selectedCustomer);
            setIsCreatingNewCustomer(false);
        }
    };
    

    const handleFoodItemChange = (selectedFoodItemId) => {
        const selectedFoodItem = foodItems.find(item => item.foodItemId === selectedFoodItemId) || {
            foodItemId: 0,
            foodItemName: '',
            price: 0,
            quantity: 0
        };

        setFoodItemData(selectedFoodItem);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            orderNumber: '', // Add logic to generate order number
            customerId: customerData.customerId,
            pMethod: '', // Add payment method logic
            gTotal: 0, // Add logic to calculate total
            orderDetails: [
                {
                    foodItemId: foodItemData.foodItemId,
                    foodItem: {
                        foodItemId: foodItemData.foodItemId,
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
                setCustomerData({
                    customerId: 0,
                    customerName: '',
                    email: '',
                    birthDate: ''
                });
                setFoodItemData({
                    foodItemId: 0,
                    foodItemName: '',
                    price: 0,
                    quantity: 0
                });
                toastr.success('Order created successfully');
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
                    <label className="block text-sm font-medium text-gray-600">Select or Create Customer:</label>
                    <select
                        value={isCreatingNewCustomer ? 'new' : customerData.customerId}
                        onChange={(e) => handleCustomerChange(e.target.value)}
                        className="mt-1 p-2 w-full border rounded-md"
                    >
                        <option value="">Select Customer</option>
                        {customers.map(customer => (
                            <option key={customer.customerId} value={customer.customerId}>
                                {customer.customerName}
                            </option>
                        ))}
                        <option value="new">Create New Customer</option>
                    </select>
                </div>

                {/* If creating a new customer, show input fields */}
                {isCreatingNewCustomer && (
                    <CustomerDetails
                        customerData={customerData}
                        handleInputChange={(field, value) => setCustomerData({ ...customerData, [field]: value })}
                    />
                )}

                {/* Food Item Details Section */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Food Item Name:</label>
                    <select
                        value={foodItemData.foodItemId}
                        onChange={(e) => handleFoodItemChange(parseInt(e.target.value))}
                        className="mt-1 p-2 w-full border rounded-md"
                    >
                        <option value="">Select Food Item</option>
                        {foodItems.map(item => (
                            <option key={item.foodItemId} value={item.foodItemId}>
                                {item.foodItemName}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Food Item Price:</label>
                    <input
                        type="number"
                        value={foodItemData.price}
                        onChange={(e) => setFoodItemData({ ...foodItemData, price: parseFloat(e.target.value) })}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Quantity:</label>
                    <input
                        type="number"
                        value={foodItemData.quantity}
                        onChange={(e) => setFoodItemData({ ...foodItemData, quantity: parseInt(e.target.value) })}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>

                <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-green">
                    Create Order
                </button>
            </form>
        </div>
    );
};

const CustomerDetails = ({ customerData, handleInputChange }) => {
    return (
        <div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Customer Name:</label>
                <input
                    type="text"
                    value={customerData.customerName}
                    onChange={(e) => handleInputChange('customerName', e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Email:</label>
                <input
                    type="email"
                    value={customerData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Birth Date:</label>
                <input
                    type="date"
                    value={customerData.birthDate}
                    onChange={(e) => handleInputChange('birthDate', e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md"
                />
            </div>
        </div>
    );
};

export default CreateOrderForm;
