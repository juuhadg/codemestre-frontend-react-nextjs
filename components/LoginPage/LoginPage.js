import { useState,useEffect } from "react"

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
                    <div>
                        <label>Nome : </label>
                        <input  className = 'inputLogin' type="text" placeholder="Nome" value={nome} onChange={e=>{setNome(e.target.value)}}/>
                    </div>
                    <div>
                        <label>E-mail : </label>
                        <input  className = 'inputLogin' type="text" placeholder="Email" value={email} onChange={e=>{setEmail(e.target.value)}}/>
                    </div>
                    <div>
                        <label>Senha : </label>
                        <input  className = 'inputLogin' type="password" placeholder="Senha" value={senha} onChange={e=>{setSenha(e.target.value)}}/> </div>

                    <button className="botaoEnviar" type="submit">Enviar</button>
                </form>
         </div>
         </div>
       
         
        </>
    )
}