import { useEffect,useState } from "react";
import UsuarioService from "@/services/UsuarioService";
import loadingGif from "@/public/loader.gif";
import Image from "next/image";
import estaLogado from "@/functions/estaLogado";
import CabecalhoProgresso from "../Progresso/CabecalhoProgresso";
import RankCabecalho from "../Progresso/RankCabecalho";
export default function ProgressoPage() {
    const usuarioService = new UsuarioService();
    const [usuario,setUsuario] = useState({})
    const [loading , setLoading] = useState(true)
    const [categoria , setCategoria] = useState('')
    var usuarioLogado  = estaLogado();
    useEffect(()=> {    
        async function obterUsuario() {
            try {
                const user = await usuarioService.obterUsuario()
                setUsuario(user.data)
                setLoading(false)

            } catch(error) {
                alert(error)
                setLoading(false)
            }
        }   
        obterUsuario();
    },[])

      
      console.log(categoria)
    return (
        <div className="progressoContainer">
            {loading ? (
                <Image src={loadingGif} width={80}/>
            ) : (
                <>  
                {usuarioLogado  === false ? (
                    <h1>Faça Login Antes</h1>
                ) : (
                        <>
                        <CabecalhoProgresso usuario={usuario}/>
                            <div>
                                <RankCabecalho usuario={usuario}/>
                            </div>
                    </>
                )}
                </>
            )
            }
        </div>
    )
}