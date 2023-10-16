import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom'; 
import { BaseUrl } from '../../../utils/ApiRoutes';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

export default function FoodItemIndex() {
    const navigate = useNavigate(); 

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch(`${BaseUrl}FoodItem/GetFoodItems`)
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              toastr.error('Failed to fetch food items from the server');
              throw new Error('Failed to fetch');
            }
          })
          .then(data => {
            setFoods(data);
          })
          .catch(error => {
            toastr.error('Error:', error);
          });
      }, []);






    const handleDeleteClick = async (foodItemId) => {
        try {
            const response = await fetch(`${BaseUrl}FoodItem/DeleteFoodItem/${foodItemId}`, {
                method: 'DELETE',
            });
    
            if (response.ok) {
                toastr.warning('Food item deleted successfully'); 
            } else {
                toastr.error('Error deleting food item');
            }
    
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        } catch (error) {
            toastr.error('Error deleting food item');
            setTimeout(() => {
                toastr.clear(); 
            }, 30000);
        }
    };
    
    const handleEditClick = (foodItemId) => {
        navigate(`/editfoodItem/${foodItemId}`);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-semibold mb-4">FoodItems List</h1>
                    <Link
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                        to="/addfoodItem"
                    >
                        <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add New Food
                    </Link>
                </div>
                <div className="overflow-x-auto mx-auto">
                    <div className="overflow-y-auto max-h-96">
                        <table className="w-1/2 min-w-max divide-y divide-gray-200">
                            <thead className="sticky top-0 bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Food Item</th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Edit</th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Delete</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {foods.map((fooditem) => (
                                    <tr key={fooditem.foodItemId}>
                                        <td className="px-6 py-4 whitespace-no-wrap">{fooditem.foodItemName}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap">{fooditem.price}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap">
                                            <FontAwesomeIcon
                                                icon={faEdit}
                                                className="text-blue-500 hover:text-blue-700 cursor-pointer"
                                                onClick={() => handleEditClick(fooditem.foodItemId)}
                                            />
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap">
                                            <FontAwesomeIcon icon={faTrash} className="text-red-500 hover:text-red-700 cursor-pointer" onClick={() => handleDeleteClick(fooditem.foodItemId)}/>
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
