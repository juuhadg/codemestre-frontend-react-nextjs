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
           <section> <p className="nome">{usuario.nome}</p>
            <p className="nivel">Nivel {usuario.level}</p>
                </section>
            </div>

            <div className="textos">
                <p>Missao Diaria X</p>
                <p>Problemas Resolvidos :&nbsp; {usuario.NumeroDeproblemasResolvidos}</p>
                <p>Linguagem Favorita : &nbsp;{linguagemFavorita}</p>
            </div>
        </div>

        </>
    )
}