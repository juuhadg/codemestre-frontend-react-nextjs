export default function CabecalhoProgresso ({usuario}) {
    var js = usuario.problemasResolvidosPorLinguagem.javascript;
    var python = usuario.problemasResolvidosPorLinguagem.python;
    var csharp = usuario.problemasResolvidosPorLinguagem.csharp;
    var linguagemFavorita;

           if (js > python && js > csharp){linguagemFavorita = 'Javascript';}
            else if (python > js && python > csharp){linguagemFavorita='Python'}
            else if (csharp > js && csharp > python){linguagemFavorita='C#'}
            
        
    return (
        <>
        <div className="cabecalhoProgressoContainer">
            <div className="usuario">
            <img src={usuario.avatar} width={140} height={140}/>
           <section> 
            <strong className="nome">{usuario.nome}</strong>
            <strong className="nivel">Nivel {usuario.level}</strong>
                </section>
            <progress value={usuario.xp} max="500"></progress>
            <strong>{usuario.xp}xp / 500xp</strong>
            </div>

            <div className="textos">
            <section>
            <p>Diaria</p>
            <strong>X</strong>
            </section>

            <section>
            <p>Resolvidos</p>
            <strong>{usuario.NumeroDeproblemasResolvidos}</strong>
            </section>

            <section>
            <p>Favorita</p>
            <strong>{linguagemFavorita}</strong>
            </section>
              
               
            </div> 
          
        </div>

        </>
    )
}