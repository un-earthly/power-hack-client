import useTotalPrice from '../hooks/useTotalPrice'

export default function Header() {
    const [total] = useTotalPrice()
    // console.log(total)
    return (
        <nav className='flex items-center justify-between mx-auto py-3 px-20 bg-base-300'>
            <h1 className="text-lg font-bold uppercase">Power <span className="text-info">Hack</span></h1>
            <h1 className="uppercase font-semibold">Paid Total:{total}</h1>
        </nav>
    )
}
