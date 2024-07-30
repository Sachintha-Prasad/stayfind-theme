import React, { useState, useRef } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { FaAngleLeft, FaAngleRight, FaCaretRight } from 'react-icons/fa'
import { createPortal } from 'react-dom'

const ImageGallery = ({ images, thumbnailCount }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const mainCarouselRef = useRef(null)

    const thumbnailsImg = images.slice(0, thumbnailCount)

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 968 },
            items: 2,
        },
        tablet: {
            breakpoint: { max: 968, min: 600 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
        },
    }

    const CustomLeftArrow = ({ onClick }) => (
        <button
            className="text-transition absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-indigo-100 text-blue hover:bg-blue hover:text-white"
            onClick={onClick}
        >
            <FaAngleLeft />
        </button>
    )

    const CustomRightArrow = ({ onClick }) => (
        <button
            className="text-transition absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-indigo-100 text-blue hover:bg-blue hover:text-white"
            onClick={onClick}
        >
            <FaAngleRight />
        </button>
    )

    const openModal = (index) => {
        setCurrentIndex(index)
        setIsModalOpen(true)
    }

    const scrollToIndex = (index) => {
        mainCarouselRef.current.goToSlide(index)
    }

    return (
        <div className="relative">
            <div
                className={`grid grid-rows-2 gap-3 lg:max-h-[600px] ${
                    thumbnailCount === 4
                        ? 'sm:grid-cols-2 lg:grid-cols-3'
                        : 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-6'
                }`}
            >
                {thumbnailsImg.map((image, index) => (
                    <div
                        key={index}
                        className={`h-full max-h-[200px] sm:max-h-[400px] lg:max-h-[600px] ${
                            thumbnailCount === 4
                                ? 'lg:first:row-span-2 lg:[&:nth-child(2)]:col-span-2'
                                : 'max-sm:first:col-span-2 sm:first:row-span-2 lg:first:col-span-2 lg:[&:nth-last-child(-n+2)]:col-span-2'
                        }`}
                        onClick={() => openModal(index)}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="h-full w-full cursor-pointer rounded-md object-cover object-center"
                        />
                    </div>
                ))}
            </div>

            <button
                className="cta-btn custom-transition absolute bottom-3 right-3 bg-white capitalize hover:bg-black hover:text-white focus:ring-0"
                onClick={() => openModal(thumbnailCount)}
            >
                <FaCaretRight className="text-lg" />
                {images.length - thumbnailCount} more photos
            </button>

            {isModalOpen &&
                createPortal(
                    <div className="fixed inset-0 z-30 flex h-screen w-screen items-start overflow-y-scroll py-6 md:items-center">
                        <div
                            className="fixed inset-0 z-10 h-screen w-screen bg-black/90"
                            onClick={() => setIsModalOpen(false)}
                        ></div>
                        <div className="z-20 mx-auto flex max-h-[600px] w-full max-w-[1500px] flex-col gap-4 px-[1.5em]">
                            <Carousel
                                responsive={responsive}
                                draggable={true}
                                itemClass="px-2"
                                customLeftArrow={<CustomLeftArrow />}
                                customRightArrow={<CustomRightArrow />}
                                ref={mainCarouselRef}
                                afterChange={(
                                    previousSlide,
                                    { currentSlide }
                                ) => setCurrentIndex(currentSlide)}
                            >
                                {images.map((img, index) => (
                                    <div
                                        key={index}
                                        className="h-full max-h-[400px] w-full overflow-hidden rounded-lg md:max-h-[600px]"
                                    >
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                ))}
                            </Carousel>

                            <div className="mt-4 w-full">
                                <Carousel
                                    responsive={{
                                        desktop: {
                                            breakpoint: { max: 3000, min: 768 },
                                            items: images.length,
                                        },
                                        tablet: {
                                            breakpoint: { max: 768, min: 600 },
                                            items: Math.floor(4),
                                        },
                                        mobile: {
                                            breakpoint: { max: 600, min: 0 },
                                            items: 3,
                                        },
                                    }}
                                    draggable={true}
                                    itemClass="px-1 w-full"
                                    slidesToSlide={1}
                                    showDots={false}
                                    customLeftArrow={<CustomLeftArrow />}
                                    customRightArrow={<CustomRightArrow />}
                                >
                                    {images.map((img, index) => (
                                        <div
                                            key={index}
                                            className={`h-24 cursor-pointer overflow-hidden rounded ${
                                                index === currentIndex &&
                                                'border-4 border-yellow'
                                            }`}
                                            onClick={() => scrollToIndex(index)}
                                        >
                                            <img
                                                src={img.src}
                                                alt={img.alt}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </div>
    )
}

export default ImageGallery
