import React, { useState } from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FaCircleCheck } from 'react-icons/fa6'

const BookingSidebar = () => {
    const [activeCoupon, setActiveCoupon] = useState('c1')

    const details = {
        price: 100000,
        discont: 20,
        persons: 1,
        coupons: [
            {
                couponId: 'c1',
                couponName: 'eroupsummer',
                decsription:
                    'Its downpouring offers grab exclusive discounts. Offer Ends Soon..Hurry!!!',
                discount: 12000,
            },
            {
                couponId: 'c2',
                couponName: 'eroupsummer',
                decsription:
                    'Its downpouring offers grab exclusive discounts. Offer Ends Soon..Hurry!!!',
                discount: 12000,
            },
            {
                couponId: 'c3',
                couponName: 'eroupsummer',
                decsription:
                    'Its downpouring offers grab exclusive discounts. Offer Ends Soon..Hurry!!!',
                discount: 12000,
            },
        ],
    }

    const handleApplyCoupon = (cid) => {
        setActiveCoupon(cid)
    }

    const handleRemoveCoupon = (cid) => {
        setActiveCoupon(null)
    }

    return (
        <div className="flex flex-col gap-6">
            {/* price container */}
            <div className="flex flex-col gap-3 rounded-md border border-gray-300 py-4">
                <div className="flex flex-col gap-1 px-3">
                    <p className="w-fit rounded bg-yellow px-3 py-1 text-[13px] font-medium capitalize text-white">
                        {details.discont}% off
                    </p>
                    <p className="text-sm text-gray-600 line-through">
                        LKR{details.price.toLocaleString()}
                    </p>

                    <div className="flex flex-wrap items-center gap-1">
                        <h3 className="text-2xl font-semibold">
                            LKR
                            {(
                                details.price -
                                (details.price * details.discont) / 100
                            ).toLocaleString()}
                        </h3>
                        <p className="text-gray-600">
                            per {details.persons} person*
                        </p>
                    </div>

                    <p className="text-sm text-gray-600">
                        *Excluding applicable taxes
                    </p>
                </div>

                <hr className="h-[1px] w-full bg-gray-300" />

                <div className="flex flex-wrap items-center justify-between gap-3 px-3">
                    <div className="flex items-center gap-1">
                        <FaRegCalendarAlt />
                        <p className="font-medium">8 Jul 2024</p>
                    </div>
                    <button className="font-semibold text-blue">Modify</button>
                </div>

                <hr className="h-[1px] w-full bg-gray-300" />

                <div className="flex gap-2 px-3 lg:flex-col">
                    <button className="cta-btn bg-blue text-white">
                        proceed to book online
                    </button>
                    <button className="cta-btn custom-transition bg-indigo-100 text-blue hover:bg-blue hover:text-white">
                        send inquiry
                    </button>
                </div>
            </div>

            {/* coupons container */}
            <div className="flex flex-col gap-3 rounded-md border border-gray-300 py-4">
                <h3 className="px-3 font-semibold">Coupons & Offers</h3>

                <hr className="h-[1px] w-full bg-gray-300" />

                <div className="flex flex-col gap-3 px-3">
                    <div className="flex w-full items-center gap-3 rounded border border-gray-300 p-3">
                        <input
                            type="text"
                            className="w-full outline-none"
                            placeholder="Have a Coupon Code?"
                        />
                        <button className="font-semibold text-blue">
                            Apply
                        </button>
                    </div>

                    <div className="relative py-3">
                        <hr className="h-[1px] w-full bg-gray-300" />
                        <p className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-indigo-100 text-[11px] font-semibold text-gray-400">
                            OR
                        </p>
                    </div>

                    <div className="grid gap-3 sm:max-lg:grid-cols-3">
                        {details.coupons.map((coupon) => (
                            <div
                                key={coupon.couponId}
                                className={`flex cursor-pointer flex-col items-start gap-2 rounded-md p-3 ${activeCoupon === coupon.couponId ? 'bg-green-600/10' : 'bg-indigo-50/80'}`}
                            >
                                <div className="flex w-full flex-wrap items-center justify-between gap-2">
                                    <div className="flex items-center gap-1">
                                        {activeCoupon === coupon.couponId && (
                                            <FaCircleCheck className="text-lg text-green-600" />
                                        )}
                                        <h3 className="font-medium uppercase">
                                            {coupon.couponName}
                                        </h3>
                                    </div>

                                    {activeCoupon === coupon.couponId ? (
                                        <button
                                            className="text-sm font-medium uppercase text-green-600"
                                            onClick={() =>
                                                handleRemoveCoupon(
                                                    coupon.couponId
                                                )
                                            }
                                        >
                                            Remove
                                        </button>
                                    ) : (
                                        <button
                                            className="text-sm font-medium uppercase text-blue"
                                            onClick={() =>
                                                handleApplyCoupon(
                                                    coupon.couponId
                                                )
                                            }
                                        >
                                            Apply
                                        </button>
                                    )}
                                </div>
                                <p className="text-sm text-gray-600">
                                    {coupon.decsription}
                                </p>
                                <p className="text-lg font-semibold">
                                    -LKR{coupon.discount.toLocaleString()}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingSidebar
