import Evento from "@/components/basicos/Eventos";

export default function eventos() {
    return(
        <div className="flex flex-wrap justify-center items-center h-screen bg-gray-700">
            <Evento />
            <Evento />
            <Evento />
        </div>
    )
}