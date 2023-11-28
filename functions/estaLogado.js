import UsuarioService from '@/services/UsuarioService'

export default function estaLogado() {
    var estaLogado = false
  const usuarioService = new UsuarioService();
  if(typeof window !== 'undefined') {

      const usuarioData = usuarioService.obterInfoUsuarioLogado()
      console.log(usuarioData)
          if(usuarioData.id !== null ) {

             estaLogado=true
            
          } 
          else {

            estaLogado=false
        
          }

  }
  return estaLogado;
}