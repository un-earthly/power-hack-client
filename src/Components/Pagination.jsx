import React from 'react'

export default function Pagination({ pageCount }) {
    return (
        <div className='flex items-center justify-center'>
            <div className="btn-group">
                <button className="btn">1</button>
                <button className="btn">2</button>
                <button className="btn btn-disabled">...</button>
                <button className="btn">99</button>
                <button className="btn">100</button>
            </div>
        </div>
    )
}
