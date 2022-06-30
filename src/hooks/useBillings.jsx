import { useEffect, useState } from 'react'
import axiosPrivate from '../api/axiosPrivate'
import useTemporaryData from './useTemporaryData'

export default function useBillings() {
    const [billings, setBillings] = useState([])
    const [, setTemporaryData] = useTemporaryData()
    useEffect(() => {
        axiosPrivate.get('http://localhost/api/billing-list')
            .then(res => setBillings(res.data) & setTemporaryData(null))
    }, [billings])


    return [billings, setBillings]
}
