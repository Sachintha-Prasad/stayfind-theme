import React, { useState } from 'react'
import SectionHeading from '../../components/SectionHeading'
import { Link } from 'react-router-dom'

const InternationalRoutesSection = () => {
    const [activeTab, setActiveTab] = useState('countries')

    const tabs = {
        countries: [
            'Flight To France',
            'Flight To Turkey',
            'Flight To Japan',
            'Flight To Italy',
            'Flight To Poland',
            'Flight To Spain',
            'Flight To Germany',
            'Flight To Russia',
            'Flight To China',
            'Flight To India',
            'Flight To France',
            'Flight To Turkey',
            'Flight To Japan',
            'Flight To Italy',
            'Flight To Poland',
            'Flight To Spain',
            'Flight To Germany',
            'Flight To Russia',
            'Flight To China',
            'Flight To India',
            'Flight To France',
            'Flight To Turkey',
            'Flight To Japan',
            'Flight To Italy',
            'Flight To Poland',
            'Flight To Spain',
            'Flight To Germany',
            'Flight To Russia',
            'Flight To China',
            'Flight To India',
        ],
        destinations: [
            'Flight To Paris',
            'Flight To Istanbul',
            'Flight To Tokyo',
            'Flight To Rome',
            'Flight To Warsaw',
            'Flight To Madrid',
            'Flight To Berlin',
            'Flight To Moscow',
            'Flight To Beijing',
            'Flight To Mumbai',
            'Flight To Warsaw',
            'Flight To Madrid',
            'Flight To Berlin',
            'Flight To Moscow',
            'Flight To Beijing',
            'Flight To Mumbai',
        ],
        flights: [
            'Flight To Bangkok',
            'Flight To New York',
            'Flight To Los Angeles',
            'Flight To Dubai',
            'Flight To Singapore',
            'Flight To Hong Kong',
            'Flight To Kuala Lumpur',
            'Flight To Seoul',
            'Flight To Sydney',
            'Flight To Melbourne',
            'Flight To Bangkok',
            'Flight To New York',
            'Flight To Los Angeles',
            'Flight To Dubai',
            'Flight To Singapore',
            'Flight To Hong Kong',
            'Flight To Kuala Lumpur',
            'Flight To Seoul',
            'Flight To Sydney',
            'Flight To Melbourne',
        ],
        airlines: [
            'Flight With Emirates',
            'Flight With Qatar Airways',
            'Flight With Singapore Airlines',
            'Flight With Lufthansa',
            'Flight With British Airways',
            'Flight With Cathay Pacific',
            'Flight With Qantas',
            'Flight With ANA',
            'Flight With Turkish Airlines',
            'Flight With Air France',
            'Flight With Lufthansa',
            'Flight With British Airways',
            'Flight With Cathay Pacific',
            'Flight With Qantas',
            'Flight With ANA',
            'Flight With Turkish Airlines',
            'Flight With Air France',
            'Flight With Lufthansa',
            'Flight With British Airways',
            'Flight With Cathay Pacific',
            'Flight With Qantas',
            'Flight With ANA',
            'Flight With Turkish Airlines',
            'Flight With Air France',
        ],
    }

    return (
        <section>
            <div className="container flex flex-col gap-6 py-12">
                <SectionHeading title={'All International Routes'} />
                <div className="flex flex-wrap items-start gap-2">
                    <div
                        className={`cta-btn cursor-pointer ${activeTab === 'countries' ? 'bg-blue' : 'bg-black'} px-4 py-2 text-white`}
                        onClick={() => setActiveTab('countries')}
                    >
                        Flights To Popular Countries
                    </div>
                    <div
                        className={`cta-btn cursor-pointer ${activeTab === 'destinations' ? 'bg-blue' : 'bg-black'} px-4 py-2 text-white`}
                        onClick={() => setActiveTab('destinations')}
                    >
                        Flights To Popular Destinations
                    </div>
                    <div
                        className={`cta-btn cursor-pointer ${activeTab === 'flights' ? 'bg-blue' : 'bg-black'} px-4 py-2 text-white`}
                        onClick={() => setActiveTab('flights')}
                    >
                        Popular Flights
                    </div>
                    <div
                        className={`cta-btn cursor-pointer ${activeTab === 'airlines' ? 'bg-blue' : 'bg-black'} px-4 py-2 text-white`}
                        onClick={() => setActiveTab('airlines')}
                    >
                        Popular Airlines
                    </div>
                </div>
                <div className="min-h-[250px]">
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                        {tabs[activeTab] &&
                            tabs[activeTab]?.map((route, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="text-transition w-fit outline-none hover:text-yellow focus:text-yellow"
                                >
                                    {route}
                                </a>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InternationalRoutesSection
