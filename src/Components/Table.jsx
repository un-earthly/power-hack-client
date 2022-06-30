import React from 'react'

export default function Table() {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Billing id</th>
                        <th>full Name</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>paid amount</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>Blue</td>
                        <td className='space-x-2'>
                            <button className="btn btn-sm">Edit</button>
                            <button className="btn btn-sm"> Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
