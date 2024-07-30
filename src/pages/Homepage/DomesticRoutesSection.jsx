import React from 'react'
import ProductCard from '../../components/Cards/ProductCard'
import SectionHeading from '../../components/SectionHeading'
import HotelDealsCard from '../../components/Cards/HotelDealsCard'
import arrowLeftRight from '../../assets/images/arrows-left-right-icon.svg'

const DomesticRoutesSection = () => {
    const domesticRoutesList = [
        {
            imgUrl: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2023/11/20165441/galle-fort.jpg?tr=w-1920',
            from: 'Colombo',
            to: 'Galle fort',
            tripType: 'Round-trip',
            duration: '1 day',
            price: 5000,
        },
        {
            imgUrl: 'https://www.resplendentceylon.com/wp-content/uploads/sites/3/2021/12/Hike-to-Adams-Peak-800x685-3.jpg',
            from: 'Colombo',
            to: "Adam's peak",
            tripType: 'Round-trip',
            duration: '2 days',
            price: 10000,
        },
        {
            imgUrl: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2023/11/20172113/mirissa.jpg?tr=w-1920',
            from: 'Colombo',
            to: 'Mirissa',
            tripType: 'Round-trip',
            duration: '1 days',
            price: 8000,
        },
    ]

    return (
        <section>
            <div className="container flex flex-col gap-6 pt-12">
                <SectionHeading title={'Explore top domestic routes'} />

                <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {domesticRoutesList.map((item, index) => (
                        <ProductCard
                            key={index}
                            imgUrl={item.imgUrl}
                            path={'#'}
                        >
                            <div className="flex items-center gap-2">
                                <p className="text-lg font-semibold">
                                    {item.from}
                                </p>
                                <img
                                    src={arrowLeftRight}
                                    alt=""
                                    className="max-w-[25px]"
                                />
                                <p className="text-lg font-semibold">
                                    {item.to}
                                </p>
                            </div>

                            <div className="flex items-center gap-2 pt-1 text-sm text-gray-500">
                                <p>{item.tripType}</p>
                                <div className="h-[10px] w-[1px] bg-slate-400"></div>
                                <p>{item.duration}</p>
                            </div>

                            <p className="pt-2 text-end">
                                <span className="text-sm">From </span>
                                <span className="text-2xl font-bold">
                                    LKR {item.price.toLocaleString()}
                                </span>
                            </p>
                        </ProductCard>
                    ))}
                    <HotelDealsCard
                        imgUrl={
                            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/75/d8/95/infinity-pool.jpg?w=1200&h=-1&s=1'
                        }
                        title="Discover great deals on hotels around the world"
                    />
                </div>
            </div>
        </section>
    )
}

export default DomesticRoutesSection
