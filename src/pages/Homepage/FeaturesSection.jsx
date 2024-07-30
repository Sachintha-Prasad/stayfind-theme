import React from 'react'

const FeaturesSection = () => {
    const featuresList = [
        {
            img: './feature-travel.svg',
            title: 'Top travel app in Sri Lanka',
            description: 'Highly rated in App Store & Google Play',
        },
        {
            img: './feature-shopping.svg',
            title: 'Shop with confidence',
            description: 'No hidden fees, taxes or other nasty surprises',
        },
        {
            img: './feature-pay.svg',
            title: 'Pay the way you want',
            description: 'See only sellers who support your preferred methods',
        },
        {
            img: './feature-booking.svg',
            title: 'Instant booking',
            description:
                'For selected sellers, book with just a couple of clicks',
        },
    ]

    return (
        <section>
            <div className="container grid w-full grid-cols-2 flex-wrap gap-6 pt-12 md:grid-cols-4">
                {featuresList.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                            src={feature.img}
                            alt={feature.title}
                            className="max-w-12 sm:max-w-16"
                        />

                        <h2 className="mt-4 text-center text-lg font-semibold capitalize">
                            {feature.title}
                        </h2>
                        <p className="text-center capitalize text-gray-500">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeaturesSection
