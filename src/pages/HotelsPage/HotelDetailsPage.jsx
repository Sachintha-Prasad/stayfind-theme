import React from 'react'
import GuestReviewSection from './GuestReviewSection'
import SearchbarSection from './SearchbarSection'
import Breadcrumb from '../../components/Breadcrumb'
import FAQSection from './FAQSection'
import NearestServicesSection from './NearestServicesSection'
import ServicesAndAmentiesSection from './ServicesAndAmentiesSection'
import RoomsListSection from './RoomsListSection'
import LoginBanner from '../../components/LoginBanner'
import PointsOfInterestSection from './PointsOfInterestSection'
import HotelOverviewSection from './HotelOverviewSection'
import SimillarHotelSection from './SimilarHotelSection'

const HotelDetailsPage = () => {
    return (
        <div className="bg-gray-100">
            <SearchbarSection />
            <Breadcrumb />
            <HotelOverviewSection />
            <PointsOfInterestSection />
            <LoginBanner />
            <RoomsListSection />
            <ServicesAndAmentiesSection />
            <NearestServicesSection />
            <GuestReviewSection />
            <FAQSection />
            <SimillarHotelSection />
        </div>
    )
}

export default HotelDetailsPage
