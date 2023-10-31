import { GoogleLogin } from "@react-oauth/google"
import { useState } from "react";
import UploadImagem from "../uploadImagem/uploadImagem";
import ImagemAvatar from '../../public/avatar.svg'
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
export default function CadastroPage() {
    const router = useRouter()
const [imagem, setImagem] = useState(null);
const [nome, setNome] = useState("");
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [confirmacaoSenha, setconfirmacaoSenha] = useState("");

useEffect(() => {
       
    document.body.classList.add('login');
   

    
    return () => {
      document.body.classList.remove('login');
    };
  }, []); 

  const aoSubmeter = (e) => {
   e.preventDefault();
   let info = {
    avatar: imagem,
    nome : nome,
    email : email,
    senha : senha

   }
   console.log(info)
  }


    return (
        <>
             
       <div className="paginaLogin">
        <div className="loginContainer">
           <form className="formCadastro" onSubmit={aoSubmeter}>
            <h1>Cadastre-se</h1>
           <UploadImagem
    imagemPreviewClassName="avatar avatarPreview"
    imagemPreview={imagem?.preview || ImagemAvatar.src}
   setImagem={setImagem}
    />
    <input placeholder="Nome" type="text" onChange={(e)=>setNome(e.target.value)}/>
    <input placeholder="E-mail" type="text" onChange={(e)=>setEmail(e.target.value)}/>
    <input placeholder="Senha" type="password" onChange={(e)=>setSenha(e.target.value)}/>
    <input placeholder="Confirmar a Senha" type="password" onChange={(e)=>setconfirmacaoSenha(e.target.value)}/>
    <button>Cadastrar</button>
           </form>
              
         <div className="botaoGoogle">
         <GoogleLogin
         size="large"
         
    logo_alignment="center"
    auto_select={false}
    useOneTap={false}
    width={500}
    text="signup_with"

  onSuccess={credentialResponse => {
    const objetoString = JSON.stringify(credentialResponse, null, 2)
    console.log(objetoString)
    var credencialResposta = jwtDecode(credentialResponse.credential)
    console.log(credencialResposta)
  }}


  onError={() => {
    console.log('Login Failed');
  }}

/></div>
<div><p>Ja possui uma conta? <strong onClick={()=> router.push('/login')}>Fazer Login</strong></p></div>
         </div>
         </div>
       
        </>
    ) }
