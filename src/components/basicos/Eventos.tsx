export default function Evento(){

    let contador = 0
    function incrementar(){
        console.log(contador++)
    }
    return(
        <button className="{`
        h-20 w-64 m-7 rounded-full bg-gradient-to-r from-purple-500 to-red-500
        flex justify-center items-center text-white font-bold text-2xl
        `}" onClick={incrementar}>
            
            <p>Eventos</p>
        </button>
    )
}