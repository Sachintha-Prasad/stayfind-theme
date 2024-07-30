import React from 'react'

const ProductCard = ({ imgUrl, path, children }) => {
    return (
        <a
            href={path}
            className="max-h-[800px] w-full rounded-lg bg-white shadow-lg shadow-gray-300/60"
        >
            <div className="group h-[200px] w-full overflow-hidden rounded-tl-lg rounded-tr-lg">
                <img
                    src={imgUrl}
                    alt=""
                    className="custom-transition h-[200px] w-full object-cover object-center group-hover:scale-110"
                />
            </div>
            <div className="flex flex-col px-6 py-4">{children}</div>
        </a>
    )
}

export default ProductCard
