import React from 'react'
import { FaCircleQuestion } from 'react-icons/fa6'

const RoomDetailsCard = ({ details }) => {
    return (
        <div className="flex w-full flex-col gap-4 rounded-lg bg-white py-4">
            <h2 className="px-4 font-semibold capitalize sm:px-6">
                {details.roomType}
            </h2>

            <hr className="h-[1px] w-full bg-gray-300" />

            <div className="grid gap-x-6 gap-y-4 px-4 sm:grid-cols-3 sm:px-6 lg:grid-cols-4">
                {/* main details */}
                <div className="flex flex-col gap-4">
                    <div className="flex max-h-[200px] w-full items-center justify-center overflow-hidden rounded">
                        <img
                            src={details.roomImgUrl}
                            alt={details.roomType}
                            className="h-[200px] w-full object-cover object-center"
                        />
                    </div>
                    <div className="flex flex-wrap items-center justify-start gap-2">
                        {details.specialTags.map((tag, index) => (
                            <p
                                key={index}
                                className="w-fit rounded bg-indigo-100 px-3 py-1 text-[13px] font-medium capitalize text-blue"
                            >
                                {tag}
                            </p>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        {details.roomAmenties.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2"
                            >
                                <div className="text-sm">{item.icon}</div>
                                <p className="text-[13px] capitalize">
                                    {item.type}
                                </p>
                            </div>
                        ))}
                    </div>
                    <button className="self-start font-medium text-blue">
                        Show more room amenties
                    </button>
                </div>

                {/* package cards */}
                <div className="flex w-full flex-col gap-4 sm:col-span-2 lg:col-span-3">
                    {details.packages.map((pack, index) => (
                        <div
                            key={index}
                            className="flex w-full flex-col items-start justify-between gap-6 rounded-md border border-dashed border-gray-300 p-4 sm:flex-row"
                        >
                            <div className="flex w-full flex-col gap-4">
                                <div className="flex items-center gap-1">
                                    <h3 className="font-semibold">
                                        Your Choice
                                    </h3>
                                    <a href="#" title={pack.packageType}>
                                        <FaCircleQuestion className="text-gray-400" />
                                    </a>
                                </div>
                                <div className="flex flex-wrap gap-x-6 gap-y-3 md:flex-col">
                                    {pack.facilities.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2"
                                        >
                                            <div className="text-sm">
                                                {item.icon}
                                            </div>
                                            <p className="text-sm capitalize">
                                                {item.type}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex w-full flex-col gap-3 sm:items-end">
                                <h3 className="text-2xl font-semibold">
                                    LKR{pack.price.toLocaleString()}
                                </h3>
                                <div className="flex flex-col gap-2 sm:items-end">
                                    <button className="custom-transition cta-btn bg-indigo-100 px-4 py-2 text-blue hover:bg-blue hover:text-white">
                                        Book at This Price
                                    </button>
                                    <button className="cta-btn bg-blue px-6 py-2 text-white">
                                        Access lower Price
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RoomDetailsCard
