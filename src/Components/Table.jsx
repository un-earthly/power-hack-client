import useBillings from '../hooks/useBillings'
import useTemporaryData from '../hooks/useTemporaryData'
import TableRow from './TableRow'

export default function Table() {
    const [temporaryData] = useTemporaryData()
    const [billings] = useBillings()
    const tr = <tr>
        <th>Billing id</th>
        <th>full Name</th>
        <th>email</th>
        <th>phone</th>
        <th>paid amount</th>
        <th>action</th>
    </tr>
    return (
        <div className="overflow-x-auto">

            <table className="table w-full">
                <thead>
                    {tr}
                </thead>
                <tbody>
                    {
                        billings.map(b => <TableRow key={b._id} data={b} />)
                    }
                    {
                        temporaryData && <tr>
                            <th>Please Wait ...</th>
                            <td>{temporaryData.name}</td>
                            <td>{temporaryData.email}</td>
                            <td>{temporaryData.phone}</td>
                            <td>{temporaryData.bill}</td>
                            <td className='space-x-2'>
                                <button disabled className="btn btn-sm">Edit</button>
                                <button disabled className="btn btn-sm"> Delete</button>
                            </td>
                        </tr>
                    }

                </tbody>
            </table>
        </div>
    )
}
