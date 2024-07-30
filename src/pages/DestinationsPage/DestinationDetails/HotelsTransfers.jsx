import React from 'react'
import { FaRegCircleCheck } from 'react-icons/fa6'
import airlineLogo from '../../../assets/images/airlines-logo.png'
import { FaPlane } from 'react-icons/fa6'
import ReviewStars from '../../../components/ReviewStars'

const HotelsTransfers = () => {
    return (
        <div className="flex flex-col gap-6">
            {/* flight details container */}
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                    <FaRegCircleCheck className="text-lg" />
                    <h2 className="text-lg font-semibold">Flight details</h2>
                </div>

                <div className="rounded-md border border-gray-300 px-4 py-4 sm:px-6">
                    <div className="flex items-center gap-2">
                        <p className="w-fit rounded bg-yellow/10 px-3 py-1 text-[13px] font-medium capitalize text-yellow">
                            departure
                        </p>
                        <p className="text-xs text-gray-500">08 Jul 2024</p>
                    </div>

                    <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center sm:gap-3">
                        <div className="flex items-center gap-2">
                            <img
                                src={airlineLogo}
                                alt="sri lanka air lines logo"
                                className="max-w-16"
                            />
                            <div className="min-w-[150px]">
                                <h3 className="font-semibold capitalize">
                                    sri lankan air lines
                                </h3>
                                <p className="text-sm capitalize text-gray-500">
                                    first class
                                </p>
                            </div>
                        </div>

                        <div className="flex w-full max-w-[600px] items-center gap-2">
                            <div>
                                <h3 className="font-semibold capitalize">
                                    07:40
                                </h3>
                                <p className="text-sm capitalize text-gray-500">
                                    DOH
                                </p>
                            </div>
                            <div className="flex w-full items-center">
                                <div className="h-3 w-3 rounded-full border-[2px] border-gray-300"></div>
                                <div className="relative w-full border border-dashed border-gray-300">
                                    <div className="absolute left-1/2 top-0 flex w-full -translate-x-1/2 -translate-y-2.5 flex-col items-center gap-1 text-gray-400">
                                        <FaPlane className="text-lg" />
                                        <p className="text-sm font-medium capitalize">
                                            direct
                                        </p>
                                    </div>
                                </div>
                                <div className="h-3 w-3 rounded-full border-[2px] border-gray-300 bg-gray-300"></div>
                            </div>
                            <div>
                                <h3 className="font-semibold capitalize">
                                    12:20
                                </h3>
                                <p className="text-sm capitalize text-gray-500">
                                    DEL
                                </p>
                            </div>
                        </div>

                        <div className="flex min-w-[80px] flex-col items-end">
                            <h3 className="font-semibold capitalize">4H 40M</h3>
                            <p className="text-sm capitalize text-gray-500">
                                2 stops
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* check in hotel container */}
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                    <FaRegCircleCheck className="text-lg" />
                    <h2 className="text-lg font-semibold">Check-In to Hotel</h2>
                </div>

                <div className="flex flex-col gap-3 rounded-md border border-gray-300 px-4 py-4 sm:flex-row sm:px-6">
                    <div className="flex max-h-[300px] items-center justify-center overflow-hidden rounded sm:max-w-[250px]">
                        <img
                            src="https://shreethemes.net/geotrip-live/geotrip/assets/img/hotel/hotel-1.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <ReviewStars />
                            <h2 className="text-lg font-bold capitalize">
                                Hotel Chancellor@Orchard
                            </h2>
                            <div className="flex flex-wrap items-center gap-2">
                                <p className="text-sm text-gray-500">
                                    Waterloo and Southwark . 9.8 km from Delhi
                                    Airport .
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
                            <div className="w-fit rounded border border-dashed border-gray-400 px-3 py-1 text-[13px] capitalize text-gray-400">
                                WIFI
                            </div>
                            <div className="w-fit rounded border border-dashed border-gray-400 px-3 py-1 text-[13px] capitalize text-gray-400">
                                eating
                            </div>
                            <div className="w-fit rounded border border-dashed border-gray-400 px-3 py-1 text-[13px] capitalize text-gray-400">
                                cooling
                            </div>
                            <div className="w-fit rounded border border-dashed border-gray-400 px-3 py-1 text-[13px] capitalize text-gray-400">
                                pet
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <p>Standard Twin Double Room</p>
                            <p className="text-sm text-gray-500">
                                Last booed 25min ago
                            </p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <p className="w-fit rounded bg-green-500/10 px-3 py-1 text-[13px] font-medium text-green-500">
                                Free Cancellation, till 1 hour of Pick up
                            </p>
                            <div className="flex flex-wrap items-center gap-2">
                                <p className="text-sm text-gray-500">
                                    Room type: Standard King Room
                                </p>
                                <a
                                    href="#"
                                    className="text-sm font-medium text-blue"
                                >
                                    Change Room
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* today activity container */}
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                    <FaRegCircleCheck className="text-lg" />
                    <h2 className="text-lg font-semibold">Today's Activity</h2>
                </div>

                <div className="flex flex-col gap-3 rounded-md border border-gray-300 px-4 py-4 sm:flex-row sm:px-6">
                    <div className="flex max-h-[300px] items-center justify-center overflow-hidden rounded sm:max-w-[250px]">
                        <img
                            src="https://shreethemes.net/geotrip-live/geotrip/assets/img/destination/tr-3.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <p className="w-fit rounded bg-green-500/10 px-3 py-1 text-[13px] font-medium text-green-500">
                                Denver
                            </p>
                            <h2 className="text-lg font-bold capitalize">
                                Wetlands Walking Tour
                            </h2>
                            <p className="text-sm text-gray-500">
                                Southwark . 9km from Towndown
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 pt-2">
                            <div className="w-fit rounded border border-dashed border-gray-400 px-3 py-1 text-[13px] capitalize text-gray-400">
                                Water Fall
                            </div>
                            <div className="w-fit rounded border border-dashed border-gray-400 px-3 py-1 text-[13px] capitalize text-gray-400">
                                Musium
                            </div>
                            <div className="w-fit rounded border border-dashed border-gray-400 px-3 py-1 text-[13px] capitalize text-gray-400">
                                Tanah Lot Tour
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                            <div className="flex items-center gap-1">
                                <p className="capitalize">duration:</p>
                                <p className="font-medium">7 hrs</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <p className="capitalize">place covered:</p>
                                <p className="font-medium">4</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelsTransfers
