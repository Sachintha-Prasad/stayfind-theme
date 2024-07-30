import React, { useState, useRef } from 'react'
import FaqItem from './FaqItem'

const FAQs = ({ faqList }) => {
    const [activeIndex, setActiveIndex] = useState(null)

    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
    }

    return (
        <div className="w-full">
            <div className="flex flex-col gap-3">
                {faqList.map((item, index) => (
                    <FaqItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={activeIndex === index}
                        onClick={() => handleItemClick(index)}
                    ></FaqItem>
                ))}
            </div>
        </div>
    )
}

export default FAQs
