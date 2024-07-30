import React from 'react'
import { FaArrowTrendUp } from 'react-icons/fa6'

const NewsletterBanner = () => {
    return (
        <section className="bg-blue">
            <div className="container flex flex-col items-center justify-between gap-3 py-12 sm:flex-row">
                <h3 className="w-full text-2xl font-bold text-white sm:max-w-[500px]">
                    Join our Newsletter To Keep Up To Date With Us!
                </h3>

                <form className="flex w-full max-w-[600px] gap-2 rounded-lg bg-white p-3">
                    <input
                        id="email"
                        type="email"
                        autoComplete="on"
                        className="w-full outline-none"
                        placeholder="Enter your mail!"
                    />
                    <button
                        type="submit"
                        className="cta-btn custom-transition w-[90%] max-w-[150px] justify-center bg-black text-center text-lg font-medium text-white"
                    >
                        Submit
                        <FaArrowTrendUp className="w-4" />
                    </button>
                </form>
            </div>
        </section>
    )
}

export default NewsletterBanner
