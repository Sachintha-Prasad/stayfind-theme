import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { IoClose } from 'react-icons/io5'

const Searchbar = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [showSearchModal, setShowSearchModal] = useState(false)
    const [filteredSuggestions, setFilteredSuggestions] = useState([])

    const sriLankanSuggestions = [
        {
            name: 'Kandy',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbN2j69gLyWKXzyppwRoMknsG-L-0fG_h5EQ&s',
            description: 'religious interests, sightseeing',
        },
        {
            name: 'Sigiriya',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXCpb0Kd4KzDmdEtQsDURYNiv6mo4cCEMqQ&s',
            description: 'sightseeing',
        },
        {
            name: 'Nuwara Eliya',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzqxtN8fUlLswZ6PF0Nlo3d8URlOBxNid4wg&s',
            description: 'sightseeing',
        },
        {
            name: 'Negombo',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDb5T7KJ4pYozRACyzGAmDr44V_AvZoNDSSg&s',
            description: 'beaches, relaxation',
        },
        {
            name: 'Colombo',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcv5bzVXZzUI2PDH5Ua2I43E3WUiu3dy2Fcg&s',
            description: 'shopping, sightseeing',
        },
        {
            name: 'Ella',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxfsrikWs-Piz7sI_4g9eY-6Mzl4bxCwinMQ&s',
            description: 'hiking, sightseeing',
        },
    ]

    const internationalSuggestions = [
        { name: 'Dubai', description: 'shopping, beaches' },
        { name: 'Bangkok', description: 'shopping, restaurants' },
        { name: 'Kuala Lumpur', description: 'shopping, restaurants' },
    ]

    useEffect(() => {
        if (searchQuery) {
            const filteredSriLankan = sriLankanSuggestions.filter(
                (suggestion) =>
                    suggestion.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
            )
            const filteredInternational = internationalSuggestions.filter(
                (suggestion) =>
                    suggestion.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
            )
            setFilteredSuggestions([
                ...filteredSriLankan,
                ...filteredInternational,
            ])
        } else {
            setFilteredSuggestions([
                ...sriLankanSuggestions,
                ...internationalSuggestions,
            ])
        }
    }, [searchQuery])

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const sriLankaDestinations = filteredSuggestions.filter(
        (suggestion) => suggestion.img
    )
    const internationalDestinations = filteredSuggestions.filter(
        (suggestion) => !suggestion.img
    )

    return (
        <div className="h-full w-full">
            <input
                type="text"
                placeholder="Enter a destination or property"
                value={searchQuery}
                onChange={handleInputChange}
                onFocus={() => setShowSearchModal(true)}
                className="h-full w-full rounded-lg border-[1px] border-slate-300 p-3 outline-none focus:ring-1 focus:ring-blue"
            />

            <div
                className={`relative z-[22] hidden w-full sm:block ${showSearchModal ? 'overflow-visible' : 'overflow-hidden'}`}
            >
                <div
                    className={`absolute left-0 top-1.5 z-10 w-full rounded-lg border-[1px] border-gray-300 bg-white p-6 shadow-lg transition-all duration-300 ${showSearchModal ? 'translate-y-0 opacity-100' : '-translate-y-[10px] opacity-0'}`}
                >
                    <button
                        onClick={() => setShowSearchModal(false)}
                        className="absolute right-2 top-2 m-2"
                    >
                        <IoClose className="cursor-pointer text-2xl text-blue" />
                    </button>
                    <div className="grid grid-cols-1 gap-4 divide-y-2 md:grid-cols-2 md:divide-x-2 md:divide-y-0">
                        <div>
                            <h3 className="mb-2 text-lg font-semibold">
                                Destinations in Sri Lanka
                            </h3>
                            {sriLankaDestinations.map((suggestion, index) => (
                                <Link
                                    to={`/destinations/${suggestion.name}`}
                                    key={index}
                                    className="mb-2 flex items-center gap-2"
                                >
                                    <img
                                        src={suggestion.img}
                                        alt={suggestion.name}
                                        className="h-12 w-12 rounded object-cover"
                                    />
                                    <div>
                                        <p className="font-medium">
                                            {suggestion.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {suggestion.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="pt-4 md:pl-4 md:pt-0">
                            <h3 className="mb-2 text-lg font-semibold">
                                International destinations
                            </h3>
                            {internationalDestinations.map(
                                (suggestion, index) => (
                                    <Link
                                        to={`/destinations/${suggestion.name}`}
                                        key={index}
                                        className="mb-2"
                                    >
                                        <p className="font-medium">
                                            {suggestion.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {suggestion.description}
                                        </p>
                                    </Link>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {createPortal(
                <div
                    className={`fixed bottom-0 z-20 h-1 w-full sm:hidden ${showSearchModal ? 'overflow-visible' : 'overflow-hidden'}`}
                >
                    <div
                        className={`absolute bottom-0 left-0 flex h-screen w-full flex-col gap-6 border-[1px] border-gray-300 bg-white p-6 shadow-lg transition-all duration-300 ${showSearchModal ? 'translate-y-0 opacity-100' : 'translate-y-[60px] opacity-0'}`}
                    >
                        <button
                            onClick={() => setShowSearchModal(false)}
                            className="self-end"
                        >
                            <IoClose className="cursor-pointer text-2xl text-blue" />
                        </button>

                        <input
                            type="text"
                            placeholder="Enter a destination or property"
                            value={searchQuery}
                            onChange={handleInputChange}
                            onFocus={() => setShowSearchModal(true)}
                            className="w-full rounded-lg border-[1px] border-slate-300 p-3 outline-none focus:ring-1 focus:ring-blue"
                        />

                        <div className="grid grid-cols-1 gap-4 divide-y-2 md:grid-cols-2 md:divide-x-2 md:divide-y-0">
                            <div>
                                <h3 className="mb-2 text-lg font-semibold">
                                    Destinations in Sri Lanka
                                </h3>
                                {sriLankaDestinations.map(
                                    (suggestion, index) => (
                                        <Link
                                            to={`/destinations/${suggestion.name}`}
                                            key={index}
                                            className="mb-2 flex items-center gap-2"
                                        >
                                            <img
                                                src={suggestion.img}
                                                alt={suggestion.name}
                                                className="h-12 w-12 rounded object-cover"
                                            />
                                            <div>
                                                <p className="font-medium">
                                                    {suggestion.name}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    {suggestion.description}
                                                </p>
                                            </div>
                                        </Link>
                                    )
                                )}
                            </div>
                            <div className="pt-4 md:pl-4 md:pt-0">
                                <h3 className="mb-2 text-lg font-semibold">
                                    International destinations
                                </h3>
                                {internationalDestinations.map(
                                    (suggestion, index) => (
                                        <Link
                                            to={`/destinations/${suggestion.name}`}
                                            key={index}
                                            className="mb-2"
                                        >
                                            <p className="font-medium">
                                                {suggestion.name}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {suggestion.description}
                                            </p>
                                        </Link>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    )
}

export default Searchbar
