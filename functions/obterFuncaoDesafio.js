export default function obterFuncaoDesafio(linguagem,nomeDaFuncao) {
    var funcao = ''
    switch(linguagem) {
        case'javascript':
        funcao = `function ${nomeDaFuncao}(params) {
            return;
        }`; break
        case 'python':
            funcao= `def ${nomeDaFuncao}(params):
                return;
            `; break;
        case 'csharp':
            funcao=`int ${nomeDaFuncao}(int x)
            {
                return;
            }
            `; break;
            default: break;

    }
    return funcao;
}

