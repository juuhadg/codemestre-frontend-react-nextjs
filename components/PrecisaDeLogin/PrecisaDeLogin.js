import CodeBox from "../CodeBox/CodeBox";
import blocked from '../../public/blockedGreen.svg';
import Image from "next/image";
import { useRouter } from "next/router";


export default function PrecisaDeLogin() {
    const router = useRouter();
    return (
        <>
        <div className="precisaDeLoginDiv">
            <div className="texto">
                <div className="content">

                <Image src={blocked} alt='sinal de bloqueado' width={100}/>
                <h1>Para Concluir Desafios é Necessário Login !</h1>
                <button onClick={()=>router.push('/login')}>Entrar Agora</button>
                </div>
            </div>
            <div className="code">
            <CodeBox codigo={
                `
                namespace MeuPrograma
                {
                    class Programa
                    {
                        static void Main()
                        {
                            string frase = "Hello World!";
                            Console.WriteLine(frase);
                            //resultado : Hello World!
                        }
                    }
                }
                `
            }/>
            </div>
            
        </div>
        </>
    )
}