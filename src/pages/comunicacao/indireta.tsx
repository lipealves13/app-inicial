import Avo from "@/components/comunicacao/direta/Avo";
import Contador from "@/components/comunicacao/indireta/Contador";

export default function indireta() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-5xl mb-10">Comunicação indireta</h1>
            <div className="flex gap-5">
                <Contador />
                <Contador />
                <Contador />
            </div>
        </div>
    )
}