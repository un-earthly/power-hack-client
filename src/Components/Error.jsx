import React from 'react'
import { Link } from 'react-router-dom'
export default function Error() {
    return (
        <div className='h-screen overflow-hidden flex items-center justify-center'>
            <div className="text-center">

                <h1 className="text-error text-8xl">
                    <span className="inline-block animate-bounce">4</span><span className="animate-spin inline-block">0</span><span style={{ animationDelay: "500ms" }} className="inline-block animate-bounce delay-150">4</span>
                </h1>
                <div className="divider before:bg-error after:bg-error"></div>
                <p className="uppercase text-error font-semibold animate-pulse">Coudnt find the route </p>
                <Link to="/" className='border-2 border-success rounded-full p-3 px-6 duration-500 hover:bg-success hover:text-base-100 absolute right-10 bottom-10 text-success'>Get Back To Home.</Link>
            </div>
        </div>
    )
}
