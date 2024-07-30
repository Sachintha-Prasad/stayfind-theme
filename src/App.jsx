import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import SubLayout from './layout/SubLayout'
import Homepage from './pages/Homepage/Homepage'
import NotFoundPage from './pages/NotFoundPage'
import HotelDetailsPage from './pages/HotelsPage/HotelDetailsPage'
import DestinationDetailsPage from './pages/DestinationsPage/DestinationDetailsPage'
import ContactPage from './pages/ContactPage'
import HotelsListPage from './pages/HotelsListPage/HotelsListPage'
import UserProfilePage from './pages/UserProfilePage/UserProfilePage'

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/">
                {/* main layout */}
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Homepage />} />
                    <Route path="/place-to-stay" element={<HotelsListPage />} />
                    <Route
                        path="/place-to-stay/hotel-taversery"
                        element={<HotelDetailsPage />}
                    />
                    <Route path="contact" element={<ContactPage />} />
                </Route>

                {/* sub layout */}
                <Route path="/" element={<SubLayout />}>
                    <Route
                        path="/destinations"
                        element={<DestinationDetailsPage />}
                    />
                    <Route path="/my-profile" element={<UserProfilePage />} />
                </Route>

                <Route path="*" element={<NotFoundPage />} />
            </Route>
        )
    )

    return <RouterProvider router={router} />
}

export default App
