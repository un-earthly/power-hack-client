import { useEffect, useState } from 'react'
import axiosPrivate from '../api/axiosPrivate'

export default function useBillings() {
    const [billings, setBillings] = useState([])
    useEffect(() => {
        axiosPrivate.get('http://localhost/api/billing-list')
            .then(res => setBillings(res.data))
    }, [billings])


    return [billings, setBillings]
}
