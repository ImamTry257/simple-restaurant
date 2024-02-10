'use client'

import $ from 'jquery'
import axios from 'axios'
import Swal from 'sweetalert2'

const OrderFood = () => {

    const handleClick = () => {
        console.log($('input.input-food-order'), $('input#email-order').val())

        // handle if no data email
        const emailInput = $('input#email-order').val()
        if (emailInput == '') {
            alert('You have to input your email')

            $('input#email-order').focus()

            return false
        }

        // set list menu id to json
        const listMenu = []
        $('input.input-food-order').map((index, data) => {

            var menu_id = $(data).attr('id').split('menu-')[1]
            var count = $(data).val()

            listMenu.push(`${menu_id}*${count}`)
        })

        const allListMenu = JSON.stringify(listMenu)
        const email = emailInput
        const statusOrder = 'pending'

        const paramOrder = {
            "list_menu": allListMenu,
            "email": email,
            "status": statusOrder
        }

        // call createOrder function
        createOrder(paramOrder)

    }

    const createOrder = async (paramOrder) => {
        console.log(paramOrder, process.env.BASE_URL_API)
        let urlCreateOrder = 'http://localhost:3011/api/orders/store'

        axios.post(urlCreateOrder, paramOrder)
            .then((response) => {
                console.log(response, 'qqweqwe');
                if (response.status == 201) {
                    Swal.fire({
                        title: "Order",
                        text: "Create Order Successfully",
                        icon: "success"
                    }).then(() => {
                        // window.location.reload()
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <>
            <button id='setOrder' className='btn btn-primary' onClick={handleClick}>Order Now</button>
        </>
    )
}

export default OrderFood