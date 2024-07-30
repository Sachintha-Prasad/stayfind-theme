import React from 'react'
import { FaArrowTrendUp } from 'react-icons/fa6'

const PopularDestinationCard = ({ imgUrl, location, facilities }) => {
    return (
        <div className="group h-[400px] w-full overflow-hidden rounded-lg shadow-lg shadow-gray-300/60 outline-none">
            <div className="group relative h-full w-full overflow-hidden">
                <div className="custom-transition absolute left-0 right-0 top-0 z-10 flex -translate-y-full flex-col gap-3 px-4 py-6 group-hover:translate-y-0 group-focus:translate-y-0">
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {facilities.map((item, index) => (
                            <div
                                key={index}
                                className="min-w-[100px] rounded bg-gray-400/30 px-3 py-1 text-center text-[13px] font-medium text-white"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="custom-transition absolute bottom-0 left-0 right-0 z-10 flex translate-y-1/2 flex-col justify-end gap-3 px-4 py-6 group-hover:translate-y-0 group-focus:translate-y-0">
                    <h2 className="text-center text-3xl font-bold text-white">
                        {location}
                    </h2>
                    <a
                        href="#"
                        className="cta-btn custom-transition w-full justify-center bg-white py-2 text-center text-lg font-medium hover:bg-blue hover:text-white"
                    >
                        Discover
                        <FaArrowTrendUp className="w-4" />
                    </a>
                </div>

                <div className="custom-transition absolute inset-0 z-[5] bg-black/5 group-hover:bg-gradient"></div>

                <img
                    src={imgUrl}
                    alt=""
                    className="h-full w-full object-cover object-center"
                />
            </div>
        </div>
    )
}

export default PopularDestinationCard
