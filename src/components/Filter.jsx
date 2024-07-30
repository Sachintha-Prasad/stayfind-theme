import React, { useState } from 'react'
import ReactSlider from 'react-slider'
import { FaStar } from 'react-icons/fa'

const Filter = ({ isBordered }) => {
    const [selectedBeds, setSelectedBeds] = useState([])
    const [minValue, setMinValue] = useState(10000)
    const [maxValue, setMaxValue] = useState(90000)

    const bedTypes = [
        '1 double bed',
        '2 beds',
        '1 single bed',
        '3 beds',
        'king bed',
    ]

    const popularFilters = [
        'Free Cancellation Available',
        'Book @ ₹1',
        'Pay At Hotel Available',
        'Free Breakfast Included',
    ]

    const amentiesFilters = [
        'Free Wifi',
        '4 Breakfast included',
        'Pool',
        'Free Parking',
        'Air Conditioning',
    ]

    const funThingsToDoFilters = [
        'Beach',
        'Fitness center',
        'Cycling',
        'Animation Show',
        'Shopping center',
    ]

    const customerRatings = [
        { rating: 4.5, count: 10 },
        { rating: 4, count: 55 },
        { rating: 3.5, count: 34 },
        { rating: 3, count: 21 },
    ]

    const starRatings = [
        { rating: 5, count: 10 },
        { rating: 4, count: 55 },
        { rating: 3, count: 34 },
    ]

    const renderStars = (count) => {
        let starArr = []

        for (let i = 0; i < count; i++) {
            starArr.push(<FaStar key={i} className="text-yellow" />)
        }

        return starArr
    }

    const handleBedSelect = (index) => {
        setSelectedBeds((prevSelectedBeds) => {
            const isSelected = prevSelectedBeds.includes(index)
            if (isSelected) {
                return prevSelectedBeds.filter((bedIndex) => bedIndex !== index)
            } else {
                return [...prevSelectedBeds, index]
            }
        })
    }

    const handleSliderChange = ([min, max]) => {
        setMinValue(min)
        setMaxValue(max)
    }
    return (
        <div
            className={`flex flex-col gap-3 rounded-md py-4 ${isBordered && 'border border-gray-300'}`}
        >
            <div className="flex w-full flex-col px-3">
                <div className="flex items-center justify-between gap-2">
                    <h2 className="text-xl font-semibold capitalize">
                        Filters
                    </h2>
                    <button className="text-sm font-medium text-blue">
                        Clear All
                    </button>
                </div>
                <p className="text-sm capitalize text-gray-400">
                    Showing 180 hotels
                </p>
            </div>

            <hr className="h-[1px] w-full bg-gray-300" />

            <div className="flex w-full flex-col gap-3 px-3">
                <h3 className="font-medium capitalize">Bed Type</h3>
                <div className="grid grid-cols-2 gap-3">
                    {bedTypes.map((bed, index) => (
                        <button
                            key={index}
                            className={`custom-transition rounded p-2 text-xs font-medium capitalize text-gray-500 ${
                                selectedBeds.includes(index)
                                    ? 'bg-blue text-white'
                                    : 'bg-gray-100'
                            }`}
                            onClick={() => handleBedSelect(index)}
                        >
                            {bed}
                        </button>
                    ))}
                </div>
            </div>

            <hr className="h-[1px] w-full bg-gray-300" />

            <div className="flex w-full flex-col gap-3 px-3">
                <h3 className="font-medium capitalize">Popular Filters</h3>
                <div className="flex flex-col gap-3">
                    {popularFilters.map((filter, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 accent-blue focus:ring-2 focus:ring-blue/50"
                            />
                            <p className="capitalize">{filter}</p>
                        </div>
                    ))}
                </div>
            </div>

            <hr className="h-[1px] w-full bg-gray-300" />

            <div className="flex w-full flex-col gap-4 px-3">
                <h3 className="font-medium capitalize">Pricing Range in LKR</h3>
                <div className="flex flex-col gap-3">
                    <ReactSlider
                        defaultValue={[minValue, maxValue]}
                        ariaLabel={['Lower thumb', 'Upper thumb']}
                        ariaValuetext={(state) =>
                            `Thumb value ${state.valueNow}`
                        }
                        min={0}
                        max={100000}
                        value={[minValue, maxValue]}
                        onChange={handleSliderChange}
                        renderTrack={(props, state) => {
                            const { key, ...restProps } = props
                            return (
                                <div
                                    {...restProps}
                                    className={`h-1 rounded-md ${
                                        state.index === 1
                                            ? 'bg-blue'
                                            : 'bg-gray-300'
                                    }`}
                                />
                            )
                        }}
                        renderThumb={(props) => (
                            <div
                                {...props}
                                className="-top-1.5 h-4 w-4 cursor-grab rounded-full border-2 border-blue bg-indigo-100"
                            />
                        )}
                    />
                    <div className="mt-1 flex flex-wrap justify-between text-sm font-medium text-gray-600">
                        <span>LKR{minValue.toLocaleString()}</span>
                        <span>LKR{maxValue.toLocaleString()}</span>
                    </div>
                </div>
            </div>

            <hr className="h-[1px] w-full bg-gray-300" />

            <div className="flex w-full flex-col gap-3 px-3">
                <h3 className="font-medium capitalize">customer ratings</h3>
                <div className="flex flex-col gap-3">
                    {customerRatings.map((filter, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 accent-blue focus:ring-2 focus:ring-blue/50"
                            />

                            <div className="flex w-full items-center gap-1">
                                <FaStar className="text-yellow" />
                                <div className="flex w-full items-center justify-between">
                                    <p className="capitalize">
                                        {filter.rating}+
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {filter.count}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <hr className="h-[1px] w-full bg-gray-300" />

            <div className="flex w-full flex-col gap-3 px-3">
                <h3 className="font-medium capitalize">star ratings</h3>
                <div className="flex flex-col gap-3">
                    {starRatings.map((filter, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 accent-blue focus:ring-2 focus:ring-blue/50"
                            />

                            <div className="flex w-full items-center justify-between gap-1">
                                <div className="flex gap-0.5">
                                    {renderStars(filter.rating)}
                                </div>

                                <p className="text-sm text-gray-500">
                                    {filter.count}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <hr className="h-[1px] w-full bg-gray-300" />

            <div className="flex w-full flex-col gap-3 px-3">
                <h3 className="font-medium capitalize">amenties</h3>
                <div className="flex flex-col gap-3">
                    {amentiesFilters.map((filter, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 accent-blue focus:ring-2 focus:ring-blue/50"
                            />
                            <p className="capitalize">{filter}</p>
                        </div>
                    ))}
                </div>
            </div>

            <hr className="h-[1px] w-full bg-gray-300" />

            <div className="flex w-full flex-col gap-3 px-3">
                <h3 className="font-medium capitalize">fun things to do</h3>
                <div className="flex flex-col gap-3">
                    {funThingsToDoFilters.map((filter, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 accent-blue focus:ring-2 focus:ring-blue/50"
                            />
                            <p className="capitalize">{filter}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Filter
