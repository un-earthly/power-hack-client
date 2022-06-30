import React, { useEffect, useState } from 'react'
import axiosPrivate from '../api/axiosPrivate'
import TableRow from './TableRow'

export default function Table({ temporaryData, setTemporaryData, searchedData }) {
    const [billings, setBillings] = useState([])
    useEffect(() => {
        axiosPrivate.get('https://quiet-plateau-67251.herokuapp.com/api/billing-list')
            .then(res => setBillings(res.data) & setTemporaryData(null))
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

            {
                searchedData.length > 0 && <div className='mx-auto container items-center justify-center flex flex-col my-10'>
                    <h1 className='text-3xl text-success'>Search results</h1>
                    <div className="overflow-x-auto">
                        <table className="table table-compact w-full">
                            <thead>
                                {tr}
                            </thead>
                            <tbody>
                                {
                                    searchedData.map(sd =>
                                        <TableRow key={sd._id} data={sd} />
                                    )}
                            </tbody>
                        </table>
                    </div>

                </div>
            }

            <table className="table w-full">
                <thead>
                    {tr}
                </thead>
                <tbody>
                    {
                        billings.map(b => <TableRow key={b._id} data={b} />
                        )
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
        </div>
    )
}
