// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// set fetch using function getData
async function getData() {
    const res = await fetch('http://localhost:3002/api/menus', { cache: 'no-cache' })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Page() {

    const resData = await getData()
    const data = resData.data.menu
    const isNull = (data.length == 0) ? true : false
    console.log(data)

    const handleCreateOrder = (event) => {

    }

    const handleChangeInput = (input) => {
        console.log(input)
    }
    return (
        <main className="container">
            <div className="row">
                <div className='col-12 py-5'>
                    <h2>Simple Restaurant</h2>
                </div>

                <div className='col-12'>
                    <h5 className='py-3'>Daftar Menu</h5>

                    <div className='mb-3'>
                        <table className='table table-bordered mb-0'>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Menu</th>
                                    <th>Price</th>
                                    <th>Jumlah Pesanan</th>
                                </tr>
                            </thead>

                            <tbody>

                                {(!isNull) ?
                                    data.map((menu, index) =>
                                    (
                                        <tr key={menu.id}>
                                            <td>{index + 1}</td>
                                            <td>{menu.name}</td>
                                            <td>Rp. {menu.price}</td>
                                            <td><input onChange={handleChangeInput()} type='number' id={'menu-' + menu.id} placeholder='enter count your order' /></td>
                                        </tr>
                                    )
                                    ) : (<td colSpan={4} className='text-center'>No Data Menu. Please post data menu using API menu.</td>)
                                }
                            </tbody>
                        </table>
                    </div>

                    {(!isNull) ? <button id='setOrder' className='btn btn-primary' onClick={handleChangeInput()}>Order Now</button> : ''}
                </div>
            </div>
        </main>
    )
}