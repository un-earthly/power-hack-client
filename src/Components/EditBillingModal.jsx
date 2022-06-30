import React from 'react'
import axiosPrivate from '../api/axiosPrivate';
import Form from './Form'
export default function BillingModal({ id }) {
    const modifyBilling = data => {
        axiosPrivate.patch('http://localhost/api/update-billing/' + id, data)
            .then(res => console.log(res.data))
    }
    return (
        <>
            <input type="checkbox" id="updateModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="updateModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <Form handler={modifyBilling} />
                </div>
            </div>
        </>
    )
}
