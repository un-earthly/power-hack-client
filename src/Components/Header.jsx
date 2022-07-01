import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosPrivate from "../api/axiosPrivate";

export default function Header({ billings }) {
    const [total, setTotal] = useState(0);
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('token')
        toast.success('Logout Successfull')
        navigate('/login')
    }
    useEffect(() => {
        axiosPrivate.get('https://quiet-plateau-67251.herokuapp.com/api/total-paid')
            .then(res => setTotal(res.data.total))
    }, [billings])

    return (
        <nav className='flex items-center justify-between mx-auto py-3 md:px-20 px-4 bg-base-300'>
            <h1 className="text-lg font-bold uppercase">Power <span className="text-info">Hack</span></h1>
            <div className="flex space-x-4 items-center">
                <h1 className="uppercase font-semibold">Paid Total:{total}</h1>
                {token ?
                    <div className="tooltip tooltip-bottom text-error tooltip-error" data-tip="error">
                        <span onClick={logout} className='cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-8 h-8" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                            </svg>
                        </span>
                    </div>


                    : ""}
            </div>
        </nav>
    )
}
