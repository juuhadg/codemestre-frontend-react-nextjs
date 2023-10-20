export default function MenuLinguagensv1() {
    return (
        <>
             <section className="primeiraLinguagemContainer">
        <h1>É A Sua Primeira Vez?</h1>
            <h2>Selecione sua Primeira Linguagem a Aprender:</h2>
            <ul className="listaLinguagens">
                <a href="/cs"><li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" /><p>C#</p></li></a>
                <a href="python"><li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
            <p>Python</p>
         </li> </a>
                <a href="java"><li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
          <p>Java</p></li></a>
              <a href="javascript"><li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <p>Javascript</p></li></a>
            </ul>
        </section> 

        </>
    )
}