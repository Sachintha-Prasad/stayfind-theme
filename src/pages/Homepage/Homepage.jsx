import React from 'react'
import Hero from './Hero'
import PromotionsSection from './PromotionsSection'
import DomesticRoutesSection from './DomesticRoutesSection'
import FeaturedRentalSection from './FeaturedRentalSection'
import PopoularDestinationSection from './PopularDestinationsSection'
import SubscribeSection from './SubscribeSection'
import InternationalRoutesSection from './InternationalRoutesSection'
import FeaturesSection from './FeaturesSection'
import PromotionsAndDeals from './PromotionsAndDeals'

const Homepage = () => {
    return (
        <div>
            <Hero />
            <FeaturesSection />
            <PromotionsSection />
            <PromotionsAndDeals />
            <DomesticRoutesSection />
            <PopoularDestinationSection />
            <FeaturedRentalSection />
            <InternationalRoutesSection />
            <SubscribeSection />
        </div>
    )
}

export default Homepage
