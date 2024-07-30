import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = () => {
    const location = useLocation()
    const pathnames = location.pathname.split('/').filter((item) => item)

    return (
        <div className="container flex flex-wrap items-center gap-2 pt-6 capitalize">
            <Link to="/" className="text-blue">
                Home
            </Link>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`
                const isLast = index === pathnames.length - 1
                return isLast ? (
                    <span key={to} className="text-gray-500">
                        / {value.replace(/-/g, ' ')}
                    </span>
                ) : (
                    <span key={to} className="flex items-center">
                        <span>/</span>
                        <Link to={to} className="ml-2 text-blue">
                            {value.replace(/-/g, ' ')}
                        </Link>
                    </span>
                )
            })}
        </div>
    )
}

export default Breadcrumb
