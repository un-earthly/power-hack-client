import React, { useState } from 'react'
import axiosPrivate from '../api/axiosPrivate';
import useModalControllers from '../hooks/useModalControllers';
import Form from './Form';
import MyModal from './Modal';
import useTemporaryData from '../hooks/useTemporaryData';
import ShowSearchResult from './ShowSearchResult';
import { toast } from 'react-toastify';
export default function SearchHeader() {
    const [query, setQuery] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [modalIsOpen, setIsOpen] = useModalControllers()
    const findQuery = e => {
        e.preventDefault()
        const isEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(query)
        const isPhone = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(query)
        const toQuery = isEmail ? { "email": query }
            : isPhone ? { "phone": query }
                : { "name": query }
        axiosPrivate.post(`https://quiet-plateau-67251.herokuapp.com/api/billing-list`, toQuery)
            .then(res => setSearchResult(res.data))
    }
    const [, setTemporaryData] = useTemporaryData()
    const addBill = data => {
        setTemporaryData(data)
        axiosPrivate.post('https://quiet-plateau-67251.herokuapp.com/api/add-billing', data)
            .then(res => toast(`Successfully Added ${res.data.insertedId}`));
    };
    function openModal() {
        setIsOpen(true);
    }


    return (
        <div>
            <div className="navbar bg-base-200 mb-5">
                <div className="flex-1">
                    <p className="btn btn-ghost normal-case text-xl hidden md:inline-flex">Billings</p>
                    <form onSubmit={e => findQuery(e)} className="form-control relative">
                        <input value={query} onChange={e => setQuery(e.target.value)}
                            type="text" placeholder="i.e (fullname, 01234567891 | user@gmail.com)"
                            className="input lg:w-96 input-bordered focus:outline-none" />
                        <button disabled={!query} className=" absolute right-0 ">
                            <label disabled={!query} for="searchResult" className='text-white btn btn-accent'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" pointer-events-none h-8 w-6" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </label>
                        </button>
                    </form>
                    <ShowSearchResult searchResult={searchResult} setSearchResult={setSearchResult} />
                </div>

                <div className="flex-none gap-2">
                    <button onClick={openModal} htmlFor="billingModal" className="btn modal-button">Add new bill</button>
                    <MyModal modalIsOpen={modalIsOpen} tagline={"Adding New Biling Info"} setIsOpen={setIsOpen}><Form handler={addBill} /></MyModal>
                </div>
            </div>


        </div>
    )
}
