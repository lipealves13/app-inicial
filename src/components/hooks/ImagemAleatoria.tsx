import { useState } from "react"

export default function ImagemAleatoria(){
    
    const [pesquisa, setPesquisa] = useState<string>('abstract')
    const [tamanho, setTamanho] = useState<number>(300)
    
    const url = 'https://source.unsplash.com/random/'

    function renderizarBotao(valor: string){
        return(
            <button className={`
                bg-blue-500 px-7 py-3 rounded-md 
            `} onClick={() => {
                setPesquisa(valor)
                console.log(valor)
            }}>
                 {valor}
            </button>
        )
    }

    return(
        <div className="flex flex-col gap-3 border-8 border-zinc-700 p-7 rounded-3xl items-center">
            <div className="flex justify-center gap-7 mb-5">
                <span>{pesquisa}</span>
                <span>{tamanho}x{tamanho}</span>
            </div>
            <img src={`${url}${tamanho}x${tamanho}?${pesquisa}`} height={300} width={300} alt="imagem" 
            className="rounded-md border-8 border-zinc-700"/>
            <div className="flex justify-between gap-5">
                {renderizarBotao('abstract')}
                {renderizarBotao('city')}
                {renderizarBotao('person')}
            </div>
            <div>
                <input type="number" value={tamanho} className="bg-zinc-500 p-2 rounded-md outline-none w-full" 
                onChange={e => {
                    setTamanho(e.target.valueAsNumber)
                }}/>
            </div>

        </div>
    )
}