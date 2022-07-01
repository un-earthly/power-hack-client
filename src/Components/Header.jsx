import { useEffect, useState } from 'react'
import axiosPrivate from '../api/axiosPrivate'

export default function Header() {
    const [total, setTotal] = useState(0)
    useEffect(() => {
        axiosPrivate.get('http://localhost/api/total-biling-price')
            .then(res => setTotal(res.data.total))
    }, [total])
    return (
        <nav className='flex items-center justify-between mx-auto py-3 px-20 bg-base-300'>
            <h1 className="text-lg font-bold uppercase">Power <span className="text-info">Hack</span></h1>
            <h1 className="uppercase font-semibold">Paid Total:{total}</h1>
        </nav>
    )
}
