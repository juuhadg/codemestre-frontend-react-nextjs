import { useEffect,useState } from "react";
import UsuarioService from "@/services/UsuarioService";
import loadingGif from "@/public/loader.gif";
import Image from "next/image";
import estaLogado from "@/functions/estaLogado";
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
                    <div>
                        <img src={usuario.avatar} width={80} height={80}/>
                        <h1>{usuario.nome}</h1>
                        <h1> Nivel {usuario.level}</h1>
                        <h1>Total de Problemas Resolvidos : {usuario.
NumeroDeproblemasResolvidos}</h1>
            <h1>{usuario.level <= 10 ? 'Novato' : usuario.level > 10 < 20 ? 'Intermedário' : 'Mestre'}</h1>
                            <div>
                                <h1>Linguagens</h1>
                                <p>C# : {usuario.problemasResolvidosPorLinguagem.csharp}</p>
                                <p>Python : {usuario.problemasResolvidosPorLinguagem.python}</p>
                                <p>Javascript : {usuario.problemasResolvidosPorLinguagem.javascript}</p>
                            </div>
                    </div>
                )}
                </>
            )
            }
        </div>
    )
}