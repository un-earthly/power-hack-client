import React from 'react'

export default function Pagination({pageCount}) {
    return (
        <div className='flex items-center justify-center'>
            <div class="btn-group">
                <button class="btn btn-active">1</button>
                <button class="btn">2</button>
                <button class="btn">3</button>
                <button class="btn">4</button>
            </div>
        </div>
    )
}
