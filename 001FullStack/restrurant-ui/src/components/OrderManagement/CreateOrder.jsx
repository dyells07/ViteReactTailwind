import React, { useState } from 'react';
import { BaseUrl } from '../../../utils/ApiRoutes';
import { Link, useNavigate } from 'react-router-dom';

export default function CreateOrder() {
    const [order, setOrder] = useState({
        orderMasterId: 0,
        orderNumber: '',
        customerId: 0,
        customer: {
            customerID: 0,
            customerName: '',
            email: '',
            birthDate: '',
        },
        pMethod: '',
        gTotal: 0,
        orderDetails: [
            {
                orderDetailId: 0,
                orderMasterId: 0,
                foodItemId: 0,
                foodItem: {
                    foodItemId: 0,
                    foodItemName: '',
                    price: 0,
                },
                foodItemPrice: 0,
                quantity: 0,
            },
        ],
        deletedOrderItemIds: '',
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${BaseUrl}Order/PostOrder`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(order),
            });

            if (response.ok) {
                console.log('Order created successfully');
                navigate(-1);
            } else {
                console.error('Error creating order');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOrder({
            ...order,
            [name]: value,
        });
    };

    return (
        <div className="your-form-container">
            <form className="your-form-class" onSubmit={handleSubmit}>
                <label htmlFor="orderMasterId">Order Master ID</label>
                <input
                    type="number"
                    name="orderMasterId"
                    value={order.orderMasterId}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor="orderNumber">Order Number</label>
                <input
                    type="text"
                    name="orderNumber"
                    value={order.orderNumber}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor="customerId">Customer ID</label>
                <input
                    type="number"
                    name="customerId"
                    value={order.customerId}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor="customerName">Customer Name</label>
                <input
                    type="text"
                    name="customerName"
                    value={order.customer.customerName}
                    onChange={(e) => setOrder({ ...order, customer: { ...order.customer, customerName: e.target.value } })}
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    value={order.customer.email}
                    onChange={(e) => setOrder({ ...order, customer: { ...order.customer, email: e.target.value } })}
                    required
                />
                <label htmlFor="birthDate">Birth Date</label>
                <input
                    type="datetime-local"
                    name="birthDate"
                    value={order.customer.birthDate}
                    onChange={(e) => setOrder({ ...order, customer: { ...order.customer, birthDate: e.target.value } })}
                    required
                />
                <label htmlFor="pMethod">Payment Method</label>
                <input
                    type="text"
                    name="pMethod"
                    value={order.pMethod}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor="gTotal">Grand Total</label>
                <input
                    type="number"
                    name="gTotal"
                    value={order.gTotal}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor="foodItemName">Food Item Name</label>
                <input
                    type="text"
                    name="foodItemName"
                    value={order.orderDetails[0].foodItem.foodItemName}
                    onChange={(e) => setOrder({ ...order, orderDetails: [{ ...order.orderDetails[0], foodItem: { ...order.orderDetails[0].foodItem, foodItemName: e.target.value } }] })}
                    required
                />
                <label htmlFor="foodItemPrice">Food Item Price</label>
                <input
                    type="number"
                    name="foodItemPrice"
                    value={order.orderDetails[0].foodItemPrice}
                    onChange={(e) => setOrder({ ...order, orderDetails: [{ ...order.orderDetails[0], foodItemPrice: e.target.value }] })}
                    required
                />
                <label htmlFor="quantity">Quantity</label>
                <input
                    type="number"
                    name="quantity"
                    value={order.orderDetails[0].quantity}
                    onChange={(e) => setOrder({ ...order, orderDetails: [{ ...order.orderDetails[0], quantity: e.target.value }] })}
                    required
                />
                <label htmlFor="deletedOrderItemIds">Deleted Order Item IDs</label>
                <input
                    type="text"
                    name="deletedOrderItemIds"
                    value={order.deletedOrderItemIds}
                    onChange={handleInputChange}
                    required
                />

                <button type="submit">Save Order</button>
            </form>
        </div>
    );
}
