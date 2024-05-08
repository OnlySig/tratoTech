import NavBar from "../../components/NavBar"
import { Outlet } from "react-router-dom"

const PaginaPadrao = () => {
    return (
        <>
            <NavBar/>
            
            <Outlet/>
        </>
    )
}

export default PaginaPadrao