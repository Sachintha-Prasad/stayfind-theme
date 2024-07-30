import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { PiUsersThreeLight } from 'react-icons/pi'
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci'

const GuestCount = () => {
    const [guestsStr, setGuestsStr] = useState('')
    const [numberOfRooms, setNumberOfRooms] = useState(1)
    const [adultCount, setAdultCount] = useState(1)
    const [childCount, setChildCount] = useState(0)
    const [infantsCount, setInfantsCount] = useState(0)
    const [petCount, setPetCount] = useState(0)

    const [showCountModel, setShowCountModel] = useState(false)

    useEffect(() => {
        updateGuestsStr()
    }, [adultCount, childCount, infantsCount, petCount])

    const handleCountModel = () => {
        setShowCountModel((prevState) => !prevState)
    }

    const updateGuestsStr = () => {
        const guests = [
            { type: 'Adult', count: adultCount },
            { type: 'Child', count: childCount },
            { type: 'Infant', count: infantsCount },
            { type: 'Pet', count: petCount },
        ]

        const guestStr = guests
            .filter((guest) => guest.count > 0)
            .map(
                (guest) =>
                    `${guest.count} ${guest.type}${guest.count > 1 ? 's' : ''}`
            )
            .join(', ')

        setGuestsStr(guestStr || 'Select guests')
    }

    const increment = (type) => {
        switch (type) {
            case 'adult':
                setAdultCount((prev) => prev + 1)
                break
            case 'child':
                setChildCount((prev) => prev + 1)
                break
            case 'infant':
                setInfantsCount((prev) => prev + 1)
                break
            case 'pet':
                setPetCount((prev) => prev + 1)
                break
            default:
                break
        }
    }

    const decrement = (type) => {
        switch (type) {
            case 'adult':
                setAdultCount((prev) => (prev > 0 ? prev - 1 : 0))
                break
            case 'child':
                setChildCount((prev) => (prev > 0 ? prev - 1 : 0))
                break
            case 'infant':
                setInfantsCount((prev) => (prev > 0 ? prev - 1 : 0))
                break
            case 'pet':
                setPetCount((prev) => (prev > 0 ? prev - 1 : 0))
                break
            default:
                break
        }
    }

    return (
        <div className="flex flex-col items-center">
            <div
                className="relative z-10 flex w-full cursor-pointer items-center gap-3 rounded-lg border-[1px] border-gray-300 bg-white p-3 outline-none focus:ring-1 focus:ring-blue"
                onClick={handleCountModel}
            >
                <PiUsersThreeLight className="text-3xl" />
                <div className="w-full">
                    <p>{guestsStr}</p>
                    <p className="text-[14px] text-gray-400">
                        {numberOfRooms} room{numberOfRooms > 1 ? 's' : ''}
                    </p>
                </div>
            </div>

            <div
                className={`relative hidden w-full sm:block ${showCountModel ? 'overflow-visible' : 'overflow-hidden'}`}
            >
                <div
                    className={`absolute left-0 top-1.5 z-10 w-full rounded-lg border-[1px] border-gray-300 bg-white p-6 shadow-lg transition-all duration-300 ${showCountModel ? 'translate-y-0 opacity-100' : '-translate-y-[10px] opacity-0'}`}
                >
                    <div className="flex flex-col divide-y-2">
                        <div className="flex items-center justify-between py-2">
                            <div>
                                <h2>Adults</h2>
                                <p className="text-[14px] text-gray-400">
                                    Ages 13 or above
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={() => decrement('adult')}>
                                    <CiCircleMinus className="text-2xl" />
                                </button>
                                <span className="text-xl">{adultCount}</span>
                                <button onClick={() => increment('adult')}>
                                    <CiCirclePlus className="text-2xl" />
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <div>
                                <h2>Children</h2>
                                <p className="text-[14px] text-gray-400">
                                    Ages 2 - 12
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={() => decrement('child')}>
                                    <CiCircleMinus className="text-2xl" />
                                </button>
                                <span className="text-xl">{childCount}</span>
                                <button onClick={() => increment('child')}>
                                    <CiCirclePlus className="text-2xl" />
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <div>
                                <h2>Infants</h2>
                                <p className="text-[14px] text-gray-400">
                                    Under 2
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={() => decrement('infant')}>
                                    <CiCircleMinus className="text-2xl" />
                                </button>
                                <span className="text-xl">{infantsCount}</span>
                                <button onClick={() => increment('infant')}>
                                    <CiCirclePlus className="text-2xl" />
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <div>
                                <h2>Pets</h2>
                                <p className="text-[14px] text-gray-400">
                                    Bringing a service animal?
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={() => decrement('pet')}>
                                    <CiCircleMinus className="text-2xl" />
                                </button>
                                <span className="text-xl">{petCount}</span>
                                <button onClick={() => increment('pet')}>
                                    <CiCirclePlus className="text-2xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {createPortal(
                <div
                    className={`fixed bottom-0 z-20 h-1 w-full sm:hidden ${showCountModel ? 'overflow-visible' : 'overflow-hidden'}`}
                >
                    <div
                        className={`absolute bottom-0 h-screen w-screen ${showCountModel && 'bg-black/40'}`}
                        onClick={() => setShowCountModel(false)}
                    ></div>
                    <div
                        className={`absolute bottom-0 left-0 flex h-[420px] w-full flex-col justify-between rounded-t-lg border-[1px] border-gray-300 bg-white p-6 shadow-lg transition-all duration-300 ${showCountModel ? 'translate-y-0 opacity-100' : 'translate-y-[60px] opacity-0'}`}
                    >
                        <div className="flex flex-col divide-y-2">
                            <div className="flex items-center justify-between py-2">
                                <div>
                                    <h2>Adults</h2>
                                    <p className="text-[14px] text-gray-400">
                                        Ages 13 or above
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => decrement('adult')}>
                                        <CiCircleMinus className="text-2xl" />
                                    </button>
                                    <span className="text-xl">
                                        {adultCount}
                                    </span>
                                    <button onClick={() => increment('adult')}>
                                        <CiCirclePlus className="text-2xl" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between py-2">
                                <div>
                                    <h2>Children</h2>
                                    <p className="text-[14px] text-gray-400">
                                        Ages 2 - 12
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => decrement('child')}>
                                        <CiCircleMinus className="text-2xl" />
                                    </button>
                                    <span className="text-xl">
                                        {childCount}
                                    </span>
                                    <button onClick={() => increment('child')}>
                                        <CiCirclePlus className="text-2xl" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between py-2">
                                <div>
                                    <h2>Infants</h2>
                                    <p className="text-[14px] text-gray-400">
                                        Under 2
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => decrement('infant')}>
                                        <CiCircleMinus className="text-2xl" />
                                    </button>
                                    <span className="text-xl">
                                        {infantsCount}
                                    </span>
                                    <button onClick={() => increment('infant')}>
                                        <CiCirclePlus className="text-2xl" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between py-2">
                                <div>
                                    <h2>Pets</h2>
                                    <p className="text-[14px] text-gray-400">
                                        Bringing a service animal?
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => decrement('pet')}>
                                        <CiCircleMinus className="text-2xl" />
                                    </button>
                                    <span className="text-xl">{petCount}</span>
                                    <button onClick={() => increment('pet')}>
                                        <CiCirclePlus className="text-2xl" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button
                            className="cta-btn w-full bg-blue text-white"
                            onClick={() => handleCountModel()}
                        >
                            Done
                        </button>
                    </div>
                </div>,
                document.body
            )}
        </div>
    )
}

export default GuestCount
