import React, { useState } from 'react'
import axiosPrivate from '../api/axiosPrivate';
import useModalControllers from '../hooks/useModalControllers';
import Form from './Form';
import MyModal from './Modal';
import useTemporaryData from '../hooks/useTemporaryData';
export default function SearchHeader() {
    const [query, setQuery] = useState('')
    const [modalIsOpen, setIsOpen] = useModalControllers()
    const findQuery = () => {
        const isEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(query)
        const isPhone = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(query)
        const toQuery = isEmail ? { "email": query }
            : isPhone ? { "phone": query }
                : { "name": query }
        axiosPrivate.post(`http://localhost/api/billing-list`, toQuery)
            .then(res => console.log(res.data))
    }
    const [, setTemporaryData] = useTemporaryData()
    const addBill = data => {
        setTemporaryData(data)
        axiosPrivate.post('http://localhost/api/add-billing', data)
            .then(res => console.log(res.data));
    };
    function openModal() {
        setIsOpen(true);
    }


    return (
        <div>
            <div className="navbar bg-base-200 mb-5">
                <div className="flex-1">
                    <p className="btn btn-ghost normal-case text-xl hidden md:inline-flex">Billings</p>
                    <div className="form-control">
                        <input value={query} onChange={e => setQuery(e.target.value)}
                            onKeyUp={e => e.key === 'Enter' && findQuery()}
                            type="text" placeholder="i.e (fullname, +8801234567891 | user@gmail.com)"
                            className="input lg:w-96 input-bordered focus:outline-none" />

                    </div>
                </div>

                <div className="flex-none gap-2">
                    <button onClick={openModal} htmlFor="billingModal" className="btn modal-button">Add new bill</button>
                    <MyModal modalIsOpen={modalIsOpen} billingId={"Adding New Biling Info"} setIsOpen={setIsOpen}><Form handler={addBill} /></MyModal>
                </div>
            </div>


        </div>
    )
}
