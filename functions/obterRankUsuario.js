import novato from '@/public/ranks/novato.png';
import recruta from '@/public/ranks/recruta.png';
import aspirante from '@/public/ranks/aspirante.png';
import ninja from '@/public/ranks/ninja.webp';
import veterano from '@/public/ranks/veterano.webp';
import mestre from '@/public/ranks/mestre.png';
import lenda from '@/public/ranks/lenda.webp';
import graomestre from '@/public/ranks/graomestre.png';

export function obterRankUsuario(nivel) {

    const ranksData = [
        { min: 0, max: 4, rank: 'Novato', img: novato },
        { min: 5, max: 9, rank: 'Recruta', img: recruta },
        { min: 10, max: 14, rank: 'Aspirante', img: aspirante },
        { min: 15, max: 19, rank: 'Ninja', img: ninja },
        { min: 20, max: 24, rank: 'Veterano', img: veterano },
        { min: 25, max: 29, rank: 'Mestre', img: mestre },
        { min: 30, max: 39, rank: 'Lenda', img: lenda },
        { min: 40, max: 49, rank: 'Mestre', img: graomestre },
        { min: 50, max: Infinity, rank: 'Grão-Mestre', img: graomestre }
    ];

    let rankDoUsuario = ranksData.find(rank => nivel >= rank.min && nivel <= rank.max);

    return rankDoUsuario

}