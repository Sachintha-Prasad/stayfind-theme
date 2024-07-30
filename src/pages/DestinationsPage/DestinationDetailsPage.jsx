import React from 'react'
import NewsletterBanner from '../../components/NewsletterBanner'
import Breadcrumb from '../../components/Breadcrumb'
import FAQSection from './FAQSection'
import SimilarDestinationSection from './SimilarDestinationSection'
import DestinationOverviewSection from './DestinationOverviewSection'
import DestinatiationDetailsSection from './DestinationDetailsSection'

const DestinationDetailsPage = () => {
    return (
        <div>
            <div className="py-12"></div>
            <Breadcrumb />
            <DestinationOverviewSection />
            <DestinatiationDetailsSection />
            <SimilarDestinationSection />
            <FAQSection />
            <NewsletterBanner />
        </div>
    )
}

export default DestinationDetailsPage
