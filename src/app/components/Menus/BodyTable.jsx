import RowList from "./RowList"

const BodyTable = async () => {
    const base_url = 'http://localhost:3002/api/menus'

    const fetchData = await fetch(base_url, { cache: 'no-cache' })
    const responseData = await fetchData.json()
    const listMenu = responseData.data.menu
    console.log(listMenu)

    return (
        <>
            <tbody>
                {listMenu.map((menu, index) => (
                    <RowList key={menu.id}>
                        <td>{index + 1}</td>
                        <td>{menu.name}</td>
                        <td>Rp. {menu.price} </td>
                        <td><input type="number" className="input-food-order" id={'menu-' + menu.id} placeholder="enter count your order" />
                        </td>
                    </RowList>
                ))}
            </tbody>
        </>
    )
}

export default BodyTable