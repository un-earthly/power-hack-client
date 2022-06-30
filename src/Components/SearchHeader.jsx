import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axiosPrivate from '../api/axiosPrivate';
import Loading from './Loading'
export default function SearchHeader({ setTemporaryData, setSearchedData }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(true)
    const addBill = data => {
        setTemporaryData(data)
        axiosPrivate.post('https://quiet-plateau-67251.herokuapp.com/api/add-billing', data)
            .then(res => {
                setLoading(false)
            })
        reset()
    };


    const findQuery = () => {
        const isEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(query)
        const isPhone = /(\+|00)(297|93|244|1264|358|355|376|971|54|374|1684|1268|61|43|994|257|32|229|226|880|359|973|1242|387|590|375|501|1441|591|55|1246|673|975|267|236|1|61|41|56|86|225|237|243|242|682|57|269|238|506|53|5999|61|1345|357|420|49|253|1767|45|1809|1829|1849|213|593|20|291|212|34|372|251|358|679|500|33|298|691|241|44|995|44|233|350|224|590|220|245|240|30|1473|299|502|594|1671|592|852|504|385|509|36|62|44|91|246|353|98|964|354|972|39|1876|44|962|81|76|77|254|996|855|686|1869|82|383|965|856|961|231|218|1758|423|94|266|370|352|371|853|590|212|377|373|261|960|52|692|389|223|356|95|382|976|1670|258|222|1664|596|230|265|60|262|264|687|227|672|234|505|683|31|47|977|674|64|968|92|507|64|51|63|680|675|48|1787|1939|850|351|595|970|689|974|262|40|7|250|966|249|221|65|500|4779|677|232|503|378|252|508|381|211|239|597|421|386|46|268|1721|248|963|1649|235|228|66|992|690|993|670|676|1868|216|90|688|886|255|256|380|598|1|998|3906698|379|1784|58|1284|1340|84|678|681|685|967|27|260|263)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{4,20}$/.test(query)
        const toQuery = isEmail ? { "email": query }
            : isPhone ? { "phone": query }
                : (!isPhone && !isEmail) ? { "name": query }
                    : setSearchedData([])
        console.log(JSON.stringify(toQuery))
        axiosPrivate.get(`http://localhost/api/billing-list?query=` + JSON.stringify(toQuery))
            .then(res => setSearchedData(res.data))
    }
    loading && <Loading />
    return (
        <div>
            <div className="navbar bg-base-200 mb-5">
                <div className="flex-1">
                    <p className="btn btn-ghost normal-case text-xl">Billings</p>
                    <div className="form-control">
                        <input value={query} onChange={e => setQuery(e.target.value)}
                            onKeyUp={e => e.key === 'Enter' && findQuery()}
                            type="text" placeholder="i.e (fullname, +8801234567891 | user@gmail.com)"
                            className="input w-96 input-bordered focus:outline-none" />

                    </div>
                </div>

                <div className="flex-none gap-2">
                    <label htmlFor="my-modal-3" className="btn modal-button">Add new bill</label>
                </div>
            </div>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form className='space-y-3' onSubmit={handleSubmit(addBill)}>
                        <div className="w-4/5">
                            <input {
                                ...register("name",
                                    { required: "please enter your full name" })
                            }
                                type="text"
                                placeholder="Full Name"
                                className="input input-bordered focus:outline-none w-full" />
                            {errors.name && <span className="text-error capitalize">{errors.name.message}</span>}
                        </div>
                        <div className="w-4/5">
                            <input {
                                ...register("email",
                                    {
                                        required: true,
                                        pattern: {
                                            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                            message: 'Please Enter A Valid Email'
                                        }
                                    })
                            }
                                type="email"
                                placeholder="Email"
                                className="input input-bordered focus:outline-none w-full" />
                            {errors.email && <span className="text-error capitalize">{errors.email.message}</span>}
                        </div>
                        <div className="w-4/5">
                            <input {
                                ...register("phone",
                                    {
                                        required: true,
                                        pattern: {
                                            value: /(\+|00)(297|93|244|1264|358|355|376|971|54|374|1684|1268|61|43|994|257|32|229|226|880|359|973|1242|387|590|375|501|1441|591|55|1246|673|975|267|236|1|61|41|56|86|225|237|243|242|682|57|269|238|506|53|5999|61|1345|357|420|49|253|1767|45|1809|1829|1849|213|593|20|291|212|34|372|251|358|679|500|33|298|691|241|44|995|44|233|350|224|590|220|245|240|30|1473|299|502|594|1671|592|852|504|385|509|36|62|44|91|246|353|98|964|354|972|39|1876|44|962|81|76|77|254|996|855|686|1869|82|383|965|856|961|231|218|1758|423|94|266|370|352|371|853|590|212|377|373|261|960|52|692|389|223|356|95|382|976|1670|258|222|1664|596|230|265|60|262|264|687|227|672|234|505|683|31|47|977|674|64|968|92|507|64|51|63|680|675|48|1787|1939|850|351|595|970|689|974|262|40|7|250|966|249|221|65|500|4779|677|232|503|378|252|508|381|211|239|597|421|386|46|268|1721|248|963|1649|235|228|66|992|690|993|670|676|1868|216|90|688|886|255|256|380|598|1|998|3906698|379|1784|58|1284|1340|84|678|681|685|967|27|260|263)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{4,20}$/,
                                            message: 'Please Enter A Valid Number like +8801234567891'
                                        }
                                    })
                            }
                                type="phone"
                                placeholder="Phone"
                                className="input input-bordered focus:outline-none w-full" />
                            {errors.phone && <span className="text-error capitalize">{errors.phone.message}</span>}
                        </div>
                        <div className="w-4/5">
                            <input {
                                ...register("bill",
                                    {
                                        required: "Please Enter Billing Amount ",
                                        valueAsNumber: true
                                    })
                            }
                                type="number"
                                placeholder="Billing Amount"
                                className="input input-bordered focus:outline-none w-full" />
                            {errors.bill && <span className="text-error capitalize">{errors.bill.message}</span>}
                        </div>
                        <button className="btn btn-success">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
