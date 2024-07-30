import React from 'react'
import ImageGallery from '../../components/ImageGallery'
import ReviewsStars from '../../components/ReviewStars'
import { MdLocationOn } from 'react-icons/md'

const HotelOverviewSection = () => {
    const images = [
        {
            src: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'Image 1',
        },
        {
            src: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'Image 2',
        },
        {
            src: 'https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'Image 3',
        },
        {
            src: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'Image 4',
        },
        {
            src: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'Image 5',
        },
        {
            src: 'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'Image 6',
        },
        {
            src: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'Image 7',
        },
        {
            src: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'Image 8',
        },
        {
            src: 'https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            alt: 'Image 9',
        },
    ]

    return (
        <section>
            <div className="container pt-6">
                <div className="flex flex-col gap-3 rounded-lg bg-white px-4 py-4 md:px-6">
                    {/* overview header */}
                    <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-3">
                                <p className="w-fit rounded bg-green-600/10 px-3 py-1 text-[13px] font-medium capitalize text-green-600">
                                    health protected
                                </p>
                                <ReviewsStars />
                            </div>
                            <h2 className="text-2xl font-bold capitalize">
                                Hotel taversary
                            </h2>
                            <div className="flex flex-wrap items-center gap-2">
                                <MdLocationOn />
                                <p>
                                    77 Main street, 1st lane, Kandy, 245652 Sri
                                    Lanka.
                                </p>
                                <a href="#" className="font-medium text-blue">
                                    Show on Map
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 md:flex-row">
                            <div className="flex flex-row-reverse items-start gap-1 md:flex-col">
                                <p className="text-2xl font-semibold">
                                    LKR25,000
                                </p>
                                <p className="w-fit rounded bg-yellow px-3 py-1 text-[13px] font-medium capitalize text-white">
                                    15% off
                                </p>
                            </div>
                            <button className="cta-btn bg-blue text-base text-white">
                                Select Rooms
                            </button>
                        </div>
                    </div>

                    {/* image gallery */}
                    <ImageGallery images={images} thumbnailCount={7} />
                </div>
            </div>
        </section>
    )
}

export default HotelOverviewSection
