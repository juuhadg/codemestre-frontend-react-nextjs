import estaLogado from '@/functions/estaLogado.js';
import ProgressoPage from '../components/ProgressoPage/ProgressoPage.js';
export default function progresso() {
    return (
        <ProgressoPage estaLogado = {estaLogado}/>
    )
}