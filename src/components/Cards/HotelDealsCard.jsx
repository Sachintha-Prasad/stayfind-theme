import React from 'react'

const HotelDealsCard = ({ imgUrl, title }) => {
    return (
        <div className="max-h-[500px] min-h-[300px] w-full overflow-hidden rounded-lg shadow-lg shadow-gray-300/60">
            <div className="group relative h-full w-full overflow-hidden">
                <div className="absolute inset-0 z-10 flex flex-col justify-end gap-3 p-4">
                    <h2 className="text-2xl font-bold text-white">{title}</h2>
                    <a
                        href="#"
                        className="cta-btn w-full justify-center bg-blue py-2 text-center text-lg font-medium text-white"
                    >
                        Go Now
                    </a>
                </div>
                <div className="absolute inset-0 z-[5] bg-black/40"></div>
                <img
                    src={imgUrl}
                    alt=""
                    className="custom-transition h-full w-full object-cover object-center group-hover:scale-110"
                />
            </div>
        </div>
    )
}

export default HotelDealsCard
