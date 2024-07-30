import React from 'react'

const PromotionCard = ({ imgUrl, type, validDate }) => {
    return (
        <a
            href="#"
            className="flex items-center gap-3 rounded-lg border-[1px] border-gray-300 bg-white p-2 lg:items-start"
        >
            <div className="h-24 min-w-20 max-w-32 overflow-hidden rounded-md">
                <img
                    src={imgUrl}
                    alt=""
                    className="h-24 w-24 object-cover object-center"
                />
            </div>

            <div className="flex flex-col gap-1 p-2">
                <h2 className="text-[22px] font-bold leading-[1.2]">{type}</h2>
                <p className="text-sm font-medium text-gray-400">
                    Valid {validDate}
                </p>
            </div>
        </a>
    )
}

export default PromotionCard
