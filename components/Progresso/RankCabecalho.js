import imgRank from '../../public/CodeMestreIcon.png';
import Image from 'next/image';
export default function RankCabecalho({usuario}) {
    var rank = '';
    if(usuario.level < 10){rank = 'Iniciante';} 
    else if(usuario.level < 20){rank = 'Intermediário';} 
    else if(usuario.level < 30){rank = 'Mestre';} 
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