import React from 'react'
import { FaArrowTrendUp } from 'react-icons/fa6'

const SubscribeSection = () => {
    return (
        <div className="relative flex min-h-[400px] items-center justify-center overflow-hidden bg-[url('./subscribe-section-cover.webp')] bg-cover bg-bottom lg:min-h-[600px]">
            <div className="absolute inset-0 z-[5] h-screen w-screen bg-black/50"></div>
            <div className="container relative z-10 flex flex-col items-center gap-6">
                <h2 className="max-w-[600px] text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                    Subscribe & Get Special Discount with Stayfind
                </h2>
                <form className="flex w-full max-w-[800px] gap-2 rounded-lg bg-white p-3">
                    <input
                        type="email"
                        className="w-full outline-none"
                        placeholder="Enter your mail!"
                    />
                    <button
                        type="submit"
                        className="cta-btn custom-transition w-[90%] max-w-[200px] justify-center bg-blue text-center text-xl font-medium text-white"
                    >
                        Submit
                        <FaArrowTrendUp className="w-4" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SubscribeSection
