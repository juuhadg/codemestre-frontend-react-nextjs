import { useState,useEffect } from "react"
import { GoogleLogin } from '@react-oauth/google'
import jwtDecode from "jwt-decode"



export default function LoginPage() {
    const [nome,setNome] = useState('')
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')


    useEffect(() => {
       
        document.body.classList.add('login');
       
    
        
        return () => {
          document.body.classList.remove('login');
        };
      }, []); 



    return (
        <>
        
       <div className="paginaLogin">
        <div className="loginContainer">
            <h1>Faça Seu Login !</h1>
                <form onSubmit={()=>{console.log('enviado form')}}>
                   
                        <label>Nome : </label>
                        <input  className = 'inputLogin' type="text" placeholder="Nome" value={nome} onChange={e=>{setNome(e.target.value)}}/>
                   
                 
                        <label>E-mail : </label>
                        <input  className = 'inputLogin' type="text" placeholder="Email" value={email} onChange={e=>{setEmail(e.target.value)}}/>
                  
                  
                        <label>Senha : </label>
                        <input  className = 'inputLogin' type="password" placeholder="Senha" value={senha} onChange={e=>{setSenha(e.target.value)}}/> 

                    <button className="botaoEnviar" type="submit">Enviar</button>
                </form>
         <h1>Ou</h1>
         <h2>Entrar com Google</h2>
         <div className="botaoGoogle">
         <GoogleLogin
         size="large"
         
    logo_alignment="center"
    auto_select={false}
    useOneTap={false}
    width={500}
  onSuccess={credentialResponse => {
    var credencialResposta = jwtDecode(credentialResponse.credential)
    console.log(credencialResposta)
  }}


  onError={() => {
    console.log('Login Failed');
  }}

/>;</div>
         </div>
         </div>
       
         
        </>
    )
}