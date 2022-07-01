import React from 'react'

export default function ShowSearchResult({ searchResult, setSearchResult }) {
    return (
        <>
            <input type="checkbox" id="searchResult" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setSearchResult([])} for="searchResult" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div class="overflow-x-auto p-3">
                        <table class="table table-compact w-full">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>email</th>
                                    <th>phone</th>
                                    <th>bill</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    searchResult.map(s => <tr key={s._id}>
                                        <th>{s.name}</th>
                                        <td>{s.email}</td>
                                        <td>{s.phone}</td>
                                        <td>{s.bill}</td>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
