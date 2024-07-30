import React from 'react'

const NearestServicesSection = () => {
    const servicesList = [
        {
            title: 'Transport',
            list: [
                { name: 'Metro: Lavender', distance: '360m' },
                { name: 'Metro: Jalan Besar MRT', distance: '80m' },
                { name: 'Airport:Singapore Changi Airport', distance: '160m' },
                { name: 'Train:Woodlands Train Checkpoint', distance: '200m' },
            ],
        },
        {
            title: 'Landmarks',
            list: [
                { name: 'Sentosa', distance: '300m' },
                { name: 'Gardens by the bay', distance: '80m' },
            ],
        },
        {
            title: 'Dining',
            list: [
                { name: 'Mestof', distance: '200m' },
                { name: 'Lefoget', distance: '25m' },
                { name: 'Calendder', distance: '800m' },
            ],
        },
        {
            title: 'Shopping',
            list: [
                { name: 'Bugis Street', distance: '500m' },
                { name: 'Ngee Ann City', distance: '400m' },
                { name: 'Tekka Centre', distance: '300m' },
                { name: 'Mustafa Centre', distance: '1800m' },
                { name: 'Hafei', distance: '80m' },
                { name: 'Metlqto', distance: '800m' },
            ],
        },
    ]

    return (
        <section>
            <div className="container pt-6">
                <div className="flex flex-col gap-4 rounded-lg bg-white py-4">
                    <h2 className="px-4 text-xl font-semibold sm:px-6">
                        Nearest Services
                    </h2>

                    <hr className="h-[1px] w-full bg-gray-300" />

                    <div className="flex w-full flex-col gap-6 px-4 sm:px-6">
                        {servicesList.map((service, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-4 md:flex-row"
                            >
                                <h3 className="min-w-[200px] font-semibold">
                                    {service.title}
                                </h3>
                                <div className="grid w-full gap-x-12 gap-y-3 min-[400px]:grid-cols-2 lg:grid-cols-3">
                                    {service.list.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex w-full items-start justify-between gap-2"
                                        >
                                            <p>{item.name}</p>
                                            <p className="text-gray-400">
                                                {item.distance}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NearestServicesSection
