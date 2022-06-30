import React from 'react'
import Header from './Header'
import Pagination from './Pagination'

export default function Layout({ children }) {
    return (
        <div>
            <Header />

            <div className="container mx-auto my-5">
                {children}
            </div>
            {/* <Pagination /> */}
        </div>
    )
}
