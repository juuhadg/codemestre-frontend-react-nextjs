import UsuarioService from "@/services/UsuarioService";
import { useState,useEffect } from "react";
import loadImg from '@/public/loader.gif';
import Image from "next/image";
import InputCodigo from "../InputCodigo/InputCodigo";


export default function MissaoDiariaComponente() {

    const [dadosUsuario,setDadosUsuario] = useState({});
    const [loading, setLoading] = useState(true)
    const usuarioService = new UsuarioService();

    useEffect(()=> {
            async function obterUsuario() {
                try {   
                    setLoading(true)
                    const usuarioData = await usuarioService.obterUsuario()
                    setDadosUsuario(usuarioData.data)
                    setLoading(false)
                    
                    
                } catch(error) {
                    alert(error.response.data)
                    setLoading(false)
                }
            }
            obterUsuario();
    },[])
    console.log(dadosUsuario)
        return (
            <div className="missaoDiaria">

                {loading ? ( 
                    <Image src={loadImg} width={100}/>
                ) : (

                <div>
                    <h1>Missao Diaria</h1>
                    <strong>{dadosUsuario.missaoDiaria.nome}</strong>
                    <p>{dadosUsuario.missaoDiaria.descricao}</p>

                    <InputCodigo/>

                </div>

                )} 




            </div>
        )
            
}