export default function converterParaBase64(conteudo) {
    const respostaBuffer = Buffer.from(conteudo, 'utf-8');
const resultadoBase64 = respostaBuffer.toString('base64');

    return(resultadoBase64)
}