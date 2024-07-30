import React from 'react'
import SearchbarSection from './SearchbarSection'
import FiltersSidebar from './FiltersSidebar'
import HotelsList from './HotelsList'

const HotelsListPage = () => {
    return (
        <div>
            <SearchbarSection />

            <section>
                <div className="container grid gap-6 py-12 md:grid-cols-4">
                    <div>
                        <FiltersSidebar />
                    </div>
                    <div className="md:col-span-3">
                        <HotelsList />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HotelsListPage
