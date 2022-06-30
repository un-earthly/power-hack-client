import React, { useState } from 'react'
import axiosPrivate from '../api/axiosPrivate';
import { useForm } from 'react-hook-form';
import useTemporaryData from '../hooks/useTemporaryData';
export default function SearchHeader() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [query, setQuery] = useState('')
    const [, setTemporaryData] = useTemporaryData()
    const addBill = data => {
        setTemporaryData(data)
        axiosPrivate.post('http://localhost/api/add-billing', data)
            .then(res => console.log(res.data))
        reset()
    };
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
                    <label htmlFor="my-modal-3" className="btn modal-button">Add new bill</label>
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <form className='space-y-3' onSubmit={handleSubmit(addBill)}>
                                <div className="w-4/5">
                                    <input {
                                        ...register("name",
                                            { required: "please enter your full name" })
                                    }
                                        type="text"
                                        placeholder="Full Name"
                                        className="input input-bordered focus:outline-none w-full" />
                                    {errors.name && <span className="text-error capitalize">{errors.name.message}</span>}
                                </div>
                                <div className="w-4/5">
                                    <input {
                                        ...register("email",
                                            {
                                                required: true,
                                                pattern: {
                                                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                                    message: 'Please Enter A Valid Email'
                                                }
                                            })
                                    }
                                        type="email"
                                        placeholder="Email"
                                        className="input input-bordered focus:outline-none w-full" />
                                    {errors.email && <span className="text-error capitalize">{errors.email.message}</span>}
                                </div>
                                <div className="w-4/5">
                                    <input {
                                        ...register("phone",
                                            {
                                                required: true,
                                                pattern: {
                                                    value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{5}$/,
                                                    message: 'Please Enter A Valid Number like 0123456789'
                                                }
                                            })
                                    }
                                        type="phone"
                                        placeholder="Phone"
                                        className="input input-bordered focus:outline-none w-full" />
                                    {errors.phone && <span className="text-error capitalize">{errors.phone.message}</span>}
                                </div>
                                <div className="w-4/5">
                                    <input {
                                        ...register("bill",
                                            {
                                                required: "Please Enter Billing Amount ",
                                                valueAsNumber: true
                                            })
                                    }
                                        type="number"
                                        placeholder="Billing Amount"
                                        className="input input-bordered focus:outline-none w-full" />
                                    {errors.bill && <span className="text-error capitalize">{errors.bill.message}</span>}
                                </div>
                                <button className="btn btn-success">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
