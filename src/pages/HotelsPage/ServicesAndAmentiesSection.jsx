import React from 'react'

const ServicesAndAmentiesSection = () => {
    const amentiesList = [
        {
            type: 'parking',
            isFree: true,
        },
        {
            type: 'outdoor swimming pool',
            isFree: false,
        },
        {
            type: 'meeting room',
            isFree: false,
        },
        {
            type: "children's playground",
            isFree: false,
        },
        {
            type: 'multi-functional room',
            isFree: false,
        },
        {
            type: 'smoking area',
            isFree: false,
        },
        {
            type: 'fitness room',
            isFree: false,
        },
        {
            type: 'WI-FI in public areas',
            isFree: true,
        },
        {
            type: 'languages spoken at front desk',
            isFree: false,
        },
        {
            type: 'luggage storage',
            isFree: false,
        },
        {
            type: '24h front desk',
            isFree: false,
        },
    ]

    const amentiesImgList = [
        {
            img: 'https://img.freepik.com/free-photo/room-used-official-event_23-2151054260.jpg',
            type: 'meeting room',
        },
        {
            img: 'https://s.wsj.net/public/resources/images/PJ-BE629_RESTO_G_20120104173517.jpg',
            type: 'resturant',
        },
        {
            img: 'https://stageseilfabrik.b-cdn.net/wp-content/uploads/2023/03/Berliner_Elite-Areas_Lyttos-Beach-Hotel-Crete_Greece_01-1-960x600.jpg',
            type: 'playground',
        },
        {
            img: 'https://media.architecturaldigest.com/photos/5c6452972a81d22dc23c83f9/16:9/w_2580,c_limit/Midnight%20Rambler-TX.jpg',
            type: 'night bars',
        },
    ]

    return (
        <section>
            <div className="container pt-6">
                <div className="flex flex-col gap-4 rounded-lg bg-white py-4">
                    <h2 className="px-3 text-xl font-semibold sm:px-6">
                        Services & Amenties
                    </h2>

                    <hr className="h-[1px] w-full bg-gray-300" />

                    <div className="flex w-full flex-col gap-6 px-3 sm:px-6">
                        <div className="flex flex-col gap-4 md:flex-row">
                            <h3 className="min-w-[200px] font-semibold">
                                Most popular Amenties
                            </h3>

                            <div className="flex w-full flex-col gap-3">
                                <div className="grid w-full gap-x-12 gap-y-3 min-[400px]:grid-cols-2 lg:grid-cols-3">
                                    {amentiesList.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex w-full gap-2"
                                        >
                                            <p className="capitalize">
                                                {item.type}
                                            </p>
                                            {item.isFree && (
                                                <p className="font-medium text-green-500">
                                                    Free
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
                                    {amentiesImgList.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center gap-2 rounded-md border border-dashed border-gray-300 p-2"
                                        >
                                            <div className="flex max-h-[150px] w-full items-center justify-center overflow-hidden rounded">
                                                <img
                                                    src={item.img}
                                                    alt={item.type}
                                                    className="h-[200px] w-full object-cover object-center"
                                                />
                                            </div>
                                            <p className="text-center capitalize">
                                                {item.type}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesAndAmentiesSection
