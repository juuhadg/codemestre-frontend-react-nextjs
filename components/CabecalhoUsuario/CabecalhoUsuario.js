import Image from "next/image";
import logo from '../../public/CodeMestreIcon.png';
import { useRouter } from 'next/router'
import UsuarioService from "@/services/UsuarioService";
import { useEffect } from "react";
import { useState } from "react";
import imgAvatar from '../../public/avatar.svg';
import imgLoad from '../../public/loader.gif';
import missaoDiariaIcon from '@/public/diariaIcon.svg';
import fogo from '@/public/fogo.svg';
import fogoCinza from '@/public/fogoCinza.svg';
import { useReload } from "@/context/reloadContext";
export default function  CabecalhoUsuario(estaLogado) {
    const router = useRouter()
    const usuarioService = new UsuarioService();
    const [isLoading,setIsLoading] = useState(false)
    const [usuario,setUsuario] = useState(null)
    const [mostrarDescricao,setMostrarDescricao] = useState(false)
  
          
    async function getUsuario() {
        if(estaLogado.estaLogado.estaLogado === true) {
            setIsLoading(true)
            const usuarioData = await usuarioService.obterUsuario();
            const user = usuarioData.data
            setIsLoading(false)
            setUsuario(user)
        }
   
    
}
        useEffect( () => {  
                
                    getUsuario();
                    
                
        }, []); 


        const { reload } = useReload();

        useEffect(() => {
            
            if (reload) {
              getUsuario()
            }
          }, [reload]);
    
        
       
        console.log(usuario)
    return (
        <>
        <div className="cabecalhoUsuarioContainer">
        
                        {isLoading === true? (<div style={{ paddingLeft: '50px' }}><Image src={imgLoad} width={50} /></div>) :
                        
                        estaLogado && usuario!= null? (
                            <div className="informacoesUsuario">
                                <img src={usuario.avatar ? usuario.avatar : imgAvatar} className="avatar" alt="avatar do usuario"/>
                                    <div className="nomeENivel">
                                    <strong className="nome">{usuario.nome}</strong>
                                <strong className="nivel">Nível {usuario.level}</strong>
                                </div>

                                {usuario.missaoDiaria && (
                                    <div className="missaoDiariaContainer">

                                        <button onClick={()=> router.push('/missaoDiaria')}>
                                        <Image src={missaoDiariaIcon}/>
                                        Missao Diaria Disponível!</button>

                                    </div>
                                )}

                                
                                    <div className="streakContainer" onMouseEnter={()=>setMostrarDescricao(true)} onMouseLeave={()=>setMostrarDescricao(false)}> 
                                        <Image src={usuario.streak >= 1  ? fogo : fogoCinza}/>
                                        <strong>{usuario.streak}</strong>
                                        {mostrarDescricao && (
                                            <strong className="descricao">Streak de Missoes Diarias</strong>
                                        )}
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
    )}
