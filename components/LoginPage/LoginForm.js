import UsuarioService from "@/services/UsuarioService";
import { useState } from "react";
import { useRouter } from "next/router";
const usuarioService = new UsuarioService();

export default function LoginForm() {
  const [email,setEmail] = useState("") ;
  const [senha,setSenha] = useState("") ;
  const [estaSubmetendo,setEstaSubmetendo] = useState(false) ;
  const router = useRouter()
  const aoSubmeter = async (e) => {
    e.preventDefault();
    setEstaSubmetendo(true);
    try {
     await usuarioService.login({
        login: email,
        senha: senha
      })
      
      router.push('/')
      
     
    } catch(error) {
      console.log(error)
    }
    setEstaSubmetendo(false);
  }

    return (
        <>
        
  <div id="form-ui">
    <form id="form" onSubmit={aoSubmeter}>
      <div id="form-body">
        <div id="welcome-lines">
          <div id="welcome-line-1">Login</div>
          <div id="welcome-line-2">Bem-Vindo de Volta</div>
        </div>
        <div id="input-area">
          <div class="form-inp">
            <input placeholder="E-mail" type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
          </div>
          <div class="form-inp">
            <input placeholder="Senha" type="password" value={senha} onChange={e=>setSenha(e.target.value)}/>
          </div>
        </div>
        <div id="submit-button-cvr">
          <button id="submit-button" type="submit" disabled={estaSubmetendo}>Login</button>
        </div>
        <div id="forgot-pass">
          <a href="#">Esqueceu sua senha?</a>
        </div>

        
        
      </div>
    </form>

        


    </div>
  
        </>
    )
}