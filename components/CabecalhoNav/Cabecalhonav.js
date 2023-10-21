import { useRouter } from "next/router"

export default function CabecalhoNav() {
    
    const router = useRouter(); 

        const irAoLink = (destino) => {
                router.push(`/${destino}`)
            }
    return (

            
       
            <div className="navContainer">
                <div className="conteudoNav">
                <p onClick={()=>irAoLink('conteudos')}>Conteúdos</p>
                <p onClick={()=>irAoLink('desafios')} >Desafios</p>
                <p onClick={()=>irAoLink('progresso')} >Progresso</p>
                <p onClick={()=>irAoLink('ranking')} >Ranking</p>
                </div>
            </div>
            
       
    )
}
