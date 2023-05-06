import Botoes from "./Botoes";
import Display from "./Display";

export default function Contador() {
    return (
        <div className="flex flex-col border border-white rounded-xl p-2">
            <Display valor={100}  />
            <Botoes />
            
        </div>
    )
}