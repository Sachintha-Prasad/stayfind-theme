import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const SubLayout = () => {
    return (
        <>
            <Navbar initialState={'colored'} />
            <Outlet />
            <Footer />
        </>
    )
}

export default SubLayout
