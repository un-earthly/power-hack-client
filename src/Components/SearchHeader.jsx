import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axiosPrivate from '../api/axiosPrivate';

export default function SearchHeader({ setTemporaryData }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [query, setQuery] = useState('')
    const addBill = data => {
        // setTemporaryData(data)
        axiosPrivate.post('https://quiet-plateau-67251.herokuapp.com/api/add-billing').then(res => console.log(res.data))
        reset()
    };
    const findQuery = () => {
        console.log(query)
    }
    return (
        <div>
            <div className="navbar bg-base-200 mb-5">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Billings</a>
                    <div className="flex-none gap-2">
                        <div className="form-control">
                            <input value={query} onChange={e => setQuery(e.target.value)}
                                onKeyUp={e => e.key === 'Enter' ? findQuery() & setQuery('') : ''}
                                type="text" placeholder="i.e (name, number, email)"
                                className="input input-bordered focus:outline-none" />
                        </div>
                    </div>
                </div>

                <div className="flex-none gap-2">
                    <label htmlFor="my-modal-3" className="btn modal-button">Add new bill</label>
                </div>
            </div>

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
                                            message: 'Please Enter A Valid '
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
                                            value: /^([0|+[0-9]{1,5})?([7-9][0-9]{11})$/,
                                            message: 'Please Enter A Valid Number like +8801234567891'
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
    )
}
