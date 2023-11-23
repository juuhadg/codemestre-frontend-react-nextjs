import UsuarioService from "@/services/UsuarioService"
import { useEffect , useState} from "react"
import imgLoading from '@/public/loader.gif'
import defaultImg from '@/public/avatar.svg'
import Image from "next/image";
export default function RankingPage() {
    const usuarioService = new UsuarioService();
    const [ranking , setRanking] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        async function obterRanking() {
            setLoading(true);
            try {

                let rankList = await usuarioService.obterRanking();
                
                    setRanking(rankList.data)
                    setLoading(false)
            } catch(error) {
                console.log(error)
            }
        }
        obterRanking();
        console.log(ranking)
    },[])


    return (
        <>
            <div className="rankingContainer">
        {loading ? (<>
            <Image src={imgLoading} width={100} height={100}/>
        </>) :
        
        ( <>
            <h1>Top Rankings</h1>
            {ranking?.map(user => (
                <div className="usuario" key={user.rank}>
                    <strong className="rankNum">{user.rank}</strong>
                    <section className="userInfo">

                    <img src={user.avatar != undefined ? user.avatar : defaultImg} width={40} height={40}/>
                    <strong>{user.nome}</strong>
                    
                    </section>

                    <section className="userStats">
                        <p>Nivel  <strong>{user.nivel}</strong></p>
                        <p>Problemas Resolvidos  <strong>{user.problemasResolvidos}</strong></p>
                    </section>
                    
                </div>
            ))}
            </>
            )}
       
            </div>
        </>
    )
}