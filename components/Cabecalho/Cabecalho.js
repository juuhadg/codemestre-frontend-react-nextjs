import Image from "next/image";
import logo from '../../public/CodeMestreLogo.png';
import CabecalhoUsuario from "../CabecalhoUsuario/CabecalhoUsuario";
export default function Cabecalho() {
    
    

    return (
        <>
        <header className="cabecalhoContainer">
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