import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

const ReviewStars = () => {
    return (
        <div className="flex items-center gap-[2px] text-sm text-yellow">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
        </div>
    )
}

export default ReviewStars
