import React from 'react'
import "./About.css"


export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 ">
                  <div className="md:5/12 lg:w-5/12 ">
                  <img className="about-image" src="./organic.png" alt="Organic" />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-green-600 font-bold md:text-4xl">
                      Organic Waste
                      </h2>
                      <p className="mt-6 text-xl text-gray-800">
                      Organic waste is any material that is biodegradable and comes from either a plant or an animal.
                      Organic waste is a major problem worldwide. It is estimated that 1.3 billion tons of food waste is generated every year. In this presentation, we will explore effective and sustainable solutions to manage organic waste.Biodegradable waste is organic material that can be broken into carbon dioxide, methane
                      </p>
                      
                  </div>
              </div>
          </div>

{/*second  */}

<div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                  <img className="about-image" src="./design.png" alt="Design" />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-green-600 font-bold md:text-4xl">
                      The Problem

                      </h2>
                      <p className="mt-6 text-xl text-gray-600">
                      Organic waste in landfills generates methane, a potent greenhouse gas that contributes to climate change. Additionally, it can contaminate soil and water. Effective management is crucial to reduce its environmental impact.Organic waste poses significant challenges that need to be addressed. Improper disposal of organic waste, such as food scraps and yard waste, leads to environmental issues like methane emissions and contamination of soil and water. Additionally, valuable resources present in organic waste are wasted when not properly managed.
                      </p>
                      
                  </div>
              </div>
          </div>

          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                  <img className="about-image" src="./wasteclass.png" alt="Waste" />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-green-600 font-bold md:text-4xl">
                      Waste classification
                      </h2>
                      <p className="mt-6 text-xl text-gray-600">
                      According to a CNBC report, the global annual waste production exceeds a staggering 2 billion tons. This waste is categorized into various types, with 56% being organic, 16% composed of plastics, 16% consisting of paper waste, and the remaining 12% classified as "other," which includes metals
                      In developing nations such as Nepal, waste management has emerged as a significant and pressing issue.
                      </p>
                      
                  </div>
              </div>
          </div>



          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                  <img className="about-image" src="./manage.jpeg" alt="manage" />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-green-600 font-bold md:text-4xl">
                     The Solution
                      </h2>
                      <p className="mt-6  text-xl text-black-600">
                      Managing organic waste requires a combination of strategies and practices to minimize its generation, properly handle and dispose of it, and promote sustainable waste management.
                      We aim to leverage the power of technology to address organic waste disposal challenges with our innovative application. Our platform facilitates seamless interactions between clients and vendors, empowering clients to request the collection of organic waste at no cost, promoting responsible waste management and a cleaner, healthier environment.

Our Application includes insights and knowledge's about waste management 


                      </p>
                      
                  </div>
              </div>
          </div>
      </div>
  );
}