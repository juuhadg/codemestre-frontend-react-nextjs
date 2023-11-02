import HttpRequest from "./HttpRequests";

export default class UsuarioService extends HttpRequest{
    async login(credenciais) {
       const { data } = await this.post('/login', credenciais)
      

       localStorage.setItem("nome",data.nome) ;
       localStorage.setItem("email",data.email) ;
       localStorage.setItem("token",data.token) ;

       const usuario = await this.get('/usuario');
       localStorage.setItem('id', usuario.data._id)

       if(usuario.data.avatar){
        localStorage.setItem("avatar",usuario.data.avatar)
       }
    }

    async loginGoogle(tokenGoogle) {
        const {data} = await this.post('/loginGoogle', tokenGoogle)

        localStorage.setItem("nome",data.nome) ;
        localStorage.setItem("email",data.email) ;
        localStorage.setItem("token",data.token) ;
 
        const usuario = await this.get('/usuario');
        localStorage.setItem('id', usuario.data._id)
 
        if(usuario.data.avatar){
         localStorage.setItem("avatar",usuario.data.avatar)
        }

    }

    async obterUsuario() {
        return this.get('/usuario')
    }

    obterInfoUsuarioLogado() {
        return {
            id: localStorage.getItem('id'),
            nome: localStorage.getItem('nome'),
            email: localStorage.getItem('email'),
            avatar: localStorage.getItem('avatar'),
        }
    }



    async cadastro(dados){
return this.post('/cadastro', dados);
    }

estaAutenticado(){
    return localStorage.getItem('token') !== null;
}

async pesquisar(termoDaPesquisa) {
    return this.get('/pesquisa?filtro=' + termoDaPesquisa)
}

obterInfoUsuarioLogado() {
    return {
        id: localStorage.getItem('id'),
        nome: localStorage.getItem('nome'),
        email: localStorage.getItem('email'),
        avatar: localStorage.getItem('avatar'),
    }
}

 

}