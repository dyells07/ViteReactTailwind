import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { BaseUrl } from '../../../utils/ApiRoutes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

export default function EditFoodItem() {
    const [foodItemName, setFoodItemName] = useState(''); 
    const foodItemId = parseInt(useParams().foodItemId, 10);
    const navigate = useNavigate(); 
  const [foodItemData, setCustomerData] = useState({});
  const [price, setPrice] = useState('');

  useEffect(() => {
    async function fetchFoodDetails() {
        try {
            const response = await fetch(`${BaseUrl}FoodItem/GetFoodItem/${foodItemId}`);
            if (response.ok) {
                const data = await response.json();
                setCustomerData(data);
                setFoodItemName(data.foodItemName);
                setPrice(data.price);

        
            } else {
                toastr.warning('Error fetching Foods details'); 
            }
        } catch (error) {
            toastr.error('Error:', error);
        }
    }

    fetchFoodDetails();
}, [foodItemId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const data = {
            foodItemId: foodItemId,
            foodItemName: foodItemName,
            price: price,
        };

        const response = await fetch(`${BaseUrl}FoodItem/PutFoodItem/${foodItemId}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            toastr.success('FoodItem updated successfully');
            navigate(-1);
        } else {
            toastr.error('Error updating FoodItem');
        }
    } catch (error) {
        toastr.error('Error updating FoodItem:', error);
    }
}

  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
      <form className="p-6 flex flex-col justify-center" onSubmit={handleSubmit}>
        <div className="flex flex-col mt-2">
          <label htmlFor="foodItemName">Food Item</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            value={foodItemName}
            onChange={(e) => setFoodItemName(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="price">Food Price</label>
        <input
  type="number"
  name="price"
  id="price"
  placeholder="Price"
  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
  value={price || ''}
  onChange={(e) => setPrice(e.target.value)}
/>
</div>

        <div className="flex justify-between mt-3">
        <Link
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                        to="/foodItem"
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