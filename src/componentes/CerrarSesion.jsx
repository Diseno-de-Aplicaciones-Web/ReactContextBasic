import { useContext } from "react"
import { Contexto } from "../App"

function CerrarSesion() {

    const [ usuario, setUsuario ] = useContext(Contexto)

    function manexadorClick() {
        setUsuario("Manolo")
    }

    return(
        <div>
            <button onClick={manexadorClick}>Cerrar sesión de {usuario}</button>
        </div>
    )
}

export default CerrarSesion