import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import estaLogado from '@/functions/estaLogado';
import converterParaBase64 from '@/functions/converterParaBase64';
import ProblemaService from '@/services/ProblemaService';



const InputCodigo = ({
  linguagem,
  codigoInicial,
  
  
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
        linguagemUsada: "csharp",
        codigo: codigoConvertido,
        problema: "csharp aula 2",
        respostaEsperada: "Olá Mundo!"
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
        <h1>Faça Login para poder resolver os Desafios e subir seu nível na programação</h1>
      )}

   </div>
  );
};

export default InputCodigo;