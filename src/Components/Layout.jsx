import React from 'react'
import Header from './Header'

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <div className="container mx-auto my-5">
                {children}
            </div>
        </div>
    )
}
