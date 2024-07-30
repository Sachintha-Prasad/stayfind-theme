import React from 'react'
import { FaCaretDown } from 'react-icons/fa6'

const GuestReviews = ({ categoriesRatingList, reviewsList }) => {
    return (
        <div className="flex flex-col gap-4 px-4 sm:px-6">
            {/* Categories wise review */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
                <div className="flex flex-col items-center justify-center rounded-md bg-blue p-3 text-white md:min-h-[200px]">
                    <h3 className="text-5xl sm:text-6xl">92</h3>
                    <p className="text-center">Extraordinary 786 Reviews</p>
                </div>
                <div className="grid w-full grid-cols-1 gap-x-8 gap-y-6 py-2 sm:grid-cols-2 md:col-span-4">
                    {categoriesRatingList.map((item, index) => (
                        <div key={index} className="flex flex-col gap-1">
                            <div className="flex items-center justify-between gap-2 font-medium">
                                <p>{item.category}</p>
                                <p>{item.rating}</p>
                            </div>
                            <div className="h-[8px] w-full overflow-hidden rounded-full bg-gray-200">
                                <div
                                    className={`h-full rounded-full bg-blue ${item.percent}`}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Customer reviews */}
            <div className="flex flex-col gap-4">
                {reviewsList.map((review, index) => (
                    <div
                        key={index}
                        className="grid w-full grid-cols-4 gap-4 rounded-md border border-gray-300 px-3 py-2 md:grid-cols-7 xl:grid-cols-9"
                    >
                        <div className="row-span-1 flex h-full max-h-[120px] w-full items-center justify-center overflow-hidden rounded-md bg-indigo-200 text-2xl font-semibold text-blue sm:row-span-2 sm:text-4xl">
                            {review.guestImg ? (
                                <img
                                    src={review.guestImg}
                                    alt={review.guestName}
                                    className="h-full w-full object-cover object-top"
                                />
                            ) : (
                                <div>{review.guestName.slice(0, 2)}</div>
                            )}
                        </div>

                        <div className="col-span-3 flex w-full flex-col md:col-span-6 xl:col-span-8">
                            <div className="flex w-full items-center justify-between gap-2">
                                <p className="text-lg font-semibold">
                                    {review.guestName}
                                </p>
                                <p className="text-gray-400">{review.date}</p>
                            </div>
                            <p className="text-sm font-medium text-gray-500">
                                {review.country}
                            </p>
                        </div>

                        <p className="col-span-4 flex w-full flex-col sm:col-span-6 xl:col-span-8">
                            {review.review}
                        </p>
                    </div>
                ))}
            </div>

            {/* Load more reviews button */}
            <a href="#" className="flex items-center justify-center gap-2">
                <p className="text-center font-medium text-blue">
                    Load more guest reviews
                </p>
                <FaCaretDown className="text-lg text-blue" />
            </a>

            {/* Account login access to submit reviews */}
            <div className="flex w-full items-center justify-center gap-2 rounded-md border border-yellow bg-yellow/5 p-3 py-4">
                <p className="text-yellow">
                    Login to your account to submit reviews
                </p>
                <a href="#">Login</a>
            </div>
        </div>
    )
}

export default GuestReviews
