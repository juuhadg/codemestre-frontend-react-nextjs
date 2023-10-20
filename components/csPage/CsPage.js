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
   <p  className={`element ${conteudo === 1 ? 'selected' : ''}`}  onClick={()=>setConteudo(1)}>Tipos de Dados em C#</p>
   <p  className={`element ${conteudo === 2 ? 'selected' : ''}`} onClick={()=>setConteudo(2)}>Função Main e Primeiro Hello World</p> 
   <p  className={`element ${conteudo === 3 ? 'selected' : ''}`} onClick={()=>setConteudo(3)}>Operações Matemáticas</p> 
   <p  className={`element ${conteudo === 4 ? 'selected' : ''}`} onClick={()=>setConteudo(4)}>Formal syntax</p> 
   <p  className={`element ${conteudo === 5 ? 'selected' : ''}`} onClick={()=>setConteudo(5)}>Examples</p> 
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