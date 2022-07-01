import React, { useState } from 'react'
import Header from './Header'
import SearchHeader from './SearchHeader'
import Table from './Table'
export default function Layout() {
    const [billings, setBillings] = useState([])
    return (
        <div>
            <Header billings={billings} />
            <div className="container mx-auto my-5">
                <SearchHeader />
                <Table billings={billings} setBillings={setBillings} />
            </div>
        </div>
    )
}
