
export default function LandingIndex() {
   
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-semibold mb-4">Restrurant Application</h1>
                    <Link
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                        to="/addcustomer"
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
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Customer Email</th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Date of Birth</th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Edit</th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Delete</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {customers.map((customer) => (
                                    <tr key={customer.customerID}>
                                        <td className="px-6 py-4 whitespace-no-wrap">{customer.customerID}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap">{customer.customerName}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap">{customer.email}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap">{customer.birthDate}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap">
                                            <FontAwesomeIcon
                                                icon={faEdit}
                                                className="text-blue-500 hover:text-blue-700 cursor-pointer"
                                                onClick={() => handleEditClick(customer.customerID)}
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
