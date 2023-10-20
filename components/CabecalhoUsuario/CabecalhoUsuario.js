import Image from "next/image";
import logo from '../../public/CodeMestreIcon.png';

export default function  CabecalhoUsuario() {
    const estaLogado = true
    return (
        <>
        <div className="cabecalhoUsuarioContainer">
           
                    {estaLogado ? (
                        <div className="informacoesUsuario">
                            <Image src={logo} className="avatar"/>
                                <strong>juuhadg</strong>
                            <div className="textos">
                            <p>Nível 5</p>
                                <progress value="200" max="500"></progress>
                                <p>200xp / 500xp</p>
                             </div>
                            
                        </div>
                    ): (
                        <div className="deslogado">

                            <button>Entrar</button>
                            </div>
                    )
                    
                    }
                
         
            
        </div>
        </>
    )
}