import React from 'react'
import GuestReviews from '../../components/GuestReviews'

const GuestReviewSection = () => {
    const categoriesRatingList = [
        { category: 'Dishes', rating: 8.7, percent: 'w-[87%]' },
        { category: 'Swimming', rating: 9.2, percent: 'w-[92%]' },
        { category: 'Rooms', rating: 8.8, percent: 'w-[88%]' },
        { category: 'Location', rating: 8.9, percent: 'w-[89%]' },
        { category: 'Services', rating: 9.2, percent: 'w-[92%]' },
        { category: 'Cleanliness', rating: 8.6, percent: 'w-[86%]' },
    ]

    const reviewsList = [
        {
            guestImg: '',
            guestName: 'Mark Gray',
            date: '04 Jan 2024',
            country: 'Germany',
            review: 'In a free hour, but in certain circumstances and owing to the claims of duty or the obligations of business, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.',
        },
        {
            guestImg:
                'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
            guestName: 'Adam Snow',
            date: '20 Feb 2024',
            country: 'USA',
            review: 'In a free hour, but in certain circumstances and owing to the claims of duty or the obligations of business, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.',
        },
        {
            guestImg: '',
            guestName: 'Keny White',
            date: '02 Apr 2024',
            country: 'Canada',
            review: 'In a free hour, but in certain circumstances and owing to the claims of duty or the obligations of business, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed.',
        },
    ]

    return (
        <section>
            <div className="container pt-6">
                <div className="flex flex-col gap-4 rounded-lg bg-white py-4">
                    <h2 className="px-4 text-xl font-semibold sm:px-6">
                        Guest Reviews
                    </h2>
                    <hr className="h-[1px] w-full bg-gray-300" />
                    <GuestReviews
                        categoriesRatingList={categoriesRatingList}
                        reviewsList={reviewsList}
                    />
                </div>
            </div>
        </section>
    )
}

export default GuestReviewSection
