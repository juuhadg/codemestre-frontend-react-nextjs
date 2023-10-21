import Image from "next/image";
import logo from '../../public/CodeMestreLogo.png';
import CabecalhoUsuario from "../CabecalhoUsuario/CabecalhoUsuario";
import CabecalhoNav from "../CabecalhoNav/Cabecalhonav";
export default function Cabecalho() {
    
    

    return (
        <>
        <header className="cabecalhoContainer">
            <CabecalhoNav/>
            <div className="imgContainer">
                <a href="/">
                    <Image src={logo}/>
                </a>
            </div>
           <CabecalhoUsuario/>
        </header>
        
        </>
    )
}