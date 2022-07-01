import { useEffect, useState } from "react";
import axiosPrivate from "../api/axiosPrivate";

export default function Header({ billings }) {
    const [total, setTotal] = useState(0);
    useEffect(() => {
        axiosPrivate.get('http://localhost/api/total-paid')
            .then(res => setTotal(res.data.total))
    }, [billings])

    return (
        <nav className='flex items-center justify-between mx-auto py-3 md:px-20 px-4 bg-base-300'>
            <h1 className="text-lg font-bold uppercase">Power <span className="text-info">Hack</span></h1>
            <h1 className="uppercase font-semibold">Paid Total:{total}</h1>
        </nav>
    )
}
