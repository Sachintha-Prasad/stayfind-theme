import React from 'react'
import GuestReviews from '../../../components/GuestReviews'
import { FaCheck } from 'react-icons/fa6'
import { MdRadioButtonChecked } from 'react-icons/md'

const Overview = () => {
    const destinationOverview = {
        overviewDescription:
            'Are you looking for a dreamy trip? Do you want to be lost in the joy of beautiful places led with snow? Well, we are here to take you to one of the best trips you have ever had on this amazing Canada 7 days itinerary. Canada is a place you wanna be. With spellbinding beauty that will capture your soul, Canada is one of the best and the craziest place you can ever visit. This trip will take you Toronto where you will get to witness the biggest waterfall in the world – the grand Niagara Falls. You will be amazed by its mammoth size which will provoke a thought that how small are we all on this planet and in this universe. The magical rainbows created as the water falls from a staggering height will touch your heart. The amazing stay in Canada comes with all the amenities that you could ever need in this package.',

        tourHighlights: [
            'A fantastic experience at the Niagara Falls',
            'Wonderful experience at the Harborfront',
            'Breathtaking views at the Night at Niagara Falls',
            'Splendid experiences with the City tours',
            'All led out world this music while asked',
        ],

        inclusions: [
            'Meal Plan',
            'Breakfast',
            'Services',
            'Station/Airport Pick and Drop',
            'Inter-city Transfers',
            'Sightseeing',
            'Charges',
            'Vancouver Coach Package',
            'Lunch on the Coach',
            'Entrance Fees',
            '6 Nights’ Accommodation at the hotel',
            'Road taxes',
            'Parking fees',
            'Airfare',
        ],

        exclusions: [
            'Meal Plan',
            'Lunch',
            'Dinner',
            'Charges',
            'Personal Expenses',
            'Visa',
            'Driver allowance',
            'Guide charges',
            'Government Service Tax',
            'City Taxes',
            'Personal Travels',
            'Extra Stay',
            'Overseas Medi-Claim Insurance',
        ],

        categoriesRatingList: [
            { category: 'Dishes', rating: 8.7, percent: 'w-[87%]' },
            { category: 'Swimming', rating: 9.2, percent: 'w-[92%]' },
            { category: 'Rooms', rating: 8.8, percent: 'w-[88%]' },
            { category: 'Location', rating: 8.9, percent: 'w-[89%]' },
            { category: 'Services', rating: 9.2, percent: 'w-[92%]' },
            { category: 'Cleanliness', rating: 8.6, percent: 'w-[86%]' },
        ],

        reviewsList: [
            {
                guestImg: '',
                guestName: 'Mark Gray',
                date: '04 Jan 2024',
                country: 'Germany',
                review: 'In a free hour, But in certain circumstances and owing to the claims of duty or the obligations of business when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.',
            },
            {
                guestImg:
                    'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
                guestName: 'Adam Snow',
                date: '20 Feb 2024',
                country: 'USA',
                review: 'In a free hour, But in certain circumstances and owing to the claims of duty or the obligations of business when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.',
            },
            {
                guestImg: '',
                guestName: 'Keny White',
                date: '02 Apr 2024',
                country: 'Canada',
                review: 'In a free hour, But in certain circumstances and owing to the claims of duty or the obligations of business when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.In a free hour, But in certain circumstances and owing to the claims of duty or the obligations of business when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed.',
            },
        ],
    }

    return (
        <div className="flex flex-col gap-6">
            {/* overview contianer */}
            <div className="flex flex-col gap-4 rounded-lg border border-gray-300 bg-white py-4">
                <h2 className="px-4 text-lg font-semibold sm:px-6">Overview</h2>

                <hr className="h-[1px] w-full bg-gray-300" />

                <p className="px-4 sm:px-6">
                    {destinationOverview.overviewDescription}
                </p>
            </div>

            {/* tour highlights contianer */}
            <div className="flex flex-col gap-4 rounded-lg border border-gray-300 bg-white py-4">
                <h2 className="px-4 text-lg font-semibold sm:px-6">
                    Tour Highlights
                </h2>

                <hr className="h-[1px] w-full bg-gray-300" />

                <div className="grid gap-6 px-4 sm:grid-cols-2 sm:px-6">
                    {destinationOverview.tourHighlights.map((item, index) => (
                        <p
                            key={index}
                            className="flex items-center gap-3 capitalize"
                        >
                            <FaCheck className="text-green-600" /> {item}
                        </p>
                    ))}
                </div>
            </div>

            {/* inclusions and exclusions contianer */}
            <div className="flex flex-col gap-4 rounded-lg border border-gray-300 bg-white py-4">
                <h2 className="px-4 text-lg font-semibold sm:px-6">
                    Inclusions and Exclusions
                </h2>

                <hr className="h-[1px] w-full bg-gray-300" />

                <div className="flex flex-col gap-3 px-4 sm:px-6">
                    <h3 className="text-lg font-medium">Inclusions</h3>
                    <div className="grid grid-cols-2 gap-6">
                        {destinationOverview.inclusions.map((item, index) => (
                            <p
                                key={index}
                                className="flex flex-col gap-0 capitalize sm:flex-row sm:items-center sm:gap-3"
                            >
                                <MdRadioButtonChecked className="text-green-600" />
                                {item}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="mt-3 flex flex-col gap-3 px-4 sm:px-6">
                    <h3 className="text-lg font-medium">Exclusions</h3>
                    <div className="grid grid-cols-2 gap-6">
                        {destinationOverview.exclusions.map((item, index) => (
                            <p
                                key={index}
                                className="flex flex-col gap-0 capitalize sm:flex-row sm:items-center sm:gap-3"
                            >
                                <MdRadioButtonChecked className="text-yellow" />
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            {/* guests review contianer */}
            <div className="flex flex-col gap-4 rounded-lg border border-gray-300 bg-white py-4">
                <h2 className="px-4 text-lg font-semibold sm:px-6">
                    Guest Reviews
                </h2>

                <hr className="h-[1px] w-full bg-gray-300" />

                <GuestReviews
                    categoriesRatingList={
                        destinationOverview.categoriesRatingList
                    }
                    reviewsList={destinationOverview.reviewsList}
                />
            </div>
        </div>
    )
}

export default Overview
