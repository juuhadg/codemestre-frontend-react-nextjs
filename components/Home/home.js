import Image from 'next/image'
import iconPergaminho from '../../public/iconPergaminho.svg'
import iconNinja from '../../public/iconNinja.svg'
import iconMestre from '../../public/iconMestre.svg'
export default function Home() {
    return (
        <>
      

      <main>
   
        <div className="cardDeCima">
            <h1>Torne-se um mestre da programação</h1>
      <p>Nossos mestres estão aqui para guiá-lo em um caminho de conhecimento e maestria.</p>
      <h2>De Graça.</h2>
        </div>
        <div className="cardInformacoes">
          <h2>Treine como um Ninja, Vire um Mestre.</h2>
          <ul>
            <li>Conteúdos em Diversas Linguagens</li>
            <li>Aprenda com Exemplos</li>
            <li>Problemas e Desafios ao fim de Cada Lição</li>
            <li>Evolua a Cada Conteúdo Estudado</li>
            <li>Suba seu Nível e suas Maestrias ao solucionar Desafios</li>
          </ul>
          <button>Comece A Sua Jornada</button>
        </div>
          <div className="cardInformacoes2">
              <h1>Aprenda, Pratique, Evolua</h1>
              <h2>Treine como um Ninja e Evolua seu Nível em Programação de Novato á um verdadeiro Mestre</h2>
              <h1>Como Funciona?</h1>
              <div className="comoFuncionaBox">
                <div className='item'>
                  <Image src={iconPergaminho}/>
                  <h2>Aprendizagem</h2>
                  <p>Explore recursos de aprendizagem que o levarão pelo caminho para dominar<br></br> as habilidades que apenas os mestres ninja da programação possuem.</p>
                  </div>
                <div className='item'>
                  <Image src={iconNinja}/>
                  <h2>Treinamento</h2>
                  <p>Aprimore suas habilidades com exercícios práticos desafiadores.<br></br> A prática constante é o segredo para alcançar a maestria.</p>
                </div>  
                <div className='item'>
                  <Image src={iconMestre}/>
                  <h2>Evolução</h2>
                  <p>Suba seu Nível de Habilidade a cada treinamento,<br></br> torne-se um Mestre nas suas linguagens preferidas.</p>
                  <p>A Jornada para chegar ao topo não é fácil.<br></br> somente a dedicação cria Mestres Lendários</p>
                  </div>
              </div>
          </div>
      </main>
    
    </>
    )
}