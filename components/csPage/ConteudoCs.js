import React from 'react';
import ConteudoCs1 from '@/Conteudos/cs1';
import ConteudoCs2 from '@/Conteudos/cs2';


function ConteudoCs({ assuntoSelecionado }) {
  let conteudo = null;

  switch (assuntoSelecionado) {
    case 1:
      conteudo =  <ConteudoCs1/>
            
   

            
            
            
            
     
      break;
    case 2:
      conteudo = <>
         <ConteudoCs2/>
      </>
      break;
    case 3:
      conteudo = <div>Conteúdo do Assunto 3</div>;
      break;
      case 4:
        conteudo = <div>Conteudo 4</div>;
        break;
        case 5:
        conteudo = <div>Conteudo 5</div>;
        break;
    default:
      conteudo = <div>Selecione um assunto na barra lateral.</div>;
  }

  return (
    <div className="conteudo">
      {conteudo}
    </div>
  );
}

export default ConteudoCs;
