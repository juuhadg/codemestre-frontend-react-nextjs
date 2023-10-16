import ConteudoCs from "./ConteudoCs";

import React, { useState } from 'react';
export default function CsPage() {
    const [conteudo, setConteudo] = useState(null);

    return (
    <>
        <div className="content">
        <div className="navbar">
        <div className="card">
  <span>Iniciante</span>
  <div className="card__container">
   <p className="element" onClick={()=>setConteudo(1)}>Tipos de Dados em C#</p>
   <p className="element" onClick={()=>setConteudo(2)}>Função Main</p> 
   <p className="element" onClick={()=>setConteudo(3)}>Formal definition</p> 
   <p className="element" onClick={()=>setConteudo(4)}>Formal syntax</p> 
   <p className="element" onClick={()=>setConteudo(5)}>Examples</p> 
   <p className="element" >See also</p> 
  </div>
</div>
    </div>
    <div className="conteudoContainer">
        <ConteudoCs assuntoSelecionado={conteudo}/>
    </div>
    </div>
    </>
    )
}