import pythonIcon from '@/public/pythonIcon.svg';
import javascriptIcon from '@/public/javascriptIcon.svg';
import csharpIcon from '@/public/csharpIcon.svg';
import Image from 'next/image';

export default function ProgressoLinguagens({linguagens}) {

        function obterIcone(nome) {
            switch(nome) {
                case 'csharp':
                    return csharpIcon;
                 case 'javascript':
                    return javascriptIcon;
                    case'python':
                        return pythonIcon;
                        default:
                        break;   

            }
        }



    const chaves = Object.keys(linguagens);
    const valores = Object.values(linguagens);
    const paresChaveValor = chaves.map((chave, index) => ({ chave, valor: valores[index] }));


paresChaveValor.sort((a, b) => b.valor - a.valor);

const maiorLinguagem = {
           resolvidos: paresChaveValor[0].valor,
           icon: obterIcone(paresChaveValor[0].chave),
}
const segundaMaiorLinguagem = {
    resolvidos: paresChaveValor[1].valor,
    icon: obterIcone(paresChaveValor[1].chave),
}
const TerceiraMaiorLinguagem = {
    resolvidos: paresChaveValor[2].valor,
    icon: obterIcone(paresChaveValor[2].chave),
}


    return (
        <><div>
        <h1>Linguagens</h1>
        <div className="linguagensContainer">

            <section className='linguagemMenor'>
                <Image src={segundaMaiorLinguagem.icon} width={100} alt='icone Linguagem Progamação'/>
                <p>{segundaMaiorLinguagem.resolvidos}</p>
            </section>

            <section className='linguagemMaior'>
                <Image src={maiorLinguagem.icon} width={200} alt='icone Linguagem Progamação'/>
                <p>{maiorLinguagem.resolvidos} resolvidos</p>
            </section>

            <section className='linguagemMenor'>
            <Image src={TerceiraMaiorLinguagem.icon} width={100} alt='icone Linguagem Progamação'/>
                <p>{TerceiraMaiorLinguagem.resolvidos}</p>
            </section>
        </div>
        </div>
        </>
    )
}