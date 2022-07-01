import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function Login() {
    <Helmet>
        <title>Register Now - Power Hack</title>
    </Helmet>

    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const onSubmit = data => {
        setLoading(true)
        reset()
        axios.post('http://localhost/api/register', data)
            .then(res => {
                setLoading(false)
                const token = res.data.token
                if (!token) {
                    setError(true)
                }
                else {
                    localStorage.setItem('token', token)
                    toast.success('Successfully Registered')
                    navigate('/')
                }
            })

    }
    return (
        <div>
            {loading && toast('Please Wait')}
            <form className='lg:w-2/5 w-3/4 flex items-center justify-center h-screen mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <div className='w-full space-y-10'>
                    <h1 className='text-5xl text-center'>Please Login</h1>
                    <div>
                        <input {...register("name", { required: "Please Provide Your Name" })}
                            type="text"
                            placeholder="Full Name"
                            className="input input-bordered focus:outline-none w-full" />
                        {errors.name && <span className="text-error capitalize">{errors.name.message}</span>}

                    </div>
                    <div>
                        <input {...register("email",
                            {
                                required: true,
                                pattern: {
                                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                    message: 'Please Enter A Valid Email'
                                }
                            })}
                            type="email"
                            placeholder="Email"
                            className="input input-bordered focus:outline-none w-full" />
                        {errors.email && <span className="text-error capitalize">{errors.email.message}</span>}

                    </div>
                    <div>
                        <input {...register("pass",
                            { required: "Please provide Your password" })}
                            type="password"
                            placeholder="Password"
                            className="input input-bordered focus:outline-none w-full" />
                        {errors.pass && <span className="text-error capitalize">{errors.pass.message}</span>}

                    </div>
                    {
                        error && <div className="alert alert-error shadow-lg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>Your Email Or password Might be Invalid.</span>
                            </div>
                        </div>
                    }
                    <button className='btn btn-success px-8 w-full'>Submit</button>
                    <div>Already Have an Account? <Link to='/login' className='text-success font-semibold'>Login Now.</Link></div>

                </div>
            </form>

        </div>
    )
}
