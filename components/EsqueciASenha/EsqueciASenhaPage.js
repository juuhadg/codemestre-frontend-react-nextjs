import { useEffect,useState } from "react";
import UsuarioService from "@/services/UsuarioService";
import validadores from "@/functions/validadores";
export default function EsqueciASenhaPage() {

    const [estaSubmetendo,setEstaSubmetendo] = useState(false);
    const [email,setEmail] = useState('')
    const usuarioService = new UsuarioService();
    

    useEffect(() => {
       
        document.body.classList.add('login');
       
    
        
        return () => {
          document.body.classList.remove('login');
        };
      }, []); 


      async function aoSubmeter (e) {
        e.preventDefault()

        const validado = validadores({email:email})
        if (validado.emaiValido === false) return alert('E-mail Invalido');
      
        try {
            await usuarioService.esqueciASenha({email:email})
            
        } catch(error) {
            alert(error)
        }
        
            
      }


    return (
        <>
        <div className="esqueciASenhaPage">
            <div className="esqueciASenhaContainer">

                    <h1>Por Favor Informe seu E-Mail Cadastrado na Conta</h1>
                <div className="titulos">
                    <p>Seu link para a redefinição da senha será enviado para este email</p>
                </div>

                <form onSubmit={aoSubmeter}>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <button type="submit">Enviar</button>
                </form>

            </div>
        </div>
        </>

    )
}