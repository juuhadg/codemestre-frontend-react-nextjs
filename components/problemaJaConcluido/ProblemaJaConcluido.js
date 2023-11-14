import Image from "next/image";
import imgCheck from '../../public/check.svg'
export default function ProblemaJaConcluido () {
    return (
        <div className="problemaConcluidoContainer">
            <h1>Este Treinamento Ja foi Concluido</h1>
            <h2>Hora de Continuar em Frente!</h2>
            <Image src={imgCheck} width={100}/>
        </div>
    )
}