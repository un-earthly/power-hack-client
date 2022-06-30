import React, { useState } from 'react'
import axiosPrivate from '../api/axiosPrivate';
import BillingModal from './BillingModal';
export default function SearchHeader() {
    const [query, setQuery] = useState('')
    const findQuery = () => {
        const isEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(query)
        const isPhone = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(query)
        const toQuery = isEmail ? { "email": query }
            : isPhone ? { "phone": query }
                : { "name": query }
        axiosPrivate.post(`http://localhost/api/billing-list`, toQuery)
            .then(res => console.log(res.data))
    }


    return (
        <div>
            <div className="navbar bg-base-200 mb-5">
                <div className="flex-1">
                    <p className="btn btn-ghost normal-case text-xl">Billings</p>
                    <div className="form-control">
                        <input value={query} onChange={e => setQuery(e.target.value)}
                            onKeyUp={e => e.key === 'Enter' && findQuery()}
                            type="text" placeholder="i.e (fullname, +8801234567891 | user@gmail.com)"
                            className="input w-96 input-bordered focus:outline-none" />

                    </div>
                </div>

                <div className="flex-none gap-2">
                    <label htmlFor="billingModal" className="btn modal-button">Add new bill</label>
                    <BillingModal />
                </div>
            </div>


        </div>
    )
}
