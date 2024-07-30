import React from 'react'
import { TbBeach } from 'react-icons/tb'
import { FaPlaneDeparture } from 'react-icons/fa'
import { FaMartiniGlass } from 'react-icons/fa6'

const PointsOfInterestSection = () => {
    const pointsOfInterest = [
        {
            category: 'Top Attractions',
            categoryIcon: <TbBeach />,
            items: [
                { name: 'Hong Kong Disneyland', distance: '170m' },
                { name: 'Hong Kong Museum', distance: '250m' },
                { name: 'The Peak Tram', distance: '80m' },
            ],
        },
        {
            category: 'Nearest Airport & Metro',
            categoryIcon: <FaPlaneDeparture />,
            items: [
                { name: 'Janghai Airport', distance: '370m' },
                { name: 'Shivalay Airport', distance: '2.4km' },
                { name: 'Mandpam Metro', distance: '500m' },
            ],
        },
        {
            category: 'Cafe & Bars',
            categoryIcon: <FaMartiniGlass />,
            items: [
                { name: 'Bekker Coffee Cafe', distance: '60m' },
                { name: 'Levendaram Restaurants', distance: '120m' },
                { name: 'The Blue Bar', distance: '90m' },
            ],
        },
    ]

    return (
        <section>
            <div className="container grid gap-6 pt-6 sm:grid-cols-2 md:grid-cols-3">
                {pointsOfInterest.map((point, index) => (
                    <div
                        key={index}
                        className="flex min-h-[160px] w-full flex-col gap-3 rounded-md bg-white px-4 py-4 md:px-6"
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center text-xl text-blue">
                                {point.categoryIcon}
                            </div>
                            <h3 className="text-lg font-medium text-blue">
                                {point.category}
                            </h3>
                        </div>
                        <div className="flex flex-col gap-1">
                            {point.items.map((item, index) => (
                                <p key={index}>
                                    {item.name}
                                    <span className="text-gray-400">
                                        {' '}
                                        ({item.distance})
                                    </span>
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PointsOfInterestSection
