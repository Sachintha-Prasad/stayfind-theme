import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/stayfind-icon.svg'
import paymentImg from '../assets/images/payment-img.webp'
import { FaFacebook, FaInstagram, FaTwitter, FaDribbble } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-12">
            <div className="container mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="flex items-start gap-3">
                    <img
                        src={logo}
                        alt="StayFind Logo"
                        className="w-[90%] max-w-[90px]"
                    />
                    <div className="flex flex-col gap-6">
                        <p className="max-w-[200px] text-gray-700">
                            We make your dream more beautiful & enjoyable with
                            lots of happiness.
                        </p>
                        <div className="flex flex-wrap items-center gap-2">
                            <a href="/#" className="footer-social-icon">
                                <FaFacebook />
                            </a>
                            <a href="/#" className="footer-social-icon">
                                <FaInstagram />
                            </a>
                            <a href="/#" className="footer-social-icon">
                                <FaTwitter />
                            </a>
                            <a href="/#" className="footer-social-icon">
                                <FaDribbble />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-start gap-6 lg:col-span-2 lg:justify-between">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-blue-600 pb-2 font-bold">
                            Navigation
                        </h2>
                        <a href="/#" className="footer-link">
                            Talent Marketplace
                        </a>
                        <a href="/#" className="footer-link">
                            Payroll Services
                        </a>
                        <a href="/#" className="footer-link">
                            Direct Contracts
                        </a>
                        <a href="/#" className="footer-link">
                            Hire Worldwide
                        </a>
                        <a href="/#" className="footer-link">
                            Hire in the USA
                        </a>
                        <a href="/#" className="footer-link">
                            How to Hire
                        </a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-blue-600 pb-2 font-bold">
                            Our Resources
                        </h2>
                        <a href="/#" className="footer-link">
                            Free Business Tools
                        </a>
                        <a href="/#" className="footer-link">
                            Affiliate Program
                        </a>
                        <a href="/#" className="footer-link">
                            Success Stories
                        </a>
                        <a href="/#" className="footer-link">
                            Upwork Reviews
                        </a>
                        <a href="/#" className="footer-link">
                            Resources
                        </a>
                        <a href="/#" className="footer-link">
                            Help & Support
                        </a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-blue-600 pb-2 font-bold">
                            The Company
                        </h2>
                        <a href="/#" className="footer-link">
                            About Us
                        </a>
                        <a href="/#" className="footer-link">
                            Leadership
                        </a>
                        <a href="/#" className="footer-link">
                            Contact Us
                        </a>
                        <a href="/#" className="footer-link">
                            Investor Relations
                        </a>
                        <a href="/#" className="footer-link">
                            Trust, Safety & Security
                        </a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-blue-600 pb-2 font-bold">
                            Our Partners
                        </h2>
                        <img
                            src={paymentImg}
                            alt="Payment Methods"
                            className="w-[90%] max-w-[300px]"
                        />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
