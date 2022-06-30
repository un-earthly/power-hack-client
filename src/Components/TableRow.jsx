import React from 'react'
import axiosPrivate from '../api/axiosPrivate'

export default function TableRow({ data, totalPaid }) {
    const modifyBilling = id => {
        axiosPrivate.patch('https://quiet-plateau-67251.herokuapp.com/api/billing/' + id)
            .then(res => console.log(res.data))
    }
    const deleteBilling = id => {
        axiosPrivate.delete('https://quiet-plateau-67251.herokuapp.com/api/billing/' + id)
            .then(res => console.log(res.data))
    }
    const { name, email, phone, _id: id, bill } = data
    return (
        <tr>
            <th>{id}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{bill}</td>
            <td className='space-x-2'>
                <button onClick={() => modifyBilling(id)} className="btn btn-sm">Edit</button>
                <button onClick={() => deleteBilling(id)} className="btn btn-sm"> Delete</button>
            </td>
        </tr>
    )
}
