import React, { useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import { addDays } from 'date-fns'
import datePickerIcon1 from '../../../assets/images/date-to-icon.svg'
import datePickerIcon2 from '../../../assets/images/date-from-icon.svg'
import './DatePickerComponent.css'
import { createPortal } from 'react-dom'
import { IoClose } from 'react-icons/io5'

const DatePickerComponent = () => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection',
        },
    ])
    const [showPicker, setShowPicker] = useState(false)

    const formatDate = (date) => {
        if (!date) return ''
        const options = {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        }
        return date.toLocaleDateString('en-GB', options)
    }

    const weekday = (date) => {
        if (!date) return ''
        const options = {
            weekday: 'long',
        }
        return date.toLocaleDateString('en-GB', options)
    }

    return (
        <div className="relative flex h-full w-full flex-col items-center">
            <div
                className="relative z-[11] grid h-full w-full cursor-pointer grid-cols-2 justify-between divide-x-2 rounded-lg border-[1px] border-gray-300 bg-white p-3"
                onClick={() => setShowPicker(!showPicker)}
            >
                <div className="flex flex-wrap items-center gap-3">
                    <img src={datePickerIcon1} className="max-w-[28px]" />
                    {state[0].startDate ? (
                        <div>
                            <p>{formatDate(state[0].startDate)}</p>
                            <p className="text-[14px] text-gray-400">
                                {weekday(state[0].startDate)}
                            </p>
                        </div>
                    ) : (
                        <div className="text-gray-400">Check in</div>
                    )}
                </div>
                <div className="flex flex-wrap items-center gap-3 pl-3">
                    <img src={datePickerIcon2} className="max-w-[28px]" />
                    {state[0].endDate ? (
                        <div>
                            <p>{formatDate(state[0].endDate)}</p>
                            <p className="text-[14px] text-gray-400">
                                {weekday(state[0].endDate)}
                            </p>
                        </div>
                    ) : (
                        <div className="text-gray-400">Check out</div>
                    )}
                </div>
            </div>

            <div
                className={`relative hidden w-full sm:block ${showPicker ? 'overflow-visible' : 'overflow-hidden'}`}
            >
                <div
                    className={`absolute z-10 w-full transition-all duration-300 ${showPicker ? 'translate-y-0 opacity-100' : '-translate-y-[10px] opacity-0'}`}
                >
                    <div className="relative w-full">
                        <DateRangePicker
                            onChange={(item) => setState([item.selection])}
                            showSelectionPreview={true}
                            moveRangeOnFirstSelection={false}
                            months={2}
                            ranges={state}
                            direction="horizontal"
                            preventSnapRefocus={true}
                            calendarFocus="backwards"
                            minDate={new Date()}
                        />
                    </div>
                </div>
            </div>

            {createPortal(
                <div
                    className={`fixed bottom-0 z-20 h-1 w-full sm:hidden ${showPicker ? 'overflow-visible' : 'overflow-hidden'}`}
                >
                    <div
                        className={`absolute bottom-0 left-0 flex h-screen w-full flex-col bg-white transition-all duration-300 ${showPicker ? 'translate-y-0 opacity-100' : 'translate-y-[60px] opacity-0'}`}
                    >
                        <button
                            onClick={() => setShowPicker(false)}
                            className="self-end p-4"
                        >
                            <IoClose className="cursor-pointer text-2xl text-blue" />
                        </button>

                        <div className="relative w-full overflow-y-scroll">
                            <DateRangePicker
                                onChange={(item) => setState([item.selection])}
                                showSelectionPreview={true}
                                moveRangeOnFirstSelection={false}
                                months={2}
                                ranges={state}
                                direction="horizontal"
                                preventSnapRefocus={true}
                                calendarFocus="backwards"
                                minDate={new Date()}
                            />
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    )
}

export default DatePickerComponent
