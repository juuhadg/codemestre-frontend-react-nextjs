import { obterRankUsuario } from '@/functions/obterRankUsuario';
import Image from 'next/image';


export default function RankCabecalho({nivel}) {
   
        const rankAtualDoUsuario = obterRankUsuario(nivel);
        const rank = rankAtualDoUsuario.rank;
        const imgRank = rankAtualDoUsuario.img

       

   
    return (
        <>
        <div className="rankContainer">
            <h1>Rank</h1>
            <Image src={imgRank}/>
            <h2>{rank}</h2>

        </div>
        </>
    )
}