import UsuarioService from "@/services/UsuarioService";
import { useEffect , useState} from "react";
import imgLoading from '@/public/loader.gif';
import AvatarImg from '@/public/avatar.svg';
import Image from "next/image";
import { obterRankUsuario } from "@/functions/obterRankUsuario";
export default function RankingPage() {
    const usuarioService = new UsuarioService();
    const [ranking , setRanking] = useState([]);
    const [loading, setLoading] = useState(true)
    const [nomeUsuario, setNomeUsuario] = useState(true)

  

    useEffect(()=> {
        async function obterRanking() {
            setLoading(true);
            try {

                let rankList = await usuarioService.obterRanking();
                console.log(rankList.data)

                rankList.data.forEach(rank=> {
                    let rankingStats = obterRankUsuario(rank.nivel);
                    rank.imgRank = rankingStats.img;
                    rank.titulo = rankingStats.rank;
                })

                    setRanking(rankList.data)
                    setLoading(false)
            } catch(error) {
                console.log(error)
                setLoading(false)
            }
        }
        obterRanking();
        setNomeUsuario(localStorage.getItem('nome')) ;
        
        
     
    },[])

    function usuarioEIgualOLogado(nome) {
        if (nomeUsuario === nome) return ' usuario usuarioLogado';

            return 'usuario';
    }

       function handleAvatar (avatar) {
            if (avatar && avatar != null && avatar.length > 5) return avatar;

                return AvatarImg;
       }



    return (
        <>
            <div className="rankingContainer">
        {loading ? (<>
            <Image src={imgLoading} width={100} height={100} alt="Loading Icon"/>
        </>) :
        
        ( <>
            <h1>Top Rankings</h1>
            {ranking?.map(user => (
                
                <div className={usuarioEIgualOLogado(user.nome)}  key={user.rank}>
                    <strong className="rankNum">{user.rank}</strong>
                    <section className="userInfo">

                    <Image src={handleAvatar(user.avatar)} width={40} height={40} alt="Avatar do Usuario"/>
                    <strong>{user.nome}</strong>
                    
                    
                    </section>

                    <section className="userStats">
                        <p>Nivel  <strong>{user.nivel}</strong></p>
                        <p>Problemas Resolvidos  <strong>{user.problemasResolvidos}</strong></p>
                    </section>
                        <div className="rankImg">
                            <strong>{user.titulo}</strong>
                            <Image src={user.imgRank} alt="rankNinja Icon" width={60}/>
                        </div>
                    
                </div>
            ))}
            </>
            )}
       
            </div>
        </>
    )
}