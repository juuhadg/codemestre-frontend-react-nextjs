import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import estaLogado from '@/functions/estaLogado';
import converterParaBase64 from '@/functions/converterParaBase64';
import ProblemaService from '@/services/ProblemaService';
import PrecisaDeLogin from '../PrecisaDeLogin/PrecisaDeLogin';



const InputCodigo = ({
  linguagem,
  codigoInicial,
  descricaoProblema,
  TituloProblema,
  respostaEsperada
  
  
}) => {
  

  const [code, setCode] = useState(codigoInicial);
  var usuarioLogado = estaLogado()
  const problemaService = new ProblemaService();


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

  return (
    <div className='InputCodigoContainer'>
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
      ) : (
       <PrecisaDeLogin/>
      )}

   </div>
  );
};

export default InputCodigo;