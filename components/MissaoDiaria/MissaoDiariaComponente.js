import UsuarioService from "@/services/UsuarioService";
import {React, useState,useEffect } from "react";
import loadImg from '@/public/loader.gif';
import Image from "next/image";
import InputCodigo from "../InputCodigo/InputCodigo";
import imgDiaria from '@/public/diariaIcon.svg';
import Router, { useRouter } from "next/router";
import obterFuncaoDesafio from "@/functions/obterFuncaoDesafio";


export default function MissaoDiariaComponente() {

    const [dadosUsuario,setDadosUsuario] = useState({});
    const [loading, setLoading] = useState(true)
    const [linguagemEscolhida,setLinguagemEscolhida] = useState('javascript')
    const [codigoInicial,setCodigoInicial] = useState('')
    const usuarioService = new UsuarioService();

    const router = useRouter();

    useEffect(()=> {
            async function obterUsuario() {
                try {   
                    setLoading(true)
                    const usuarioData = await usuarioService.obterUsuario()
                    setDadosUsuario(usuarioData.data)
                    setLoading(false)
                    setCodigoInicial(obterFuncaoDesafio('javascript', dadosUsuario.missaoDiaria.nomeDaFuncao))
                    
                    
                } catch(error) {
                    alert(error.response.data)
                    setLoading(false)
                }
            }
            obterUsuario();
        },[])

        function onLinguagemEscolhidaChange(e) {
            setLinguagemEscolhida(e.target.value.toLowerCase())
            setCodigoInicial(obterFuncaoDesafio(linguagemEscolhida,dadosUsuario.missaoDiaria.nomeDaFuncao))
           
        }


       

        
        return (
            <div className="missaoDiaria">

                {loading ? ( 
                    <Image src={loadImg} width={100} alt="loading gif"/>
                ) : (

                <div> 

                        {!dadosUsuario.missaoDiaria ?  (
                            <div>
                                <h1>Concluída!</h1>
                                <h2>Parece que voce ja resolveu sua missao de hoje, volte amanhã para mais treinamentos!</h2>
                                <button onClick={()=>router.push('/')}>Voltar </button>
                            </div>
                        ) : (
                            <>
                                    <Image src={imgDiaria} width={80} height={80} className="imgDiariaIcon" alt="missao diaria svg"/>
                    <h1 className="h1Missao">Missao Diaria</h1>
                    <p>Aqui está sua missão diária, resolva para ganhar mais XP do que nos desafios e problemas comuns. Mantenha sua streak !</p>
                    <strong className="titulo">{dadosUsuario.missaoDiaria.nome}</strong>
                    <p>{dadosUsuario.missaoDiaria.descricao}</p>

                    <div className="test">
                        <select className="escolherLinguagem" onChange={onLinguagemEscolhidaChange}>
                            
                            <option value="Javascript" className="opcaoLinguagem">Javascript</option>
                            <option value="CSharp" className="opcaoLinguagem">CSharp</option>
                            <option value="Python" className="opcaoLinguagem">Python</option>
                    </select></div>
                    <InputCodigo
                        linguagem={linguagemEscolhida}
                        missaoDiaria={true}
                        codigoInicial={codigoInicial}
                        
                    />
                            </>
                        )
                        }
                    

                </div>

                )} 




            </div>
        )
            
}