import React, { useState } from 'react'
import ReviewStars from '../../components/ReviewStars'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Pagination from '../../components/Pagination'

const HotelsList = () => {
    const [activeTab, setActiveTab] = useState('Our Trending')
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 4

    const hotelList = [
        {
            hotel: 'hotel taversery',
            imgUrl: 'https://shreethemes.net/geotrip-live/geotrip/assets/img/hotel/hotel-1.jpg',
            location: 'Waterloo and Southwark . 9.8 km from Delhi Airport .',
            amenties: ['WIFI', 'eating', 'cooling', 'pet'],
            roomType: 'Standard Twin Double Room',
            lastBooed: '25min',
            specialTags: 'Free Cancellation, till 1 hour of Pick up',
            rating: 4.8,
            reviews: 3014,
            discount: 15,
            price: 30000,
        },
        {
            hotel: 'hotel taversery',
            imgUrl: 'https://shreethemes.net/geotrip-live/geotrip/assets/img/hotel/hotel-1.jpg',
            location: 'Waterloo and Southwark . 9.8 km from Delhi Airport .',
            amenties: ['WIFI', 'eating', 'cooling', 'pet'],
            roomType: 'Standard Twin Double Room',
            lastBooed: '25min',
            specialTags: 'Free Cancellation, till 1 hour of Pick up',
            rating: 4.8,
            reviews: 3014,
            discount: 15,
            price: 30000,
        },
        {
            hotel: 'hotel taversery',
            imgUrl: 'https://shreethemes.net/geotrip-live/geotrip/assets/img/hotel/hotel-1.jpg',
            location: 'Waterloo and Southwark . 9.8 km from Delhi Airport .',
            amenties: ['WIFI', 'eating', 'cooling', 'pet'],
            roomType: 'Standard Twin Double Room',
            lastBooed: '25min',
            specialTags: 'Free Cancellation, till 1 hour of Pick up',
            rating: 4.8,
            reviews: 3014,
            discount: 15,
            price: 30000,
        },
        {
            hotel: 'hotel taversery',
            imgUrl: 'https://shreethemes.net/geotrip-live/geotrip/assets/img/hotel/hotel-1.jpg',
            location: 'Waterloo and Southwark . 9.8 km from Delhi Airport .',
            amenties: ['WIFI', 'eating', 'cooling', 'pet'],
            roomType: 'Standard Twin Double Room',
            lastBooed: '25min',
            specialTags: 'Free Cancellation, till 1 hour of Pick up',
            rating: 4.8,
            reviews: 3014,
            discount: 15,
            price: 30000,
        },
        {
            hotel: 'hotel taversery',
            imgUrl: 'https://shreethemes.net/geotrip-live/geotrip/assets/img/hotel/hotel-1.jpg',
            location: 'Waterloo and Southwark . 9.8 km from Delhi Airport .',
            amenties: ['WIFI', 'eating', 'cooling', 'pet'],
            roomType: 'Standard Twin Double Room',
            lastBooed: '25min',
            specialTags: 'Free Cancellation, till 1 hour of Pick up',
            rating: 4.8,
            reviews: 3014,
            discount: 15,
            price: 30000,
        },
        {
            hotel: 'hotel taversery',
            imgUrl: 'https://shreethemes.net/geotrip-live/geotrip/assets/img/hotel/hotel-1.jpg',
            location: 'Waterloo and Southwark . 9.8 km from Delhi Airport .',
            amenties: ['WIFI', 'eating', 'cooling', 'pet'],
            roomType: 'Standard Twin Double Room',
            lastBooed: '25min',
            specialTags: 'Free Cancellation, till 1 hour of Pick up',
            rating: 4.8,
            reviews: 3014,
            discount: 15,
            price: 30000,
        },
        {
            hotel: 'hotel taversery',
            imgUrl: 'https://shreethemes.net/geotrip-live/geotrip/assets/img/hotel/hotel-1.jpg',
            location: 'Waterloo and Southwark . 9.8 km from Delhi Airport .',
            amenties: ['WIFI', 'eating', 'cooling', 'pet'],
            roomType: 'Standard Twin Double Room',
            lastBooed: '25min',
            specialTags: 'Free Cancellation, till 1 hour of Pick up',
            rating: 4.8,
            reviews: 3014,
            discount: 15,
            price: 30000,
        },
        {
            hotel: 'hotel taversery',
            imgUrl: 'https://shreethemes.net/geotrip-live/geotrip/assets/img/hotel/hotel-7.jpg',
            location: 'Waterloo and Southwark . 9.8 km from Delhi Airport .',
            amenties: ['WIFI', 'eating', 'cooling', 'pet'],
            roomType: 'Standard Twin Double Room',
            lastBooed: '25min',
            specialTags: 'Free Cancellation, till 1 hour of Pick up',
            rating: 4.8,
            reviews: 3014,
            discount: 15,
            price: 30000,
        },
        {
            hotel: 'hotel taversery',
            imgUrl: 'https://shreethemes.net/geotrip-live/geotrip/assets/img/hotel/hotel-1.jpg',
            location: 'Waterloo and Southwark . 9.8 km from Delhi Airport .',
            amenties: ['WIFI', 'eating', 'cooling', 'pet'],
            roomType: 'Standard Twin Double Room',
            lastBooed: '25min',
            specialTags: 'Free Cancellation, till 1 hour of Pick up',
            rating: 4.8,
            reviews: 3014,
            discount: 15,
            price: 30000,
        },
        {
            hotel: 'hotel taversery',
            imgUrl: 'https://shreethemes.net/geotrip-live/geotrip/assets/img/hotel/hotel-7.jpg',
            location: 'Waterloo and Southwark . 9.8 km from Delhi Airport .',
            amenties: ['WIFI', 'eating', 'cooling', 'pet'],
            roomType: 'Standard Twin Double Room',
            lastBooed: '25min',
            specialTags: 'Free Cancellation, till 1 hour of Pick up',
            rating: 4.8,
            reviews: 3014,
            discount: 15,
            price: 30000,
        },
    ]

    const totalPages = Math.ceil(hotelList.length / itemsPerPage)
    const displayedHotels = hotelList.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    return (
        <div className="flex w-full flex-col gap-6">
            {/* hotel list header */}
            <div className="flex flex-col justify-between gap-3 sm:flex-row">
                <div className="flex w-full items-center justify-between gap-3">
                    <h2 className="text-lg font-semibold">
                        Showing {hotelList.length} Search Results
                    </h2>
                    <label className="inline-flex h-full cursor-pointer items-center rounded-md border border-gray-300 p-2">
                        <input
                            type="checkbox"
                            value=""
                            className="peer sr-only"
                        />
                        <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-indigo-100 rtl:peer-checked:after:-translate-x-full"></div>
                        <span className="ms-1 text-sm font-medium text-gray-900">
                            Map
                        </span>
                    </label>
                </div>

                <div className="grid w-full grid-cols-2 gap-2 rounded-md bg-blue p-1 sm:grid-cols-3">
                    <button
                        className={`p-2 text-center text-sm font-medium capitalize ${activeTab === 'Our Trending' ? 'rounded-md bg-white text-blue' : 'text-white'}`}
                        onClick={() => setActiveTab('Our Trending')}
                    >
                        Our Trending
                    </button>
                    <button
                        className={`p-2 text-center text-sm font-medium capitalize ${activeTab === 'Most Popular' ? 'rounded-md bg-white text-blue' : 'text-white'}`}
                        onClick={() => setActiveTab('Most Popular')}
                    >
                        Most Popular
                    </button>
                    <button
                        className={`col-span-2 p-2 text-center text-sm font-medium capitalize sm:col-span-1 ${activeTab === 'Lowest Price' ? 'rounded-md bg-white text-blue' : 'text-white'}`}
                        onClick={() => setActiveTab('Lowest Price')}
                    >
                        Lowest Price
                    </button>
                </div>
            </div>

            {/* hotel list */}
            <div className="flex flex-col gap-6">
                {displayedHotels.map((hotel, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-1 gap-3 rounded-md border border-gray-300 px-4 py-4 min-[580px]:grid-cols-3 md:grid-cols-4"
                    >
                        <div className="flex items-center justify-center overflow-hidden rounded max-md:max-h-[250px] min-[580px]:col-span-3 md:col-span-1 md:h-full lg:max-w-[250px]">
                            <img
                                src={hotel.imgUrl}
                                alt={hotel.hotel}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>

                        <div className="flex flex-col gap-3 min-[580px]:col-span-2">
                            <div className="flex flex-col gap-1">
                                <ReviewStars />
                                <h2 className="text-lg font-bold capitalize">
                                    {hotel.hotel}
                                </h2>
                                <div className="flex flex-wrap items-center gap-2">
                                    <p className="text-sm text-gray-500">
                                        {hotel.location}
                                    </p>
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-blue"
                                    >
                                        Show on Map
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 pt-2">
                                {hotel.amenties.map((ament, index) => (
                                    <div
                                        key={index}
                                        className="w-fit rounded border border-dashed border-gray-400 px-3 py-1 text-[13px] capitalize text-gray-400"
                                    >
                                        {ament}
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col gap-1">
                                <p>{hotel.roomType}</p>
                                <p className="text-sm text-gray-500">
                                    Last booed {hotel.lastBooed} ago
                                </p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="w-fit rounded bg-green-500/10 px-3 py-1 text-[13px] font-medium text-green-500">
                                    {hotel.specialTags}
                                </p>
                                <div className="flex flex-wrap items-center gap-2 capitalize">
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-blue"
                                    >
                                        login
                                    </a>
                                    <p className="text-sm text-gray-500">
                                        & get additional $15 Off Using
                                    </p>
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-blue"
                                    >
                                        visa card
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="grid w-full grid-cols-1 items-end gap-3">
                            <div className="flex gap-2 min-[580px]:justify-end">
                                <div className="flex flex-col text-sm">
                                    <p className="font-medium capitalize">
                                        exceptional
                                    </p>
                                    <p className="capitalize text-gray-500">
                                        {hotel.reviews} reviews
                                    </p>
                                </div>
                                <div className="h-fit w-fit rounded bg-blue p-1 text-center text-lg text-white">
                                    {hotel.rating}
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col gap-2 min-[580px]:items-end">
                                    <p className="w-fit rounded bg-yellow px-3 py-1 text-[13px] font-medium capitalize text-white">
                                        {hotel.discount}% off
                                    </p>
                                    <div className="flex flex-col gap-0 leading-none min-[580px]:items-end">
                                        <p className="line-through">
                                            LKR{' '}
                                            {(
                                                hotel.price +
                                                (hotel.price * hotel.discount) /
                                                    100
                                            ).toLocaleString()}
                                        </p>
                                        <p className="text-2xl font-semibold min-[580px]:text-right">
                                            LKR {hotel.price.toLocaleString()}
                                        </p>
                                    </div>
                                    <p className="text-[13px] capitalize text-gray-500 min-[580px]:text-right">
                                        +$22 taxes & Fees For 2 Nights
                                    </p>
                                </div>
                                <Link
                                    to={`${hotel.hotel.toLowerCase().replace(' ', '-')}`}
                                    className="cta-btn gap-2 rounded-md bg-blue px-6 py-2 text-base font-medium text-white"
                                >
                                    see availability
                                    <FaArrowTrendUp className="w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* pagination */}
            <div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    )
}

export default HotelsList
