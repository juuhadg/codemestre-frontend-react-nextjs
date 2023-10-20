import React, { useState } from 'react';
import Editor from '@monaco-editor/react';


const InputCodigo = ({
        lingugagem,
        codigoInicial,
        aoEnviar
}) => {
  const [code, setCode] = useState('');
 
  function handleEditorChange(value, event) {
    setCode(value)
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
   <Editor
        height="35vh"
      defaultLanguage={lingugagem}
      defaultValue={codigoInicial}
      onChange={handleEditorChange}
      theme='vs-dark'
      style={editorStyle}
      options={editorOptions}
      
   />
   <button onClick={aoEnviar}>Enviar</button>
   </div>
  );
};

export default InputCodigo;