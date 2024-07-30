import React from 'react'
import PopularDestinationCard from '../../components/Cards/PopularDestinationCard'
import SectionHeading from '../../components/SectionHeading'
import HotelDealsCard from '../../components/Cards/HotelDealsCard'

const PopoularDestinationSection = () => {
    const popularDestinationsList = [
        {
            imgUrl: 'https://i.pinimg.com/originals/e2/f6/8b/e2f68b103a49a640cf31164fcf07a131.jpg',
            location: 'Colombo',
            destinationFacilites: [
                '10 Hotels',
                '100 Cars',
                '5 Tours',
                '25 Events',
            ],
        },
        {
            imgUrl: 'https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/64166deb-5566-459e-9c4d-a4d8413c97fd/The_Common_Wanderer_-4336.jpg',
            location: 'Kandy',
            destinationFacilites: [
                '10 Hotels',
                '100 Cars',
                '5 Tours',
                '25 Events',
            ],
        },
        {
            imgUrl: 'https://www.muchbetteradventures.com/magazine/content/images/2023/06/sigiriya.jpg',
            location: 'Sigirya',
            destinationFacilites: [
                '10 Hotels',
                '100 Cars',
                '5 Tours',
                '25 Events',
            ],
        },
        {
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzqxtN8fUlLswZ6PF0Nlo3d8URlOBxNid4wg&s',
            location: 'Nuwara Eliya',
            destinationFacilites: [
                '10 Hotels',
                '100 Cars',
                '5 Tours',
                '25 Events',
            ],
        },
    ]

    return (
        <section>
            <div className="container flex flex-col gap-6 pt-12">
                <SectionHeading title={'Browse popular destinations'} />

                <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {popularDestinationsList.map((item, index) => (
                        <PopularDestinationCard
                            key={index}
                            imgUrl={item.imgUrl}
                            location={item.location}
                            facilities={item.destinationFacilites}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PopoularDestinationSection
