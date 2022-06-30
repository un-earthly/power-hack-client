import React from 'react'
import axiosPrivate from '../api/axiosPrivate'
import EditBillingModal from './EditBillingModal'
export default function TableRow({ data }) {

    const deleteBilling = id => {
        axiosPrivate.delete('http://localhost/api/delete-billing/' + id)
            .then(res => console.log(res.data))
    }
    const { name, email, phone, _id: id, bill } = data
    return (
        <>
            <tr>
                <th>{id}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{bill}</td>
                <td className='space-x-2'>
                    <label htmlFor="updateModal" className="btn btn-sm">Edit</label>
                    <button onClick={() => deleteBilling(id)} className="btn btn-sm"> Delete</button>
                </td>
            </tr>
            <EditBillingModal id={id} />
        </>
    )
}
