import { useState, useEffect } from 'react'
import useTemporaryData from '../hooks/useTemporaryData'
import TableRow from './TableRow'
import axiosPrivate from '../api/axiosPrivate'
export default function Table({ billings, setBillings }) {
    const [pageNum, setPageNum] = useState(0)
    const [TotalDocCount, setTotalDocCount] = useState(0);
    const pageCount = Math.ceil(TotalDocCount / 10);
    const [temporaryData, setTemporaryData] = useTemporaryData()
    useEffect(() => {
        axiosPrivate.get(`https://quiet-plateau-67251.herokuapp.com/api/billing-list?pageNum=${pageNum}`)
            .then(res => setBillings(res.data) & setTemporaryData(null))
    }, [billings, pageNum, setBillings, setTemporaryData])
    useEffect(() => {
        axiosPrivate.get('https://quiet-plateau-67251.herokuapp.com/api/total-billings-docs')
            .then(res => setTotalDocCount(res.data.count))
    }, [billings])
    const tr = <tr>
        <th>Billing id</th>
        <th>full Name</th>
        <th>email</th>
        <th>phone</th>
        <th>paid amount</th>
        <th>action</th>
    </tr>

    return (
        <div className="overflow-x-auto">

            <table className="table w-full">
                <thead>
                    {tr}
                </thead>
                <tbody>
                    {
                        billings.map(b => <TableRow key={b._id} data={b} />)
                    }
                    {
                        temporaryData && <tr>
                            <th>Please Wait ...</th>
                            <td>{temporaryData.name}</td>
                            <td>{temporaryData.email}</td>
                            <td>{temporaryData.phone}</td>
                            <td>{temporaryData.bill}</td>
                            <td className='space-x-2'>
                                <button disabled className="btn btn-sm">Edit</button>
                                <button disabled className="btn btn-sm"> Delete</button>
                            </td>
                        </tr>
                    }

                </tbody>
            </table>

            <div className='flex items-center justify-center mt-10'>
                <div className="btn-group">
                    {
                        [...Array(pageCount).keys()].map(page => <button key={page} className={`btn ${pageNum === page ? 'bg-gray-900' : ''}`} onClick={() => { setPageNum(page) }}>{(page + 1)}</button>)
                    }
                </div>
            </div>
        </div>
    )
}
