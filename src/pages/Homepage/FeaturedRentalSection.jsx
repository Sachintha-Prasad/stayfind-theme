import React from 'react'
import ProductCard from '../../components/Cards/ProductCard'
import { GoArrowSwitch } from 'react-icons/go'
import SectionHeading from '../../components/SectionHeading'
import HotelDealsCard from '../../components/Cards/HotelDealsCard'
import ReviewStars from '../../components/ReviewStars'

const FeaturedRentalSection = () => {
    const rentalList = [
        {
            imgUrl: 'https://colomborealtors.lk/wp-content/uploads/2021/08/shangri-la-one-galle-face-luxury-apartments-residencies-rent-lease-sri-lanka-sl-colombo-realtors-lk.jpg',
            rentalType: 'House',
            rentalOwners: 'Brick Lane Realty',
            rentalFacilities: ['3 Beds', '2 Baths', '2100 sqft'],
            discounts: '15%',
            price: 20000,
            reviews: 4.5,
            reviewCount: 295,
        },
        {
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaraGuAu_YpyuTfMAqtmphKbcpBBnY4-wL-L9bsEXT20NxEFCZdM0msXC2FAVv-EwqJhs&usqp=CAU',
            rentalType: 'Apartment',
            rentalOwners: 'Happy Real Estate',
            rentalFacilities: ['2 Beds', '1 Baths', '1900 sqft'],
            discounts: '12.5%',
            price: 10000,
            reviews: 4.8,
            reviewCount: 120,
        },
        {
            imgUrl: 'https://cf-img.villa-finder.com/cf/m/villas/gangananda/gangananda-img-3677-5d7b36413f064.jpg',
            rentalType: 'Villa',
            rentalOwners: 'Villa house',
            rentalFacilities: ['4 Beds', '2 Baths', '4500 sqft'],
            discounts: '10%',
            price: 40000,
            reviews: 4.1,
            reviewCount: 58,
        },
    ]

    return (
        <section>
            <div className="container flex flex-col gap-6 pt-12">
                <SectionHeading title={'Featured rental in Sri Lanka'} />

                <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <HotelDealsCard
                        imgUrl={
                            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/271276120.jpg?k=4914ae8c9aa427f7b145b0c041e0474bb273dabd024d23447f5af46a913976fa&o=&hp=1'
                        }
                        title="Discover great deals on hotels around the Sri Lanka"
                    />

                    {rentalList.map((item, index) => (
                        <ProductCard
                            key={index}
                            imgUrl={item.imgUrl}
                            path={'#'}
                        >
                            <div className="flex flex-col gap-1">
                                <div className="w-fit rounded bg-green-500/10 px-3 py-1 text-[13px] font-medium text-green-500">
                                    {item.rentalType}
                                </div>
                                <h2 className="text-lg font-bold">
                                    {item.rentalOwners}
                                </h2>
                            </div>

                            <div className="flex items-center gap-2 pt-2">
                                {item.rentalFacilities.map((elm, index) => (
                                    <div
                                        key={index}
                                        className="w-fit rounded border border-dashed border-gray-400 px-3 py-1 text-[13px] text-gray-400"
                                    >
                                        {elm}
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-end justify-between gap-2 pt-6">
                                <div className="flex flex-col gap-2">
                                    <div className="w-fit rounded bg-yellow/10 px-3 py-1 text-[13px] font-medium text-yellow">
                                        {item.discounts} Off
                                    </div>
                                    <p className="flex flex-wrap items-center gap-1 text-lg font-bold leading-none md:text-xl md:leading-none">
                                        <span className="text-sm font-normal">
                                            From
                                        </span>
                                        LKR {item.price.toLocaleString()}
                                    </p>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <ReviewStars />
                                    <p className="flex items-center gap-1 text-lg font-bold leading-none">
                                        {item.reviews}
                                        <span className="text-sm font-normal text-gray-400">
                                            ({item.reviewCount})
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </ProductCard>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedRentalSection
