import Avo from "@/components/comunicacao/direta/Avo";

export default function direta() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-5xl mb-10">Comunicação direta</h1>
            <Avo nome="Fulano" sobrenome="Ciclano"/>
        </div>
    )
}