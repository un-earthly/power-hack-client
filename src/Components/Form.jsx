import React from 'react'
import { useForm } from 'react-hook-form';

export default function Form({ handler }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <form className='space-y-3' onSubmit={handleSubmit(handler)}>
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
    )
}
