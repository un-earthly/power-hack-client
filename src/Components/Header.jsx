import React, { useState } from 'react'

export default function Header() {
    const [total, setTotal] = useState(0)
    return (
        <nav className='flex items-center justify-between mx-auto py-3 px-20 bg-base-300'>
            <h1 className="text-lg font-bold uppercase">Power <span className="text-info">Hack</span></h1>
            <h1 className="uppercase font-semibold">Paid Total:{total}</h1>
        </nav>
    )
}
