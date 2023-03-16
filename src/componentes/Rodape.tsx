import { useNavigate } from "react-router-dom"
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes"

const Rodape = () => {
    const participantes = useListaDeParticipantes()

    //const navegarPara = useNavigate()

    return (<footer>
        <button disabled={participantes.length < 3}>Iniciar brincadeira</button>
    </footer>)
}

export default Rodape