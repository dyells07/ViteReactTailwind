import React, { useEffect, useState } from 'react';
import { BaseUrl } from '../../../utils/ApiRoutes';

export default function Home() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch(`${BaseUrl}Customer/GetCustomers`)
            .then(response => response.json())
            .then(data => {
                setCustomers(data);
            })
    }, []);


  

    return (
        <div>
            <h1>Customer List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Customer Id</th>
                        <th>Customer Name</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => (
                        <tr key={customer.customerID}>
                            <td>{customer.customerID}</td>
                            <td>{customer.customerName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
