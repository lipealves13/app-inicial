import Circulo from "@/components/basicos/Circulo";


export default function circulo() { 
    return (
        <div className="bg-gray-700 flex justify-around items-center p-7 h-screen">
            <Circulo argumento = "Grêmio" quasePerfeito/>
            <Circulo argumento = "Flamengo"/>
            <Circulo argumento = "Corinthians"/>
            <Circulo argumento = "São Paulo"/>
            <Circulo argumento = "Internacional" quasePerfeito/>
            
        </div>
    )
}
