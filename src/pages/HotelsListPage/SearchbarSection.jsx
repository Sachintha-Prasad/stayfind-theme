import React from 'react'
import Searchbar from '../../components/Searchbar/Searchbar'
import DatePickerComponent from '../../components/Searchbar/DatePicker/DatePickerComponent'
import GuestCount from '../../components/Searchbar/GuestCount'

const SearchbarSection = () => {
    return (
        <section
            id="#"
            className="relative z-0 flex h-[400px] w-screen flex-col items-end justify-center md:h-[300px]"
        >
            <div className="relative h-full w-full overflow-x-hidden">
                <div className="absolute left-1/2 z-0 h-full w-[1840px] -translate-x-1/2 overflow-hidden rounded-b-[50%] 2xl:w-[120vw]">
                    <div className="h-full w-full bg-[url('/hotel-list-cover.jpg')] bg-cover bg-top bg-no-repeat"></div>
                </div>
            </div>

            <div className="relative h-8 w-full">
                <div className="container absolute bottom-0 left-1/2 z-10 -translate-x-1/2">
                    <form
                        className="grid w-full grid-cols-1 gap-3 rounded-xl border border-gray-300 bg-white p-2 shadow-lg md:grid-cols-2 lg:grid-cols-8"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="lg:col-span-3">
                            <Searchbar />
                        </div>
                        <div className="lg:col-span-2">
                            <DatePickerComponent />
                        </div>
                        <div className="lg:col-span-2">
                            <GuestCount />
                        </div>
                        <button
                            type="submit"
                            className="cta-btn z-[5] bg-blue text-base text-white"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SearchbarSection
