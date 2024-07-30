import React from 'react'
import SectionHeading from '../../components/SectionHeading'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const PromotionsAndDeals = () => {
    const promotionAndDealsList = [
        {
            promotion: 'promotion 1',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2dceePdFBozs1x0Sm6JA-FYnjqfU3DTVheCqtIcei_kgu0Uovum3hihN7pgCJC1C1DI&usqp=CAU',
        },
        {
            promotion: 'promotion 2',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOJDTarGO81VYlQJllXdnEpKiUEiVn1AS7w&s',
        },
        {
            promotion: 'promotion 3',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGFAPBnO58wFL0dkQrMFuXWf3k58K9QD-5Lq3HGNHDR4q3FSHPmKU8i8ik__072ILQaNY&usqp=CAU',
        },
        {
            promotion: 'promotion 4',
            imgUrl: 'https://bngkolkata.com/wp-content/uploads/2016/10/hotel-promotion-bng.jpg',
        },
        {
            promotion: 'promotion 5',
            imgUrl: 'https://bngkolkata.com/wp-content/uploads/2016/10/hotel-promotion-bng.jpg',
        },
    ]

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 968 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 968, min: 600 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
        },
    }

    const CustomLeftArrow = ({ onClick }) => (
        <button
            className="text-transition absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-indigo-100 text-blue hover:bg-blue hover:text-white"
            onClick={onClick}
        >
            <FaAngleLeft />
        </button>
    )

    const CustomRightArrow = ({ onClick }) => (
        <button
            className="text-transition absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-indigo-100 text-blue hover:bg-blue hover:text-white"
            onClick={onClick}
        >
            <FaAngleRight />
        </button>
    )

    return (
        <section>
            <div className="container flex flex-col gap-6 pt-12">
                <SectionHeading title={'Promotions & deals'} />
                <Carousel
                    responsive={responsive}
                    draggable={true}
                    itemClass="px-1.5"
                    customLeftArrow={<CustomLeftArrow />}
                    customRightArrow={<CustomRightArrow />}
                >
                    {promotionAndDealsList.map((item, index) => (
                        <Link
                            to={`/${item.promotion.replace(' ', '-')}`}
                            key={index}
                            className="w-full overflow-hidden rounded-md"
                        >
                            <img
                                src={item.imgUrl}
                                alt={item.promotion}
                                className="w-full rounded-md object-cover"
                            />
                        </Link>
                    ))}
                </Carousel>
            </div>
        </section>
    )
}

export default PromotionsAndDeals
