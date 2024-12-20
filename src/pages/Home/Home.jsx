import React from 'react'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'

export default function Home() {
    return (
        <div>
            <h1 className='text-3xl mb-10'>Our Restaurants</h1>
            <div>
                <RestaurantCard />
            </div>
        </div>
    )
}
