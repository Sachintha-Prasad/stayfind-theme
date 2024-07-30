import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevPage = () => {
        if (currentPage > 1) onPageChange(currentPage - 1)
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1)
    }

    return (
        <div className="flex justify-center gap-3 rounded-md border border-gray-300 py-1">
            <button
                className="rounded-l-lg px-3 py-1"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
            >
                <FaArrowLeftLong />
            </button>
            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    className={`rounded px-3 py-1 ${currentPage === index + 1 ? 'bg-blue text-white' : ''}`}
                    onClick={() => onPageChange(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
            <button
                className="rounded-r-lg px-3 py-1"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
            >
                <FaArrowRightLong />
            </button>
        </div>
    )
}

export default Pagination
