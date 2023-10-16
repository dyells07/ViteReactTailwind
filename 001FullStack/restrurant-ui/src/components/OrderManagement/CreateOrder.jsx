import React, { useState, useEffect } from 'react';
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

    const [foodItems, setFoodItems] = useState([]);
    const [foodItemData, setFoodItemData] = useState({
        foodItemId: 0,
        foodItemName: '',
        price: '',
        quantity: 0
    });

    const [isCreatingNewCustomer, setIsCreatingNewCustomer] = useState(false);
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchFoodItems = async () => {
            try {
                const response = await fetch(`${BaseUrl}FoodItem/GetFoodItems`);
                if (response.ok) {
                    const data = await response.json();
                    setFoodItems(data);
                } else {
                    toastr.error('Failed to fetch food items');
                }
            } catch (error) {
                console.error('Error fetching food items:', error);
                toastr.error('Failed to fetch food items');
            }
        };
    
        fetchFoodItems();
    }, []);
    



    const handleCustomerChange = (selectedCustomerId) => {
        const selectedCustomer = customers.find(
            (customer) => customer.customerId === parseInt(selectedCustomerId)
        );
    
        if (selectedCustomer) {
            setCustomerData({
                customerId: selectedCustomer.customerId,
                customerName: selectedCustomer.customerName,
                email: selectedCustomer.email,
                birthDate: selectedCustomer.birthDate
            });
        } else {
            // Reset customer data when no customer is selected
            setCustomerData({
                customerId: 0,
                customerName: '',
                email: '',
                birthDate: ''
            });
        }
    };
    
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            orderNumber: '',
            customerId: customerData.customerId,
            pMethod: '',
            gTotal: 0,
            orderDetails: [
                {
                    foodItemId: foodItems.foodItemId,
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
                    price: '',
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

    const handleFoodItemChange = (selectedFoodItemId) => {
        const selectedFoodItem = foodItems.find((item) => item.foodItemId === selectedFoodItemId);
        if (selectedFoodItem) {
            setFoodItemData({
                foodItemId: selectedFoodItem.foodItemId,
                foodItemName: selectedFoodItem.foodItemName,
                price: selectedFoodItem.price,
                quantity: foodItemData.quantity // You might want to reset quantity here too
            });
        } else {
            // Reset food item data when no item is selected
            setFoodItemData({
                foodItemName: '',
                price: '',
                quantity: 0
            });
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
                        {customers.map((customer) => (
                            <option key={customer.customerId} value={customer.customerId}>
                                {customer.customerName}
                            </option>
                        ))}
                        <option value="new">Create New Customer</option>
                    </select>
                </div>

                {/* If creating a new customer, show input fields */}
                {isCreatingNewCustomer && (
                    <div>
                        {/* New Customer Input Fields */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Customer Name:</label>
                            <input
                                type="text"
                                value={customerData.customerName}
                                onChange={(e) => setCustomerData({ ...customerData, customerName: e.target.value })}
                                className="mt-1 p-2 w-full border rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Email:</label>
                            <input
                                type="email"
                                value={customerData.email}
                                onChange={(e) => setCustomerData({ ...customerData, email: e.target.value })}
                                className="mt-1 p-2 w-full border rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-600">Birth Date:</label>
                            <input
                                type="date"
                                value={customerData.birthDate}
                                onChange={(e) => setCustomerData({ ...customerData, birthDate: e.target.value })}
                                className="mt-1 p-2 w-full border rounded-md"
                            />
                        </div>
                    </div>
                )}
                <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Food Item Name:</label>
        <select
          value={foodItemData.foodItemName}
          onChange={(e) => handleFoodItemChange(parseInt(e.target.value))}
          className="mt-1 p-2 w-full border rounded-md"
        >
          <option value="">Select Food Item</option>
          {foodItems.map((item) => (
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
          onChange={(e) => setFoodItemData({ ...foodItemData, price: e.target.value })}
          className="mt-1 p-2 w-full border rounded-md"
        />
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





const CustomerDetails = ({ isCreatingNewCustomer, customerData, handleInputChange }) => {
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


