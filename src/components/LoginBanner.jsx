import React from 'react'
import { FaGift } from 'react-icons/fa6'

const LoginBanner = () => {
    return (
        <section>
            <div className="container pt-6">
                <div className="flex items-center gap-3 rounded-md bg-[#27a974] px-4 py-4 md:px-6">
                    <FaGift className="text-lg text-yellow" />
                    <p className="w-full text-white">
                        Login or Register to earn upto 100 coins (approx 1.72
                        US$) after check-out.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default LoginBanner
