import React from 'react'
import { FaArrowRightFromBracket } from 'react-icons/fa6'
import { FaLocationDot } from 'react-icons/fa6'
import { FaSun } from 'react-icons/fa6'
import { FaEnvelopeCircleCheck } from 'react-icons/fa6'
import { FaPhoneVolume } from 'react-icons/fa6'
import { FaFileInvoice } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const ProfileSidebar = () => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col overflow-hidden rounded-lg bg-white">
            <div className="relative flex flex-col items-center justify-center gap-3 bg-blue px-3 py-12">
                <button
                    className="absolute right-3 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white"
                    onClick={() => navigate('/')}
                >
                    <FaArrowRightFromBracket />
                </button>

                <div className="flex flex-col items-center gap-4">
                    <div className="max-w-[120px] overflow-hidden rounded-full ring-4 ring-white/20">
                        <img
                            src="https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg"
                            alt="user profile"
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-center text-lg font-semibold capitalize text-white">
                            adam k. divilars
                        </h2>
                        <p className="flex items-center gap-1 text-center capitalize text-gray-100">
                            <FaLocationDot /> kandy, sri lanka
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center gap-12 px-3 py-6">
                <div className="flex w-full flex-col items-start gap-4 md:py-6">
                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600/10 text-green-600">
                            <FaEnvelopeCircleCheck className="text-2xl" />
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="font-semibold capitalize">
                                verified email
                            </p>
                            <p className="text-sm capitalize text-gray-500">
                                10 aug 2022
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600/10 text-green-600">
                            <FaPhoneVolume className="text-xl" />
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="font-semibold capitalize">
                                verified mobile number
                            </p>
                            <p className="text-sm capitalize text-gray-500">
                                12 aug 2022
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow/10 text-yellow">
                            <FaFileInvoice className="text-xl" />
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="font-semibold capitalize">
                                complete basic info
                            </p>
                            <p className="text-sm capitalize text-gray-500">
                                not verified
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex w-full flex-col items-center gap-4">
                    <div className="flex w-full flex-col items-center gap-2">
                        <div className="flex w-full items-center justify-between gap-3">
                            <p className="text-sm font-semibold capitalize">
                                complete your profile
                            </p>
                            <p className="text-sm font-semibold capitalize">
                                75%
                            </p>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-300">
                            <div className="h-full w-[75%] bg-green-600"></div>
                        </div>
                    </div>

                    <a
                        href="#"
                        className="custom-transition cta-btn w-full gap-2 rounded-md bg-indigo-200 px-6 py-4 text-base font-medium text-blue hover:bg-blue hover:text-white focus:bg-blue focus:text-white"
                    >
                        <FaSun className="w-4" />
                        upgrade pro
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProfileSidebar
