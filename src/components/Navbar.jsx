import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LoginModal from '../components/LoginModal/LoginModal'
import logoWhite from '../assets/images/stayfind-logo-white.svg'
import logoColored from '../assets/images/stayfind-logo-colored.svg'
import { FaRegUserCircle } from 'react-icons/fa'
import { HiMenu, HiOutlineX } from 'react-icons/hi'
import { RiFileList3Line } from 'react-icons/ri'

const Navbar = ({ initialState }) => {
    const [coloredNav, setColoredNav] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [showLoginModal, setShowLoginModal] = useState(false)

    const handleLoginModal = () => {
        setShowLoginModal((prevState) => !prevState)
    }

    const navItems = [
        { name: 'Destinations', path: '/destinations' },
        { name: 'Place to stay', path: '/place-to-stay' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Contact', path: '/contact' },
    ]

    // side effect for nav type
    useEffect(() => {
        if (initialState === 'transparent') {
            const changeNavColor = () => setColoredNav(window.scrollY >= 10)
            window.addEventListener('scroll', changeNavColor)
            return () => window.removeEventListener('scroll', changeNavColor)
        } else if (initialState === 'colored') {
            setColoredNav(true)
        }
    }, [])

    // class changes with navbar type
    const logo = coloredNav ? logoColored : logoWhite
    const navBgClass = coloredNav
        ? 'bg-white shadow-lg'
        : 'after:absolute after:w-[100%] after:max-w-[1400px] after:h-[2px] after:bg-white/50 after:bottom-0 after:left-1/2 after:-translate-x-1/2'
    const navTextColorClass = coloredNav ? 'text-blue' : 'text-white'

    // mobile menu toggle class
    const navMenuClass = menuOpen ? 'translate-x-0' : '-translate-x-full'

    // nav links active class
    const navActiveClass = ({ isActive }) =>
        isActive
            ? 'text-yellow font-semibold text-center outline-none'
            : 'font-semibold text-center text-transition hover:text-yellow focus:text-yellow outline-none'

    return (
        <header
            className={`text-transition fixed z-20 w-screen py-6 ${navBgClass}`}
        >
            <div className="container flex items-center justify-between gap-3">
                <div className="flex items-start justify-center gap-2">
                    <div className="flex flex-col md:hidden">
                        <HiMenu
                            title="menu"
                            className={`cursor-pointer text-3xl md:hidden ${navTextColorClass}`}
                            onClick={() => setMenuOpen(true)}
                        />
                        <nav
                            className={`custom-transition absolute left-0 top-0 z-[30] flex h-screen w-[60%] flex-col items-start divide-y-[1px] bg-white pt-8 md:hidden ${navMenuClass}`}
                        >
                            <HiOutlineX
                                title="close"
                                className="mb-4 mr-6 cursor-pointer self-end text-3xl"
                                onClick={() => setMenuOpen(false)}
                            />
                            {navItems.map((item, index) => (
                                <NavLink
                                    key={index}
                                    to={item.path}
                                    className={`w-full py-4 pl-6 text-start text-sm ${navActiveClass} `}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                            <div className="h-[1px] w-full"></div>
                        </nav>
                        <div
                            className={`absolute inset-0 z-[20] h-screen bg-black/50 ${navMenuClass}`}
                            onClick={() => setMenuOpen(false)}
                        ></div>
                    </div>
                    <Link
                        to="/"
                        className="relative flex h-8 w-[120px] outline-none"
                    >
                        <img
                            src={logo}
                            alt="StayFind Logo"
                            className="absolute left-0 top-1.5 max-w-[100px] md:top-1 md:max-w-[130px]"
                        />
                    </Link>
                </div>
                <div className="flex items-center gap-3">
                    <nav
                        className={`hidden gap-4 md:flex ${navTextColorClass}`}
                    >
                        {navItems.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.path}
                                className={navActiveClass}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>
                    <div className="relative z-10 flex gap-3">
                        <button
                            title="List your property"
                            className="cta-btn bg-gray-200"
                        >
                            <RiFileList3Line className="z-10 text-xl min-[390px]:hidden" />
                            <span className="z-10 hidden min-[390px]:inline-block">
                                List your property
                            </span>
                        </button>
                        <button
                            title="Sign In / Register"
                            className="cta-btn bg-blue text-white"
                            onClick={handleLoginModal}
                        >
                            <FaRegUserCircle className="z-10 text-xl lg:text-lg" />
                            <span className="z-10 hidden lg:inline-block">
                                Sign In / Register
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            {showLoginModal && (
                <div className="absolute inset-0 z-[20] flex h-screen w-screen items-start justify-center overflow-scroll bg-black/80 py-8 md:items-center">
                    <div
                        className="absolute inset-0 z-30"
                        onClick={handleLoginModal}
                    ></div>
                    <div className="container relative z-40 max-w-[500px]">
                        <LoginModal handleLoginModal={handleLoginModal} />
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar
