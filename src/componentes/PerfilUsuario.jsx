import { useContext } from "react"
import { Contexto } from "../App"
import CerrarSesion from "./CerrarSesion"

function PerfilUsuario() {

    const [ usuario ] = useContext(Contexto)

    return(
        <div>
            <h3>Perfil de {usuario}</h3>
            <CerrarSesion/>
        </div>
    )
}

export default PerfilUsuario