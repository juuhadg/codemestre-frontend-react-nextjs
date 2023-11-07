import Image from "next/image";
import logo from '../../public/CodeMestreIcon.png';
import { useRouter } from 'next/router'
import UsuarioService from "@/services/UsuarioService";
import { useEffect } from "react";
import { useState } from "react";
import imgAvatar from '../../public/avatar.svg';
import imgLoad from '../../public/loader.gif';
export default function  CabecalhoUsuario(estaLogado) {
    const router = useRouter()
    const usuarioService = new UsuarioService();
    const [isLoading,setIsLoading] = useState(false)
    const [usuario,setUsuario] = useState(null)
  
          
        useEffect( () => {
            async function getUsuario() {
                if(estaLogado.estaLogado.estaLogado === true) {
                    setIsLoading(true)
                    const usuarioData = await usuarioService.obterUsuario();
                    const user = usuarioData.data
                    setIsLoading(false)
                    setUsuario(user)
                }
           
            
    }
                
                    getUsuario();
                    
                
        }, []); 
        
       
        console.log(usuario)
    return (
        <>
        <div className="cabecalhoUsuarioContainer">
        
                        {isLoading === true? (<div style={{ paddingLeft: '50px' }}><Image src={imgLoad} width={50} /></div>) :
                        
                        estaLogado && usuario!= null? (
                            <div className="informacoesUsuario">
                                <img src={usuario.avatar != null ? usuario.avatar : imgAvatar} className="avatar" alt="avatar do usuario"/>
                                    <strong>{usuario.nome}</strong>
                                <div className="textos">
                                <p>Nível {usuario.level}</p>
                                    <progress value={usuario.xp} max="500"></progress>
                                    <p>{usuario.xp}xp / 500xp</p>
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
