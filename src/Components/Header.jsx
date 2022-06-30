import React from 'react'

export default function Header({ total }) {
    return (
        <nav className='flex items-center justify-between'>
            <h1 className="text-lg font-bold uppercase">Power <span className="text-info">Hack</span></h1>
            <h1 className="text-lg uppercase">Paid Total:{total}</h1>
        </nav>
    )
}
