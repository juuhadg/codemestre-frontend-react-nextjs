import Image from "next/image";
import imgNinja from '../../public/iconNinja.svg'

export default function TituloDesafio() {
    return (
       
        <div className="TituloDesafio">
            <Image src={imgNinja} width={200} height={200}/>
            <h1>Hora do seu Treinamento</h1>
            <p>Abaixo Você deve escrever o código como visto no conteúdo de uma forma que escreva no console o resultado desejado!</p> <p>Seu código vai ser testado em nosso servidor e se conseguir concluir a Missão ganhará xp !</p>
            
            
        </div>
       
    )
}