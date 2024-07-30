import React from 'react'
import { FaLock } from 'react-icons/fa6'

const UpdatePasswordSection = () => {
    return (
        <div className="flex flex-col gap-4 rounded-lg bg-white py-4">
            <p className="flex items-center gap-2 px-3 font-semibold capitalize sm:px-6">
                <FaLock />
                update password
            </p>

            <hr className="h-[1px] w-full bg-gray-300" />

            <form className="flex w-full flex-col gap-6 px-3 sm:px-6">
                <div className="flex flex-col gap-1">
                    <label
                        htmlFor="old-password"
                        className="text-sm font-medium capitalize"
                    >
                        old password
                    </label>
                    <input
                        id="old-password"
                        type="password"
                        placeholder="*********"
                        className="w-full rounded-md border-[1px] border-slate-300 p-3 text-sm outline-none focus:ring-1 focus:ring-blue"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label
                        htmlFor="new-password"
                        className="text-sm font-medium capitalize"
                    >
                        new password
                    </label>
                    <input
                        id="new-password"
                        type="password"
                        placeholder="*********"
                        className="w-full rounded-md border-[1px] border-slate-300 p-3 text-sm outline-none focus:ring-1 focus:ring-blue"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label
                        htmlFor="confirm-password"
                        className="text-sm font-medium capitalize"
                    >
                        confirm password
                    </label>
                    <input
                        id="confirm-password"
                        type="password"
                        placeholder="*********"
                        className="w-full rounded-md border-[1px] border-slate-300 p-3 text-sm outline-none focus:ring-1 focus:ring-blue"
                    />
                </div>

                <button className="cta-btn w-fit self-end bg-blue text-white">
                    change password
                </button>
            </form>
        </div>
    )
}

export default UpdatePasswordSection
