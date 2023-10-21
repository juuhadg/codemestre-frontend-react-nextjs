import CardBasico from "../CardBasico/CardBasico";
import Image from 'next/image'
import pythonIcon from '../../public/pythonIcon.svg'
import javascriptIcon from '../../public/javascriptIcon.svg'
import csharpIcon from '../../public/csharpIcon.svg'

export default function PageConteudos() {
    return (
        <>
        <div className="primeiraVezContainer">
        <h1>Nunca Programou Antes ?</h1>
         <p>Antes de Continuar na sua Jornada de Conteúdos , veja essa<strong> aula Introdutória</strong></p>
         <p>para te ajudar a instalar e entender o básico das<strong className="strongAzul"> ferramentas necessárias para programação</strong> e </p>
         <p>se situar no básico sobre o modo de <strong>funcionamento da programação e sua lógica</strong>, pois isso serve para <strong>Todas as Linguagens.</strong></p>
         <p>Se você possui 0 experiência em programação, comece por aqui para não ficar perdido na sua Jornada.</p>
         <button>Começar</button>
        </div>
            <h1 className="titulo2">Se Já Possui o Treinamento Inicial e tem suas ferramentas prontas para batalha :</h1>
        <div className="CardsIniciais">
            <div className="cardbox">
                <div className="cardboxTitulo">
            <Image src={pythonIcon} alt="Icone Python"/>
               <h2>Python</h2>
            </div>
                <ul>
                    <li> <strong>Escrita e Sintaxe Muito Simples</strong> </li>
                    <li> <strong>Tipagem Dinâmica boa para iniciantes</strong> </li>
                    <li> <strong>Poderosa para Automações e criação de Scripts</strong> </li>
                    <li> <strong>Muito Boa para Dados e Machine Learning</strong> </li>
                </ul>
                <section className="botao">
                    <button>Comece Aprender Pyton</button>
                 </section>
            </div>
            <div className="cardbox">
            <div className="cardboxTitulo">
                <Image src={javascriptIcon} alt="Icone Python"/>
                <h2>JavaScript</h2>
            </div>
            <ul>
                    <li> <strong>Escrita e Sintaxe Simples </strong> </li>
                    <li> <strong>Tipagem Dinâmica boa para iniciantes</strong> </li>
                    <li> <strong>A Melhor e mais Utilizada para Desenvolvimento Web</strong> </li>
                    <li> <strong>Linguagem ótima para começar FullStack</strong> </li>
                </ul>
                <section className="botao">
                    <button>Comece Aprender JavaScript</button>
                 </section>

                
            </div>
            <div className="cardbox">
            <div className="cardboxTitulo">
                <Image src={csharpIcon} alt="Icone Python"/>
                <h2>C#</h2>
            </div>
            <ul>
                    <li> <strong>Escrita e Sintaxe Completas</strong> </li>
                    <li> <strong>Tipagem Estática ótima para aprender como tipos de dados funcionam</strong> </li>
                    <li> <strong>Perfeita para APIs e Integrações com Banco de Dados</strong> </li>
                    <li> <strong>Linguagem ótima para Backend</strong> </li>
                </ul>
                <section className="botao">
                    <button>Comece Aprender C#</button>
                 </section>
            </div>
        </div>
        </>
    )
}