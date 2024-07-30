import React, { useState } from 'react'
import { FaFileInvoice } from 'react-icons/fa6'

const PersonalInformationSection = () => {
    const [firstName, setFirstName] = useState('adam k.')
    const [lastName, setLastName] = useState('diviliars')
    const [emailId, setEmailId] = useState('adamkruck@gmail.com')
    const [phoneNo, setPhoneNo] = useState(9856542563)
    const [gender, setGender] = useState('male')
    const [message, setMessage] = useState(
        'Lorem ipsum dolor sit amet, nec virtute nusquam ex. Ex sed diceret constituam inciderint, accusamus imperdiet has te. Id qui liber nemore semper, modus appareat philosophia ut eam. Assum tibique singulis at mel.'
    )

    return (
        <div className="flex flex-col gap-4 rounded-lg bg-white py-4">
            <p className="flex items-center gap-2 px-3 font-semibold capitalize sm:px-6">
                <FaFileInvoice />
                personal informations
            </p>

            <hr className="h-[1px] w-full bg-gray-300" />

            <div className="flex w-full flex-col gap-6 px-3 sm:px-6">
                <div className="flex items-center gap-3">
                    <div className="max-w-[100px] overflow-hidden rounded-full border-2 border-white shadow-md">
                        <img
                            src="https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg"
                            alt="user profile"
                        />
                    </div>

                    <a
                        href="#"
                        className="custom-transition cta-btn w-fit gap-2 rounded-md bg-indigo-200 px-4 py-2 font-medium text-blue hover:bg-blue hover:text-white focus:bg-blue focus:text-white"
                    >
                        change
                    </a>
                </div>

                <form className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="first-name"
                                className="text-sm font-medium capitalize"
                            >
                                first name
                            </label>
                            <input
                                id="first-name"
                                type="text"
                                value={firstName}
                                onChange={(e) =>
                                    setFirstName(e.currentTarget.value)
                                }
                                className="w-full rounded-md border-[1px] border-slate-300 p-3 text-sm capitalize outline-none focus:ring-1 focus:ring-blue"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="last-name"
                                className="text-sm font-medium capitalize"
                            >
                                last name
                            </label>
                            <input
                                id="last-name"
                                type="text"
                                value={lastName}
                                onChange={(e) =>
                                    setLastName(e.currentTarget.value)
                                }
                                className="w-full rounded-md border-[1px] border-slate-300 p-3 text-sm capitalize outline-none focus:ring-1 focus:ring-blue"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="email-id"
                                className="text-sm font-medium capitalize"
                            >
                                email ID
                            </label>
                            <input
                                id="email-id"
                                type="email"
                                value={emailId}
                                onChange={(e) =>
                                    setEmailId(e.currentTarget.value)
                                }
                                className="w-full rounded-md border-[1px] border-slate-300 p-3 text-sm outline-none focus:ring-1 focus:ring-blue"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="phone-no"
                                className="text-sm font-medium capitalize"
                            >
                                phone no.
                            </label>
                            <input
                                id="phone-no"
                                type="text"
                                value={phoneNo}
                                onChange={(e) =>
                                    setPhoneNo(e.currentTarget.value)
                                }
                                className="w-full rounded-md border-[1px] border-slate-300 p-3 text-sm capitalize outline-none focus:ring-1 focus:ring-blue"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="subject"
                                className="text-sm font-medium capitalize"
                            >
                                date of birth
                            </label>
                            <input
                                id="subject"
                                type="date"
                                className="w-full rounded-md border-[1px] border-slate-300 p-3 text-sm outline-none focus:ring-1 focus:ring-blue"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="gender"
                                className="text-sm font-medium capitalize"
                            >
                                gender
                            </label>
                            <input
                                id="gender"
                                type="text"
                                value={gender}
                                onChange={(e) =>
                                    setGender(e.currentTarget.value)
                                }
                                className="w-full rounded-md border-[1px] border-slate-300 p-3 text-sm capitalize outline-none focus:ring-1 focus:ring-blue"
                            />
                        </div>
                        <div className="flex flex-col gap-1 sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="text-sm font-medium capitalize"
                            >
                                your message
                            </label>
                            <textarea
                                id="message"
                                type="text"
                                value={message}
                                onChange={(e) =>
                                    setMessage(e.currentTarget.value)
                                }
                                rows="4"
                                cols="50"
                                className="w-full rounded-md border-[1px] border-slate-300 p-3 text-sm capitalize outline-none focus:ring-1 focus:ring-blue"
                            ></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PersonalInformationSection
