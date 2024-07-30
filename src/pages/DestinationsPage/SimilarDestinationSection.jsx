import React from 'react'
import SectionHeading from '../../components/SectionHeading'
import ProductCard from '../../components/Cards/ProductCard'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { FaPlaneDeparture } from 'react-icons/fa'
import { RiHotelFill } from 'react-icons/ri'
import { TbPlayFootball } from 'react-icons/tb'
import { FaTrainSubway } from 'react-icons/fa6'
import { FaStar } from 'react-icons/fa'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const SimilarDestinationSection = () => {
    const similarDestinationList = [
        {
            name: 'Thrilling holiday in Trinco',
            imgUrl: 'https://us.lakpura.com/cdn/shop/files/Untitled-1_3cf1d0b1-de58-4d8b-8545-60898a09bdb3.jpg?v=1657266596&width=3840',
            nearbyFacilities: {
                flights: 3,
                hotels: 2,
                activities: 0,
                transfers: 2,
            },
            stays: ['2N Amman', '1N Petra', '2N Dhaka'],
            price: 20000,
            persons: 2,
            reviews: 3244,
            ratings: 4.8,
        },
        {
            name: 'Thrilling holiday in Trinco',
            imgUrl: 'https://i.pinimg.com/originals/ae/04/4d/ae044dcd42d350a50426cd8aa900f09b.jpg',
            nearbyFacilities: {
                flights: 3,
                hotels: 2,
                activities: 0,
                transfers: 2,
            },
            stays: ['2N Amman', '1N Petra', '2N Dhaka'],
            price: 20000,
            persons: 2,
            reviews: 3244,
            ratings: 4.8,
        },
        {
            name: 'Thrilling holiday in Trinco',
            imgUrl: 'https://srilankatravelpages.com/wp-content/uploads/2021/09/Rangala-Natural-Pool-800x528.jpg',
            nearbyFacilities: {
                flights: 3,
                hotels: 2,
                activities: 0,
                transfers: 2,
            },
            stays: ['2N Amman', '1N Petra', '2N Dhaka'],
            price: 20000,
            persons: 2,
            reviews: 3244,
            ratings: 4.8,
        },
        {
            name: 'Thrilling holiday in Trinco',
            imgUrl: 'https://www.lanka-excursions-holidays.com/uploads/4/0/2/1/40216937/rangala-area-dscf5712-1200_orig.jpg',
            nearbyFacilities: {
                flights: 3,
                hotels: 2,
                activities: 0,
                transfers: 2,
            },
            stays: ['2N Amman', '1N Petra', '2N Dhaka'],
            price: 20000,
            persons: 2,
            reviews: 3244,
            ratings: 4.8,
        },
        {
            name: 'Thrilling holiday in Trinco',
            imgUrl: 'https://us.lakpura.com/cdn/shop/products/LK74090400-02-E-1280-720.jpg?v=1624352433&width=1445',
            nearbyFacilities: {
                flights: 3,
                hotels: 2,
                activities: 0,
                transfers: 2,
            },
            stays: ['2N Amman', '1N Petra', '2N Dhaka'],
            price: 20000,
            persons: 2,
            reviews: 3244,
            ratings: 4.8,
        },
    ]

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 968 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 968, min: 600 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
        },
    }

    const CustomLeftArrow = ({ onClick }) => (
        <button
            className="text-transition absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-indigo-100 text-blue hover:bg-blue hover:text-white"
            onClick={onClick}
        >
            <FaAngleLeft />
        </button>
    )

    const CustomRightArrow = ({ onClick }) => (
        <button
            className="text-transition absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-indigo-100 text-blue hover:bg-blue hover:text-white"
            onClick={onClick}
        >
            <FaAngleRight />
        </button>
    )

    return (
        <section className="bg-gray-100">
            <div className="container flex flex-col gap-3 py-12">
                <SectionHeading title={'Similar Destinations'} />

                <Carousel
                    responsive={responsive}
                    draggable={true}
                    itemClass="px-1.5"
                    customLeftArrow={<CustomLeftArrow />}
                    customRightArrow={<CustomRightArrow />}
                >
                    {similarDestinationList.map((item, index) => (
                        <div key={index} className="rounded-lg bg-white">
                            <ProductCard imgUrl={item.imgUrl} path={'#'}>
                                <div className="flex flex-col gap-6">
                                    <div className="flex justify-between gap-3">
                                        <div className="flex flex-col items-start justify-between gap-1">
                                            <FaPlaneDeparture />
                                            <p className="text-sm">
                                                {item.nearbyFacilities.flights}{' '}
                                                Flights
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start justify-between gap-1">
                                            <RiHotelFill className="text-lg" />
                                            <p className="text-sm">
                                                {item.nearbyFacilities.hotels}{' '}
                                                Hotels
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start justify-between gap-1">
                                            <TbPlayFootball className="text-lg" />
                                            <p className="text-sm">
                                                {
                                                    item.nearbyFacilities
                                                        .activities
                                                }{' '}
                                                Activities
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start justify-between gap-1">
                                            <FaTrainSubway />
                                            <p className="text-sm">
                                                {
                                                    item.nearbyFacilities
                                                        .transfers
                                                }{' '}
                                                Transfers
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start gap-1">
                                        <h3 className="text-xl font-semibold capitalize">
                                            {item.name}
                                        </h3>
                                        <div className="flex items-center gap-1">
                                            <FaStar className="text-yellow" />
                                            <p className="font-semibold leading-none">
                                                {item.ratings}
                                            </p>{' '}
                                            <p className="text-sm leading-none text-gray-600">
                                                ({item.reviews})
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-between gap-3">
                                        {item.stays.map((stay, index) => (
                                            <p
                                                key={index}
                                                className="font-semibold"
                                            >
                                                {stay}
                                            </p>
                                        ))}
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <p className="text-lg font-semibold text-blue">
                                            LKR{item.price.toLocaleString()}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            For {item.persons} Persons
                                        </p>
                                    </div>
                                </div>
                            </ProductCard>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    )
}

export default SimilarDestinationSection
