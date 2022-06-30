import { useEffect, useState } from 'react'
import useBillings from './useBillings'

export default function useTotalPrice() {
    const [total, setTotal] = useState(0);
    const [billings] = useBillings();
    let arrayOfBills = billings.map(b => b.bill);
    let sum = 0;

    for (let i = 0; i < arrayOfBills.length; i++) {
        sum += arrayOfBills[i];
    }
    useEffect(() => {
        setTotal(sum)
    }, [sum, billings])
    return [total, setTotal]
}
