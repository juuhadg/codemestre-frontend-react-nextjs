import { GoogleLogin } from "@react-oauth/google"
import { useState } from "react";
import UploadImagem from "../uploadImagem/uploadImagem";
import ImagemAvatar from '../../public/avatar.svg'
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
import UsuarioService from "@/services/UsuarioService";
import validadores from "@/functions/validadores";





export default function CadastroPage() {


    const router = useRouter()
const [imagem, setImagem] = useState(null);
const [nome, setNome] = useState("");
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [confirmacaoSenha, setconfirmacaoSenha] = useState("");
const [estaSubmetendo, setEstaSubmetendo] = useState(false);
const usuarioService = new UsuarioService();

useEffect(() => {
       
    document.body.classList.add('login');
   

    
    return () => {
      document.body.classList.remove('login');
    };
  }, []); 

  const aoSubmeter = async (e) => {
      
   e.preventDefault();
   setEstaSubmetendo(true)

   let dados = {
    email:email,
    senha:senha,
    confirmarSenha: confirmacaoSenha
   }

   var result = validadores(dados)

   if((result.senhaValida || result.confirmarSenhaValida || result.emaiValido) === false) {
    return;
   }

   let cadastroForm = new FormData()
   console.log(imagem)
   if(imagem!=null) { cadastroForm.append('file' , imagem.arquivo)}
   cadastroForm.append('nome' , nome)
   cadastroForm.append('email' , email)
   cadastroForm.append('senha' , senha)
   try{
      await usuarioService.cadastro(cadastroForm)

      await usuarioService.login({
        email:email,
        senha:senha
      })
      router.push('/')

      setEstaSubmetendo(false)

   } catch(error) {
    alert('Erro ao Cadastrar! : ' + error.response.data.erro)
    console.log(error.response.data.erro)
    setEstaSubmetendo(false)
   }

      setEstaSubmetendo(false)

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
    <button type="submite" disabled={aoSubmeter}>Cadastrar</button>
           </form>
              
         <div className="botaoGoogle">
         <GoogleLogin
         size="large"
         
    logo_alignment="center"
    auto_select={false}
    useOneTap={false}
    width={500}
    text="signup_with"

  onSuccess={async credentialResponse => {
    var credencialResposta = credentialResponse.credential
    try{
      await usuarioService.cadastroGoogle({tokenGoogle :credencialResposta})
      await usuarioService.loginGoogle({tokenGoogle:credencialResposta})
      router.push('/')

    }catch(error) {
      alert(error.response.data.erro)
      console.log(error)
    }
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
