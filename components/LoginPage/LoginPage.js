import { useState,useEffect } from "react";
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from "jwt-decode";
import LoginForm from "./loginForm";
import { useRouter } from 'next/router'




export default function LoginPage() {
    const [nome,setNome] = useState('')
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')
  
    const router = useRouter()

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
           
                <LoginForm/>
         <h2>Entrar com Google</h2>
         <div className="botaoGoogle">
         <GoogleLogin
         size="large"
         
    logo_alignment="center"
    auto_select={false}
    useOneTap={false}
    width={500}

  onSuccess={credentialResponse => {
    const objetoString = JSON.stringify(credentialResponse, null, 2)
    console.log(objetoString)
    var credencialResposta = jwtDecode(credentialResponse.credential)
    console.log(credencialResposta)
  }}


  onError={() => {
    console.log('Login Failed');
  }}

/>;</div>
<div><p>Ainda não tem uma conta? <strong onClick={()=> router.push('/cadastro')}>Cadastre-se</strong></p></div>
         </div>
         </div>
       
         
        </>
    )
}