import React from 'react'
import { FaEnvelopeCircleCheck } from 'react-icons/fa6'

const UpdateEmailSection = () => {
    return (
        <div className="flex flex-col gap-4 rounded-lg bg-white py-4">
            <p className="flex items-center gap-2 px-3 font-semibold capitalize sm:px-6">
                <FaEnvelopeCircleCheck />
                update your email
            </p>

            <hr className="h-[1px] w-full bg-gray-300" />

            <form className="flex w-full flex-col gap-6 px-3 sm:px-6">
                <div className="flex flex-col gap-1">
                    <label
                        htmlFor="email-id"
                        className="text-sm font-medium capitalize"
                    >
                        email address
                    </label>
                    <input
                        id="email-id"
                        type="email"
                        placeholder="update your new email"
                        className="w-full rounded-md border-[1px] border-slate-300 p-3 text-sm outline-none focus:ring-1 focus:ring-blue"
                    />
                </div>

                <button className="cta-btn w-fit self-end bg-blue text-white">
                    update email
                </button>
            </form>
        </div>
    )
}

export default UpdateEmailSection
