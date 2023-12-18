import React, { useState,useEffect } from 'react';
import Editor from '@monaco-editor/react';
import estaLogado from '@/functions/estaLogado';
import converterParaBase64 from '@/functions/converterParaBase64';
import ProblemaService from '@/services/ProblemaService';
import PrecisaDeLogin from '../PrecisaDeLogin/PrecisaDeLogin';
import UsuarioService from '@/services/UsuarioService';
import ProblemaJaConcluido from '../problemaJaConcluido/ProblemaJaConcluido';
import Image from 'next/image';
import loadingGif from '@/public/loader.gif';



const InputCodigo = ({
  linguagem,
  codigoInicial,
  descricaoProblema,
  TituloProblema,
  respostaEsperada,
  missaoDiaria,
  

  
}) => {
  
  


  const [code, setCode] = useState(codigoInicial);
  const [usuario, setUsuario] = useState({});
  const [loading, setLoading] = useState(true)
  var usuarioLogado = estaLogado()
  const problemaService = new ProblemaService();
  const usuarioService = new UsuarioService();

  useEffect(()=>{
    async function ObterInfo () {
      try {
       const user = await usuarioService.obterUsuario();
        setUsuario(user.data)
        setLoading(false)
        
      } catch(error) {
        console.log(error)
        setLoading(false)
      }
    }

    ObterInfo();
 
    
 
  },[])

  console.log(usuario)
  function handleEditorChange(value, event) {
    setCode(value)
  }




 
 async function aoEnviar() {
    setLoading(true)
    const codigoConvertido = converterParaBase64(code);
   
    if(!missaoDiaria) {

      try{
        await problemaService.executeCode({
          linguagemUsada: linguagem,
          codigo: codigoConvertido,
          problema: TituloProblema,
          respostaEsperada: respostaEsperada
        })
        alert("Problema Resolvido com Sucesso !");
        setLoading(false)  
        return ( <>
          <dialog>Parabens!</dialog>
        </>)
      }catch(error) {
        console.log(error)
        setLoading(false)
      }
    }
     else {
        try {
           setLoading(true)
            await problemaService.enviarMissaoDiaria({
              linguagemUsada:linguagem,
              codigo:codigoConvertido
            });
            setLoading(false)
            return ( <>
              <dialog>Parabens!</dialog>
            </>)
            
        } catch(error) {
            alert(error.response.data);
            setLoading(false)
        }
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
      {loading ? (<Image src={loadingGif} width={120}/>) : (<>

    { usuario.problemasResolvidos && indice != -1 ?(
      <ProblemaJaConcluido/>
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
      </>)}



      

   </div>
  );
};

export default InputCodigo;

