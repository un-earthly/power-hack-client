import React from 'react'
import axiosPrivate from '../api/axiosPrivate';
import useTemporaryData from '../hooks/useTemporaryData';
import { useForm } from 'react-hook-form'
import Form from './Form'
export default function BillingModal() {
    const [, setTemporaryData] = useTemporaryData()
    const { reset } = useForm()
    const addBill = data => {
        setTemporaryData(data)
        axiosPrivate.post('http://localhost/api/add-billing', data)
            .then(res => console.log(res.data))
        reset()
    };
    return (
        <>
            <input type="checkbox" id="billingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="billingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <Form handler={addBill} />
                </div>
            </div>
        </>
    )
}
