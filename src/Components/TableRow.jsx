import React, { useState } from 'react'
import axiosPrivate from '../api/axiosPrivate'
import useModalControllers from '../hooks/useModalControllers';
import Form from './Form';
import MyModal from './Modal';
export default function TableRow({ data }) {
    const [billingId, setBillingId] = useState('');
    const modifyBilling = formData => {
        axiosPrivate.patch('http://localhost/api/update-billing/' + billingId, formData)
            .then(res => console.log(res.data))
    }
    const deleteBilling = id => {
        axiosPrivate.delete('http://localhost/api/delete-billing/' + id)
            .then(res => console.log(res.data))
    }
    const { name, email, phone, _id: id, bill } = data;
    const [modalIsOpen, setIsOpen] = useModalControllers();
    function openModal() {
        setIsOpen(true);
    }
    return (
        <>
            <tr>
                <th>{id}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{bill}</td>
                <td className='space-x-2'>
                    <button onClick={() => openModal() & setBillingId(id)} className="btn btn-sm">Edit</button>
                    <button onClick={() => deleteBilling(id)} className="btn btn-sm"> Delete</button>
                </td>
            </tr>
            <MyModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} billingId={billingId} ><Form handler={modifyBilling} /></MyModal>
        </>
    )
}
