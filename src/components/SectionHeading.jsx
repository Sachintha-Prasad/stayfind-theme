import React from 'react'
import { FaArrowTrendUp } from 'react-icons/fa6'

const SectionHeading = ({ title }) => {
    return (
        <div className="flex w-full items-center justify-between gap-2">
            <h2 className="max-w-36 text-lg font-semibold capitalize min-[400px]:max-w-[600px]">
                {title}
            </h2>
            <a
                href="#"
                className="custom-transition cta-btn gap-2 rounded-md bg-indigo-200 px-6 py-2 text-base font-medium text-blue hover:bg-blue hover:text-white focus:bg-blue focus:text-white"
            >
                More
                <FaArrowTrendUp className="w-4" />
            </a>
        </div>
    )
}

export default SectionHeading
