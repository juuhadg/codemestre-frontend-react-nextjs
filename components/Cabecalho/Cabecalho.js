import Image from "next/image";
import logo from '../../public/CodeMestreLogo.png';
import CabecalhoUsuario from "../CabecalhoUsuario/CabecalhoUsuario";
import CabecalhoNav from "../CabecalhoNav/Cabecalhonav";
import { useRouter } from "next/router";
export default function Cabecalho(estaLogado) {
    
    const router =useRouter();

    return (
        <>
        <header className="cabecalhoContainer">
            <CabecalhoNav/>
            <div className="imgContainer">
              
                    <Image src={logo} onClick={()=> router.push('/')}/>
              
            </div>
           <CabecalhoUsuario estaLogado={estaLogado}/>
        </header>
        
        </>
    )
}