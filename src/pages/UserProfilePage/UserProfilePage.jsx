import React from 'react'
import ProfileSidebar from './ProfileSidebar'
import MyProfile from './MyProfile'

const UserProfilePage = () => {
    return (
        <div className="bg-gray-100">
            <div className="py-12"></div>
            <section>
                <div className="container grid gap-6 py-12 md:grid-cols-3">
                    <div>
                        <ProfileSidebar />
                    </div>
                    <div className="md:col-span-2">
                        <MyProfile />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UserProfilePage
