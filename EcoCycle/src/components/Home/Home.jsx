import React from 'react';
import { Link } from 'react-router-dom';

const EcoCycleProject = () => {
    return (
        <div className="container mx-auto text-center py-10">
            <h1 className="text-4xl font-bold mb-8">Eco Cycle : <span className='text-green-900'> From Trash To Treasure</span></h1>
            <h5 className="text-2xl  text-red-900 text-bold mb-6">
            Innovative way to manage Organic Wastes
            </h5>
           
            <div className="flex justify-center mb-10">
                <img
                    className="w-64 h-64 object-cover rounded-full"
                    src="./SaveEarth.png"
                    alt="Eco Cycle Project"
                />
            </div>
            <h3 className="text-4xl font-bold mb-8 text-green-600">Be Responsible , Save Earth </h3>
            <Link
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                to="/NewContact"
            >
                Get Involved
            </Link>
        </div>
    );
};

export default EcoCycleProject;
