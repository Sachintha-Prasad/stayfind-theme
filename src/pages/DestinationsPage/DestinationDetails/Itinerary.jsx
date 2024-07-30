import React, { useRef, useState } from 'react'
import { FaCaretDown } from 'react-icons/fa6'
import { MdHotel } from 'react-icons/md'
import { MdFreeBreakfast } from 'react-icons/md'
import { FaSpa } from 'react-icons/fa'

const Itinerary = () => {
    const [activeIndex, setActiveIndex] = useState(null)
    const contentHeight = useRef()

    const itineraryList = [
        {
            day: '01',
            endDestination:
                'Toronto: Arrival, Transfer to Niagara and Leisure Day',
            specialTags: ['arrival', 'lesuire day'],
            description:
                'After safe landing at the Toronto International Airport, you will be escorted to the hotel of Niagara Falls after a meet and greet. Upon reaching the hotel, our representative will support you with the check-in process. You will then take rest for the noon in your rooms. Later in the evening, we will visit Niagara Falls and you will be enchanted by the views and the colorful rainbows at the falls. After that, you can go and see other places in Toronto on your own. But don’t miss the magical sight of Niagara Falls at night. Later, we will get back to the hotel and stay overnight.',
            facilities: {
                sightseeing: true,
                breakfast: true,
                stayIncluded: true,
            },
            imgList: [
                'https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-1.jpg',
                'https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-2.jpg',
                'https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-3.jpg',
                'https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-4.jpg',
            ],
        },
        {
            day: '02',
            endDestination:
                'Toronto: Arrival, Transfer to Niagara and Leisure Day',
            specialTags: ['arrival', 'lesuire day'],
            description:
                'After safe landing at the Toronto International Airport, you will be escorted to the hotel of Niagara Falls after a meet and greet. Upon reaching the hotel, our representative will support you with the check-in process. You will then take rest for the noon in your rooms. Later in the evening, we will visit Niagara Falls and you will be enchanted by the views and the colorful rainbows at the falls. After that, you can go and see other places in Toronto on your own. But don’t miss the magical sight of Niagara Falls at night. Later, we will get back to the hotel and stay overnight.',
            facilities: {
                sightseeing: true,
                breakfast: true,
                stayIncluded: true,
            },
            imgList: [
                'https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-1.jpg',
                'https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-2.jpg',
                'https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-3.jpg',
                'https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-4.jpg',
            ],
        },
        {
            day: '03',
            endDestination:
                'Toronto: Arrival, Transfer to Niagara and Leisure Day',
            specialTags: ['arrival', 'lesuire day'],
            description:
                'After safe landing at the Toronto International Airport, you will be escorted to the hotel of Niagara Falls after a meet and greet. Upon reaching the hotel, our representative will support you with the check-in process. You will then take rest for the noon in your rooms. Later in the evening, we will visit Niagara Falls and you will be enchanted by the views and the colorful rainbows at the falls. After that, you can go and see other places in Toronto on your own. But don’t miss the magical sight of Niagara Falls at night. Later, we will get back to the hotel and stay overnight.',
            facilities: {
                sightseeing: true,
                breakfast: false,
                stayIncluded: true,
            },
            imgList: [
                'https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-1.jpg',
                'https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-2.jpg',
                'https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-3.jpg',
                'https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-4.jpg',
            ],
        },
        {
            day: '04',
            endDestination:
                'Toronto: Arrival, Transfer to Niagara and Leisure Day',
            specialTags: ['arrival', 'lesuire day'],
            description:
                'After safe landing at the Toronto International Airport, you will be escorted to the hotel of Niagara Falls after a meet and greet. Upon reaching the hotel, our representative will support you with the check-in process. You will then take rest for the noon in your rooms. Later in the evening, we will visit Niagara Falls and you will be enchanted by the views and the colorful rainbows at the falls. After that, you can go and see other places in Toronto on your own. But don’t miss the magical sight of Niagara Falls at night. Later, we will get back to the hotel and stay overnight.',
            facilities: {
                sightseeing: true,
                breakfast: true,
                stayIncluded: true,
            },
            imgList: [
                'https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-1.jpg',
                'https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-2.jpg',
                'https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-3.jpg',
                'https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-4.jpg',
            ],
        },
        {
            day: '05',
            endDestination:
                'Toronto: Arrival, Transfer to Niagara and Leisure Day',
            specialTags: ['arrival', 'lesuire day'],
            description:
                'After safe landing at the Toronto International Airport, you will be escorted to the hotel of Niagara Falls after a meet and greet. Upon reaching the hotel, our representative will support you with the check-in process. You will then take rest for the noon in your rooms. Later in the evening, we will visit Niagara Falls and you will be enchanted by the views and the colorful rainbows at the falls. After that, you can go and see other places in Toronto on your own. But don’t miss the magical sight of Niagara Falls at night. Later, we will get back to the hotel and stay overnight.',
            facilities: {
                sightseeing: true,
                breakfast: true,
                stayIncluded: true,
            },
            imgList: [
                'https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-1.jpg',
                'https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-2.jpg',
                'https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-3.jpg',
                'https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-4.jpg',
            ],
        },
    ]

    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
    }

    return (
        <div className="w-full">
            <div className="flex flex-col gap-3">
                {itineraryList.map((item, index) => (
                    <div
                        key={index}
                        className="w-full overflow-hidden rounded-md border border-gray-300 bg-white"
                    >
                        <button
                            onClick={() => handleItemClick(index)}
                            className={`custom-transition flex w-full items-center justify-between px-4 py-4 sm:px-6 ${
                                activeIndex === index && 'bg-indigo-50'
                            }`}
                        >
                            <div
                                className={`flex flex-wrap items-center gap-2 text-start ${activeIndex === index && 'text-blue'}`}
                            >
                                <h3 className="text-lg font-semibold">
                                    Day {item.day}
                                </h3>
                                <p>{item.endDestination}</p>
                            </div>
                            <div className="rounded-full bg-indigo-100 p-2 text-lg">
                                <FaCaretDown
                                    className={`custom-transition ${activeIndex === index && 'rotate-180 text-blue'}`}
                                />
                            </div>
                        </button>

                        <div
                            ref={contentHeight}
                            className="custom-transition"
                            style={{
                                height:
                                    activeIndex === index
                                        ? contentHeight.current.scrollHeight
                                        : '0px',
                            }}
                        >
                            <div className="flex flex-col gap-3 p-6">
                                <div className="flex flex-wrap items-start gap-3">
                                    {item.specialTags.map((tag, index) => (
                                        <p
                                            key={index}
                                            className="w-fit rounded bg-green-600/10 px-3 py-1 text-[13px] font-medium capitalize text-green-600"
                                        >
                                            {tag}
                                        </p>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    {item.facilities.sightseeing && (
                                        <div className="flex items-center gap-2">
                                            <FaSpa className="text-lg text-gray-600" />
                                            <p className="capitalize text-gray-600">
                                                sightseeing
                                            </p>
                                        </div>
                                    )}
                                    {item.facilities.breakfast && (
                                        <div className="flex items-center gap-2">
                                            <MdFreeBreakfast className="text-lg text-gray-600" />
                                            <p className="capitalize text-gray-600">
                                                breakfast
                                            </p>
                                        </div>
                                    )}
                                    {item.facilities.stayIncluded && (
                                        <div className="flex items-center gap-2">
                                            <MdHotel className="text-lg text-gray-600" />
                                            <p className="capitalize text-gray-600">
                                                stay included
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <p>{item.description}</p>

                                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                    {item.imgList.map((img, index) => (
                                        <div
                                            key={index}
                                            className="flex max-h-[150px] w-full items-center justify-center overflow-hidden rounded"
                                        >
                                            <img
                                                src={img}
                                                alt=""
                                                className="h-[200px] w-full object-cover object-center"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Itinerary
