import React from 'react'
import PromotionCard from '../../components/Cards/PromotionCard'

const PromotionsSection = () => {
    const promotions = [
        {
            imgUrl: 'https://shreethemes.net/geotrip-live/geotrip/assets/img/city/ct-3.png',
            type: '30% Off On Summer Vacation',
            validDate: '31 August 2024',
        },
        {
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9M_K42X-IalWg4CDZa_HU-eIqiSi2K-pzrHx_YhALumYcTm4_sSCFQu4ydGKimYMK720&usqp=CAU',
            type: '10% Off On Domestic Holiday',
            validDate: '15 July 2024',
        },
        {
            imgUrl: 'https://brabbu.com/blog/wp-content/uploads/2015/11/Holiday-Destinations-for-Winter.jpg',
            type: '40% Off On Winter Vacation',
            validDate: '31 Octomber 2024',
        },
    ]

    return (
        <section>
            <div className="container grid grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
                {promotions.map((item, index) => (
                    <PromotionCard
                        key={index}
                        imgUrl={item.imgUrl}
                        type={item.type}
                        validDate={item.validDate}
                    />
                ))}
            </div>
        </section>
    )
}

export default PromotionsSection
