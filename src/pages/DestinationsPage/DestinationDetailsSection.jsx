import React, { useState } from 'react'
import Overview from './DestinationDetails/Overview'
import Itinerary from './DestinationDetails/Itinerary'
import HotelsTransfers from './DestinationDetails/HotelsTransfers'
import BookingSidebar from './DestinationDetails/BookingSidebar'

const DestinationDetailsSection = () => {
    const [activeTab, setActiveTab] = useState('overview')

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return <Overview />
            case 'itinerary':
                return <Itinerary />
            case 'hotelsTransfers':
                return <HotelsTransfers />
            default:
                return <Overview />
        }
    }

    return (
        <section className="container flex flex-col gap-6 py-12">
            <div className="grid w-full grid-cols-2 gap-2 rounded-md bg-indigo-100 p-2 sm:grid-cols-3">
                <button
                    className={`px-4 py-3 text-center font-medium sm:text-lg ${activeTab === 'overview' ? 'rounded-md bg-blue text-white' : 'text-blue'}`}
                    onClick={() => setActiveTab('overview')}
                >
                    Overview
                </button>
                <button
                    className={`px-4 py-3 text-center font-medium sm:text-lg ${activeTab === 'itinerary' ? 'rounded-md bg-blue text-white' : 'text-blue'}`}
                    onClick={() => setActiveTab('itinerary')}
                >
                    Itinerary
                </button>
                <button
                    className={`col-span-2 px-4 py-3 text-center font-medium sm:col-span-1 sm:text-lg ${activeTab === 'hotelsTransfers' ? 'rounded-md bg-blue text-white' : 'text-blue'}`}
                    onClick={() => setActiveTab('hotelsTransfers')}
                >
                    Hotels & Transfers
                </button>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
                <div className="lg:col-span-3">{renderContent()}</div>

                <div>
                    <BookingSidebar />
                </div>
            </div>
        </section>
    )
}

export default DestinationDetailsSection
