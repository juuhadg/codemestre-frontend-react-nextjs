import PrecisaDeLogin from "@/components/PrecisaDeLogin/PrecisaDeLogin";
import MissaoDiariaComponente from "@/components/MissaoDiaria/MissaoDiariaComponente";
import estaLogado from "@/functions/estaLogado";

export default function missaoDiaria() {
    const usuarioLogado = estaLogado();

    return (
        <>
        <div className="missaoDiariaContainer">
            {!usuarioLogado && (
                <PrecisaDeLogin/>
            )}

            
                <MissaoDiariaComponente/>

        </div>
        </>
    )
}