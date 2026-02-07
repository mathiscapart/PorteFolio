import mathisLogo from '../assets/mathis_style_notion-removebg.png'
import { Line } from './Line'

export function Profil() {
    return (
        <>
            <div className="flex items-center justify-center my-10 mx-30">
                <img
                    src={mathisLogo}
                    alt="Mathis Logo"
                    className="w-100 h-100 mb-4"
                />
                <div className="ml-10 flex flex-col justify-center">
                    <h1 className="!text-9xl font-bold font-['Paytone_One',_sans-serif] p-5 text-center">HELLO !</h1>
                    <p className="text-3xl text-black font-light p-5">Je m’appelle Mathis & je suis Architecte en système d’information junior.</p>
                    <p className="text-lg text-black max-w-3xl p-5">Étudiant en 4ème année d'informatique à l'Ecole-IT basé à Valenciennes. Férue d’informatique, je suis motivé, dynamique et sérieux dans ce que j’entreprends. Je suis actuellement chez Doublet depuis plus de 2 an.</p>
                </div>
            </div>
            <Line largeur={50} />
        </>
    )
}
