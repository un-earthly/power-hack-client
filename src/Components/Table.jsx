import React, { useState } from 'react'
import axiosPrivate from '../api/axiosPrivate'

export default function Table() {
    const [billings, setbillings] = useState([])
    axiosPrivate.get('https://quiet-plateau-67251.herokuapp.com/api/billing-list')
        .then(res => console.log(res.data))
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Billing id</th>
                        <th>full Name</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>paid amount</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}
