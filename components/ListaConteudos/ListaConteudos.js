import React from "react";
export default function ListaConteudos({setar}) {                                 
        return (
            <>
           <div class="card">
  <span>Iniciante</span>
  <div class="card__container">
   <p class="element" onClick={()=>setar(1)}>Sintaxe Basica</p>
   <p class="element" onClick={()=>setar(2)}>Função Main</p> 
   <p class="element" onClick={()=>setar(3)}>Formal definition</p> 
   <p class="element" onClick={()=>setar(4)}>Formal syntax</p> 
   <p class="element" onClick={()=>setar(5)}>Examples</p> 
   <p class="element" >See also</p> 
  </div>
</div>
            </>
        )
}