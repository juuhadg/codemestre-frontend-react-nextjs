import React, { useState,useEffect } from 'react';
import Editor from '@monaco-editor/react';
import estaLogado from '@/functions/estaLogado';
import converterParaBase64 from '@/functions/converterParaBase64';
import ProblemaService from '@/services/ProblemaService';
import PrecisaDeLogin from '../PrecisaDeLogin/PrecisaDeLogin';
import UsuarioService from '@/services/UsuarioService';



const InputCodigo = ({
  linguagem,
  codigoInicial,
  descricaoProblema,
  TituloProblema,
  respostaEsperada
  
  
}) => {
  

  const [code, setCode] = useState(codigoInicial);
  const [usuario, setUsuario] = useState({});
  var usuarioLogado = estaLogado()
  const problemaService = new ProblemaService();
  const usuarioService = new UsuarioService();

  useEffect(()=>{
    async function ObterInfo () {
      try {
       const user = await usuarioService.obterUsuario();
        setUsuario(user.data)
        
      } catch(error) {
        console.log(error)
      }
    }

    ObterInfo();
    
 
  },[])

  console.log(usuario)
  function handleEditorChange(value, event) {
    setCode(value)
  }

 
 async function aoEnviar() {
  console.log("ENVIUANDOP")
    const codigoConvertido = converterParaBase64(code);
   
    try{
      await problemaService.executeCode({
        linguagemUsada: linguagem,
        codigo: codigoConvertido,
        problema: TituloProblema,
        respostaEsperada: respostaEsperada
      })
      alert("SUCESSO!")

    }catch(error) {
      console.log(error)
    }

    
  }



  const editorStyle = {
    borderRadius: '15px'
  }
  
  const editorOptions = {
    minimap : {enabled:false}
  }
  Editor.theme = 'vs-dark'

  if(usuario.problemasResolvidos) {   var indice = usuario.problemasResolvidos.indexOf(TituloProblema); }

  
  return (
    <div className='InputCodigoContainer'>

    { usuario.problemasResolvidos && indice != -1 ?(
      <>
      <h1>Voce Ja Solucionou Este Problema!<br></br> Pode Partir para o Próximo</h1>
      </>
    ) : (
      <>
      {usuarioLogado ? (<>
      <p>{descricaoProblema}</p>
           <Editor
           height="35vh"
         defaultLanguage={linguagem}
         defaultValue={codigoInicial}
         onChange={handleEditorChange}
         theme='vs-dark'
         style={editorStyle}
         options={editorOptions}
         
      />
      <button onClick={aoEnviar}>Enviar</button></>
      ) :(
       <PrecisaDeLogin/>
      )}
    </>
    )}  



      

   </div>
  );
};

export default InputCodigo;