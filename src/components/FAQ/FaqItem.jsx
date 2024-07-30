import React, { useRef } from 'react'
import { FaCaretDown } from 'react-icons/fa6'

const FaqItem = ({ question, answer, isOpen, onClick }) => {
    const contentHeight = useRef()

    return (
        <div className="w-full overflow-hidden rounded-md border border-gray-300 bg-white">
            <button
                onClick={onClick}
                className={`custom-transition flex w-full items-center justify-between px-4 py-4 sm:px-6 ${isOpen && 'bg-indigo-50'}`}
            >
                <div className={`font-semibold ${isOpen && 'text-blue'}`}>
                    {question}
                </div>
                <div className="rounded-full bg-indigo-100 p-2 text-lg">
                    <FaCaretDown
                        className={`custom-transition ${isOpen && 'rotate-180 text-blue'}`}
                    />
                </div>
            </button>

            <div
                ref={contentHeight}
                className="custom-transition"
                style={
                    isOpen
                        ? { height: contentHeight.current.scrollHeight }
                        : { height: '0px' }
                }
            >
                <p className="p-6">{answer}</p>
            </div>
        </div>
    )
}

export default FaqItem
