import React from 'react'
import { BsMailbox2 } from 'react-icons/bs'
import { FaHeadset } from 'react-icons/fa6'
import { AiOutlineGlobal } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaTwitter, FaDribbble } from 'react-icons/fa'
import { BsFillSendFill } from 'react-icons/bs'
import NewsletterBanner from '../components/NewsletterBanner'

const ContactPage = () => {
    return (
        <div>
            <div
                id="contact"
                className="relative z-0 flex h-[50vh] w-screen items-center justify-center overflow-hidden bg-[url('/contact-header-banner.webp')] bg-cover bg-center bg-no-repeat"
            >
                <div className="absolute inset-0 z-10 h-screen w-screen bg-black/40"></div>
                <div className="container z-20 flex flex-col items-center justify-center gap-6">
                    {/* hero heading */}
                    <div className="flex flex-col items-center gap-3 text-white">
                        <h1 className="text-center text-4xl font-bold sm:text-5xl xl:text-6xl">
                            Get-in Touch
                        </h1>
                        <p className="max-w-[800px] text-center md:text-xl">
                            Cicero famously orated against his political
                            opponent Lucius Sergius Catilina. Occasionally the
                            first Oration against Catiline is taken for type
                            specimens
                        </p>
                    </div>
                </div>
            </div>

            <div className="container grid grid-cols-1 gap-x-6 gap-y-12 py-12 md:grid-cols-2">
                <div className="grid-col-1 grid gap-6 sm:grid-cols-2 md:col-span-2 md:grid-cols-3">
                    <div className="flex max-h-[200px] w-full flex-col items-center justify-start gap-2 rounded-md border border-dashed border-gray-300 p-4">
                        <BsMailbox2 className="text-4xl text-blue" />

                        <h3 className="text-xl font-bold">Drop a Mail</h3>

                        <div className="flex flex-col items-center text-gray-500">
                            <p>stayfind@gmail.com</p>
                            <p>samplestayfind@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex max-h-[200px] w-full flex-col items-center justify-start gap-2 rounded-md border border-dashed border-gray-300 p-4">
                        <FaHeadset className="text-4xl text-blue" />

                        <h3 className="text-xl font-bold">Call Us</h3>

                        <div className="flex flex-col items-center text-gray-500">
                            <p>(0112) 2563568</p>
                            <p>+94 78669973</p>
                        </div>
                    </div>
                    <div className="flex max-h-[200px] w-full flex-col items-center justify-start gap-2 rounded-md border border-dashed border-gray-300 p-4">
                        <AiOutlineGlobal className="text-4xl text-blue" />

                        <h3 className="text-xl font-bold">
                            Connect with Social
                        </h3>

                        <div className="flex flex-col items-center gap-1 text-gray-500">
                            <p>Let's Connect with Us via social media</p>
                            <div className="mt-1 flex items-center gap-2">
                                <a
                                    href="#contact"
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 p-2 text-lg text-indigo-700 hover:bg-indigo-100 focus:bg-indigo-200"
                                >
                                    <FaFacebook />
                                </a>
                                <a
                                    href="#contact"
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 p-2 text-lg text-gray-700 hover:bg-indigo-100 focus:bg-indigo-200"
                                >
                                    <FaInstagram />
                                </a>
                                <a
                                    href="#contact"
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 p-2 text-lg text-[#00aced] hover:bg-indigo-100 focus:bg-indigo-200"
                                >
                                    <FaTwitter />
                                </a>
                                <a
                                    href="#contact"
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 p-2 text-lg text-pink-600 hover:bg-indigo-100 focus:bg-indigo-200"
                                >
                                    <FaDribbble />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 rounded-lg bg-gray-100 p-6">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-3xl font-bold text-blue">
                            Drop Us a Line
                        </h2>
                        <p className="text-gray-500">
                            Get in touch via form below and we will reply as
                            soon as we can.
                        </p>
                    </div>
                    <form className="flex flex-col gap-4">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                            <div className="flex flex-col gap-1">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-medium text-gray-600"
                                >
                                    Your Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    autoComplete="on"
                                    className="w-full rounded-md border-[1px] border-slate-300 p-3 outline-none focus:ring-1 focus:ring-blue"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label
                                    htmlFor="email-id"
                                    className="text-sm font-medium text-gray-600"
                                >
                                    Email ID
                                </label>
                                <input
                                    id="email-id"
                                    type="email"
                                    className="w-full rounded-md border-[1px] border-slate-300 p-3 outline-none focus:ring-1 focus:ring-blue"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label
                                    htmlFor="phone-no"
                                    className="text-sm font-medium text-gray-600"
                                >
                                    Phone No.
                                </label>
                                <input
                                    id="phone-no"
                                    type="text"
                                    className="w-full rounded-md border-[1px] border-slate-300 p-3 outline-none focus:ring-1 focus:ring-blue"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label
                                    htmlFor="subject"
                                    className="text-sm font-medium text-gray-600"
                                >
                                    Subject
                                </label>
                                <input
                                    id="subject"
                                    type="text"
                                    className="w-full rounded-md border-[1px] border-slate-300 p-3 outline-none focus:ring-1 focus:ring-blue"
                                />
                            </div>
                            <div className="flex flex-col gap-1 sm:col-span-2">
                                <label
                                    htmlFor="query"
                                    className="text-sm font-medium text-gray-600"
                                >
                                    Your Query
                                </label>
                                <textarea
                                    id="query"
                                    type="text"
                                    rows="4"
                                    cols="50"
                                    className="w-full rounded-md border-[1px] border-slate-300 p-3 outline-none focus:ring-1 focus:ring-blue"
                                ></textarea>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="custom-transition cta-btn flex w-fit gap-2 rounded-md bg-blue px-6 py-3 text-base font-medium text-white"
                        >
                            Send Message
                            <BsFillSendFill className="w-5" />
                        </button>
                    </form>
                </div>

                <div className="overflow-hidden rounded-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.358598291097!2d80.04638512657507!3d6.847544930731368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2525c712d2b49%3A0xe619b3313ca96432!2sMeegoda%20Economic%20Center!5e0!3m2!1sen!2slk!4v1719833190781!5m2!1sen!2slk"
                        referrerPolicy="no-referrer-when-downgrade"
                        loading="lazy"
                        className="h-full min-h-[400px] w-full"
                    ></iframe>
                </div>
            </div>
            <NewsletterBanner />
        </div>
    )
}

export default ContactPage
