import Image from "next/image";
import logo from '../../public/CodeMestreIcon.png';
import { useRouter } from 'next/router'


export default function  CabecalhoUsuario() {
    const estaLogado = false
    const router = useRouter()
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

                            <button onClick={()=>{router.push('/login')}}>Entrar</button>
                            </div>
                    )
                    
                    }
                
         
            
        </div>
        </>
    )
}