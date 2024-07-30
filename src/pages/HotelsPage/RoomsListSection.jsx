import React from 'react'
import { GrView } from 'react-icons/gr'
import { FaSmokingBan } from 'react-icons/fa'
import { RxDimensions } from 'react-icons/rx'
import { IoWifi } from 'react-icons/io5'
import { BsCupHotFill } from 'react-icons/bs'
import { BsLightningChargeFill } from 'react-icons/bs'
import { FaCcVisa } from 'react-icons/fa6'
import { SiTicktick } from 'react-icons/si'
import { MdOutlineBlock } from 'react-icons/md'
import RoomDetailsCard from '../../components/Cards/RoomDetailsCard'

const RoomsListSection = () => {
    const roomsList = [
        {
            roomType: 'superior double room',
            roomImgUrl:
                'https://assets.architecturaldigest.in/photos/65b2aecf269da4a0ee6c9b40/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg',
            specialTags: ['king bed', '3 sleeps'],
            roomAmenties: [
                { icon: <GrView />, type: 'city view' },
                { icon: <FaSmokingBan />, type: 'non smoking' },
                { icon: <RxDimensions />, type: '1800sqft | 6 Floor' },
                { icon: <IoWifi />, type: 'free WIFI' },
                { icon: <GrView />, type: 'city view' },
                { icon: <FaSmokingBan />, type: 'non smoking' },
                { icon: <RxDimensions />, type: '1800sqft | 6 Floor' },
                { icon: <IoWifi />, type: 'free WIFI' },
            ],
            packages: [
                {
                    packageType: 'package-1',
                    facilities: [
                        { icon: <BsCupHotFill />, type: 'breckfirst included' },
                        { icon: <MdOutlineBlock />, type: 'non refundable' },
                        {
                            icon: <BsLightningChargeFill />,
                            type: 'instant confirmation',
                        },
                        { icon: <FaCcVisa />, type: 'prepay online' },
                        {
                            icon: <SiTicktick />,
                            type: 'booking of maximun 5 rooms',
                        },
                    ],
                    price: 8500,
                },
                {
                    packageType: 'package-2',
                    facilities: [
                        { icon: <BsCupHotFill />, type: 'breckfirst included' },
                        { icon: <MdOutlineBlock />, type: 'non refundable' },
                        {
                            icon: <BsLightningChargeFill />,
                            type: 'instant confirmation',
                        },
                        { icon: <FaCcVisa />, type: 'prepay online' },
                        {
                            icon: <SiTicktick />,
                            type: 'booking of maximun 5 rooms',
                        },
                    ],
                    price: 15000,
                },
            ],
        },
        {
            roomType: 'superior twin room with city view',
            roomImgUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtqu34EF5hDq3b9hehya1cs-69rlFC2TBbKA&s',
            specialTags: ['twin double bed', '3 sleeps'],
            roomAmenties: [
                { icon: <GrView />, type: 'city view' },
                { icon: <FaSmokingBan />, type: 'non smoking' },
                { icon: <RxDimensions />, type: '1800sqft | 6 Floor' },
                { icon: <IoWifi />, type: 'free WIFI' },
                { icon: <GrView />, type: 'city view' },
                { icon: <FaSmokingBan />, type: 'non smoking' },
                { icon: <RxDimensions />, type: '1800sqft | 6 Floor' },
                { icon: <IoWifi />, type: 'free WIFI' },
            ],
            packages: [
                {
                    packageType: 'package-1',
                    facilities: [
                        { icon: <BsCupHotFill />, type: 'breckfirst included' },
                        { icon: <MdOutlineBlock />, type: 'non refundable' },
                        {
                            icon: <BsLightningChargeFill />,
                            type: 'instant confirmation',
                        },
                        { icon: <FaCcVisa />, type: 'prepay online' },
                        {
                            icon: <SiTicktick />,
                            type: 'booking of maximun 5 rooms',
                        },
                    ],
                    price: 12500,
                },
                {
                    packageType: 'package-2',
                    facilities: [
                        { icon: <BsCupHotFill />, type: 'breckfirst included' },
                        { icon: <MdOutlineBlock />, type: 'non refundable' },
                        {
                            icon: <BsLightningChargeFill />,
                            type: 'instant confirmation',
                        },
                        { icon: <FaCcVisa />, type: 'prepay online' },
                        {
                            icon: <SiTicktick />,
                            type: 'booking of maximun 5 rooms',
                        },
                    ],
                    price: 25000,
                },
            ],
        },
    ]

    return (
        <section>
            <div className="container flex flex-col gap-6 pt-6">
                {roomsList.map((item, id) => (
                    <RoomDetailsCard details={item} key={id} />
                ))}
            </div>
        </section>
    )
}

export default RoomsListSection
