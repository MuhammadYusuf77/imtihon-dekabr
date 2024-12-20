import React from 'react';
import restaurants from '../../../public/restaurant.json';

export default function RestaurantCard() {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {restaurants.map((res, index) => (
                <div key={res.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={res.imageCarousel.images[0].url} alt={res.imageCarousel.images[0].alt} className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className='text-lg font-semibold text-gray-900'>{res.restaurant.name}</h3>
                        <p className='text-gray-600'>{res.restaurant.address.line1}</p>
                        <p className='text-gray-600'>{res.restaurant.address.line2}</p>
                        <p className='text-gray-700 mt-2'>{res.restaurant.hours}</p>
                        <div className='mt-4 flex space-x-2'>
                            {res.timeSlots.slice(0, 2).map((slot, index) => (
                                <span key={index} className="px-2 py-1 rounded bg-yellow-500">
                                    {slot.time}
                                </span>
                            ))}
                            <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">More</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
