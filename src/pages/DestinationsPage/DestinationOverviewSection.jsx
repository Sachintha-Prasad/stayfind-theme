import React from 'react'
import ImageGallery from '../../components/ImageGallery'
import { FaBookmark } from 'react-icons/fa6'
import { FaShareAlt } from 'react-icons/fa'

const DestinationOverviewSection = () => {
    const images = [
        {
            src: 'https://images.unsplash.com/photo-1522310193626-604c5ef8be43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWlyaXNzYXxlbnwwfHwwfHx8MA%3D%3D',
            alt: 'Image 1',
        },
        {
            src: 'https://images.unsplash.com/photo-1594476191313-c2a8d227ce61?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Image 2',
        },
        {
            src: 'https://images.unsplash.com/photo-1579989197355-c2c5ff50a3f3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Image 3',
        },
        {
            src: 'https://images.unsplash.com/photo-1704797390501-37d39f2f6921?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Image 4',
        },
        {
            src: 'https://images.unsplash.com/photo-1593161585430-8809ed80ba3b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Image 5',
        },
        {
            src: 'https://images.unsplash.com/photo-1704797390383-ca416fc65cd1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Image 6',
        },
    ]

    return (
        <section>
            <div className="container pt-6">
                <div className="flex flex-col gap-3 rounded-lg">
                    {/* overview header */}
                    <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl font-bold capitalize">
                                mirissa
                            </h2>
                            <div className="flex items-center gap-2">
                                <p className="text-sm">
                                    4D/5N | 2N Paris | 2N Zurich | 1N Engelberg
                                    |
                                </p>
                                <p className="w-fit rounded bg-green-600/10 px-3 py-1 text-[13px] font-medium capitalize text-green-600">
                                    25 groups
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 md:flex-row">
                            <button className="cta-btn custom-transition gap-2 bg-indigo-100 text-blue hover:bg-blue hover:text-white focus:bg-blue focus:text-white">
                                <FaBookmark /> bookmark
                            </button>
                            <button className="cta-btn custom-transition gap-2 bg-yellow/20 text-yellow hover:bg-yellow hover:text-white focus:bg-yellow focus:text-white">
                                <FaShareAlt /> share
                            </button>
                        </div>
                    </div>

                    {/* image gallery */}
                    <ImageGallery images={images} thumbnailCount={4} />
                </div>
            </div>
        </section>
    )
}

export default DestinationOverviewSection
