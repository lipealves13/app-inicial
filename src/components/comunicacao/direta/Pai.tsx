import Filho from "./Filho";

interface PaiProps {
    nome: string
    sobrenome: string
}

export default function Pai(props: PaiProps) {
    return (
        <div className="flex gap-5 bg-violet-700 text-yellow-50 border border-white rounded-md p-5">
            <Filho/>
            <Filho/>
        </div>
    )
}