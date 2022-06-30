import React from 'react'
import Header from './Header'
import Pagination from './Pagination'

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Pagination />
        </div>
    )
}
