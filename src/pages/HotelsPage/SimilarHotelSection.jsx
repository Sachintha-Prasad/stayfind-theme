import React from 'react'
import SectionHeading from '../../components/SectionHeading'
import ProductCard from '../../components/Cards/ProductCard'
import { FaCheck, FaAngleLeft, FaAngleRight, FaStar } from 'react-icons/fa'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const SimilarHotelSection = () => {
    const similarHotelList = [
        {
            name: 'Hotel Beach Resort',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEVl6p3r_zLZmpaBI1SxOAX6DzEH9txtuQFQ&s',
            location: 'Colombo',
            distance: '3.5Km',
            cancellationDueDate: '10 Aug 2024',
            amenities: [
                'cooling',
                'pet allow',
                'free WIFI',
                'food',
                'parking',
                'spa & massage',
            ],
            price: 20000,
            discount: 15,
            reviews: 3244,
            ratings: 4.8,
        },
        {
            name: 'Hotel Appalo',
            imgUrl: 'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/900/450/75/dam/wdpro-assets/dlr/places-to-stay/disneyland-hotel/resort-overview/disneyland-hotel-06.jpg?1719924985224',
            location: 'Colombo',
            distance: '3.5Km',
            cancellationDueDate: '10 Aug 2024',
            amenities: [
                'cooling',
                'pet allow',
                'free WIFI',
                'food',
                'parking',
                'spa & massage',
            ],
            price: 32500,
            discount: 20,
            reviews: 124,
            ratings: 4.2,
        },
        {
            name: 'Hotel Beach Resort',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNMqZkBfac8ZdXRQWa2RUoIH44CX06fZiiXA&s',
            location: 'Colombo',
            distance: '3.5Km',
            cancellationDueDate: '10 Aug 2024',
            amenities: [
                'cooling',
                'pet allow',
                'free WIFI',
                'food',
                'parking',
                'spa & massage',
            ],
            price: 20000,
            discount: 15,
            reviews: 3244,
            ratings: 4.8,
        },
        {
            name: 'Hotel Beach Resort',
            imgUrl: 'https://thumbs.dreamstime.com/b/luxury-hotel-4480742.jpg',
            location: 'Colombo',
            distance: '3.5Km',
            cancellationDueDate: '10 Aug 2024',
            amenities: [
                'cooling',
                'pet allow',
                'free WIFI',
                'food',
                'parking',
                'spa & massage',
            ],
            price: 20000,
            discount: 15,
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
        <section className="bg-white">
            <div className="container flex flex-col gap-3 py-6">
                <SectionHeading title={'Similar Hotels & Resorts'} />

                <Carousel
                    responsive={responsive}
                    draggable={true}
                    itemClass="px-1.5"
                    customLeftArrow={<CustomLeftArrow />}
                    customRightArrow={<CustomRightArrow />}
                >
                    {similarHotelList.map((item, index) => (
                        <div
                            key={index}
                            className="mb-1 rounded-lg border border-dashed border-gray-300"
                        >
                            <ProductCard imgUrl={item.imgUrl} path={'#'}>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-lg font-semibold capitalize">
                                            {item.name}
                                        </h3>
                                        <p className="capitalize">
                                            {item.location} | {item.distance}{' '}
                                            From {item.location}
                                        </p>
                                    </div>
                                    <p className="w-fit rounded bg-green-600/10 px-3 py-1 text-[13px] font-medium capitalize text-green-600">
                                        free cancellation till{' '}
                                        {item.cancellationDueDate}
                                    </p>
                                    <div className="flex flex-wrap items-center gap-3">
                                        {item.amenities.map(
                                            (amenity, index) => (
                                                <p
                                                    key={index}
                                                    className="flex items-center gap-1 text-center capitalize"
                                                >
                                                    <FaCheck className="text-green-600" />{' '}
                                                    {amenity}
                                                </p>
                                            )
                                        )}
                                    </div>
                                    <div className="flex flex-wrap items-end justify-between gap-2">
                                        <div className="flex flex-col gap-2">
                                            <p className="w-fit rounded bg-yellow px-3 py-1 text-[13px] font-medium capitalize text-white">
                                                {item.discount}% off
                                            </p>
                                            <div className="flex flex-col-reverse items-start gap-0 leading-none md:flex-row md:items-center md:gap-1">
                                                <p className="text-2xl font-semibold">
                                                    LKR{' '}
                                                    {item.price.toLocaleString()}
                                                </p>
                                                <p className="line-through">
                                                    LKR{' '}
                                                    {(
                                                        item.price +
                                                        (item.price *
                                                            item.discount) /
                                                            100
                                                    ).toLocaleString()}
                                                </p>
                                            </div>
                                            <p className="text-[13px] capitalize text-gray-500">
                                                per night
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start gap-2">
                                            <div className="flex flex-col text-sm">
                                                <p className="font-medium capitalize">
                                                    exceptional
                                                </p>
                                                <p className="capitalize text-gray-500">
                                                    {item.reviews} reviews
                                                </p>
                                            </div>
                                            <div className="w-full rounded bg-blue p-1 text-center text-lg text-white">
                                                {item.ratings}
                                            </div>
                                        </div>
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

export default SimilarHotelSection
