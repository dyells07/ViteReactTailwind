import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingIndex() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold text-gray-800">
                            Welcome to Our Restro App!
                        </h2>
                        <p className="text-lg text-gray-600">
                            Explore a wide range of delicious dishes and enjoy a seamless dining experience. Whether you're looking for a quick snack or a gourmet meal, we have it all. Order with ease and indulge in the flavors of our culinary delights.
                        </p>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="/CaptureChefBack.png" alt="image1" />
                </div>
            </aside>
        </div>
    );
}
