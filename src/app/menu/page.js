// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderTable from '../components/Menus/HeaderTable'
import OrderFood from '../components/Menus/OrderFood'
import BodyTable from '../components/Menus/BodyTable'
import InputEmail from '../components/Menus/InputEmail'

const Page = () => {

    return (
        <main className="container">
            <div className="row">
                <div className='col-12 py-5'>
                    <h2>Demo Simple Restaurant</h2>
                </div>

                <div className='col-12'>
                    <h5 className='py-3'>Daftar Menu</h5>

                    <InputEmail />

                    <div className='mb-3'>
                        <table className='table table-bordered mb-0'>
                            <HeaderTable />

                            <BodyTable />
                        </table>
                    </div>

                    <OrderFood />
                </div>
            </div>
        </main >
    )
}

export default Page