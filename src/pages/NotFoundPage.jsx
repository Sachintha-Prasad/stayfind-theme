import React from 'react'
import notFoundImg from '../assets/images/not-found-img.svg'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className="h-screen w-screen">
            <div className="container flex flex-col items-center justify-center">
                <img
                    src={notFoundImg}
                    alt=""
                    className="w-full max-w-[600px]"
                />
                <div className="flex flex-col items-center gap-4 text-center">
                    <h1 className="text-5xl font-semibold text-blue">
                        Page Not Found
                    </h1>
                    <div className="flex flex-col items-center">
                        <p>The page you requested could not be found.</p>
                        <p>we're working on it</p>
                    </div>
                    <Link
                        to="/"
                        className="cta-btn justify-center bg-blue text-lg text-white"
                    >
                        Back to Homepage
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage
