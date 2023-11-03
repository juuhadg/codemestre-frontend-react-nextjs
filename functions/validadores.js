export default function validadores(dados) {
    var result = {
     senhaValida : true,
     emaiValido :true,
     confirmarSenhaValida: true
    }
    
    if(!dados) {
        result.senhaValida = false
        result.emaiValido = false
        result.confirmarSenhaValida = false
    }


    if(!dados.senha|| dados.senha.length < 7) {
        result.senhaValida = false
    }

    if(!dados.email || !dados.email.includes('@') || !dados.email.includes('.') || dados.email.length < 10) {
        result.emaiValido = false
    }
    if(dados.confirmarSenha != dados.senha) {
        result.confirmarSenhaValida = false
    }

    return result 

    
}