import React, { useState } from 'react'
import Filter from '../../components/Filter'
import { createPortal } from 'react-dom'
import { LuSettings2 } from 'react-icons/lu'
import { IoClose } from 'react-icons/io5'

const FiltersSidebar = () => {
    const [showFilterModal, setShowFilterModal] = useState(false)

    return (
        <>
            <div className="hidden md:block">
                <Filter isBordered={true} />
            </div>

            <div className="flex flex-col items-end md:hidden">
                <button
                    className="cta-btn bg-indigo-100 px-6 text-base text-blue"
                    onClick={() => setShowFilterModal(true)}
                >
                    Filters
                    <LuSettings2 className="text-lg" />
                </button>

                {createPortal(
                    <div
                        className={`fixed bottom-0 z-20 h-1 w-full md:hidden ${showFilterModal ? 'overflow-visible' : 'overflow-hidden'}`}
                    >
                        <div
                            className={`absolute bottom-0 left-0 flex h-screen w-full flex-col gap-3 overflow-y-scroll bg-white p-4 transition-all duration-300 ${showFilterModal ? 'translate-y-0 opacity-100' : 'translate-y-[60px] opacity-0'}`}
                        >
                            <button
                                onClick={() => setShowFilterModal(false)}
                                className="self-end"
                            >
                                <IoClose className="cursor-pointer text-2xl text-blue" />
                            </button>
                            <Filter isBordered={false} />
                        </div>
                    </div>,
                    document.body
                )}
            </div>
        </>
    )
}

export default FiltersSidebar
