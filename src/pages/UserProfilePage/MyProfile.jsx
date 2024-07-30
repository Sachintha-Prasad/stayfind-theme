import React from 'react'
import PersonalInformationSection from './PersonalInformationSection'
import UpdateEmailSection from './UpdateEmailSection'
import UpdatePasswordSection from './UpdatePasswordSection'

const MyProfile = () => {
    return (
        <div className="flex flex-col gap-6">
            <PersonalInformationSection />
            <UpdateEmailSection />
            <UpdatePasswordSection />
        </div>
    )
}

export default MyProfile
