export default function Caixa(props: any) {
    return (
        <div className={`
            bg-red-600 rounded-xl h-24 w-72 text-7xl text-white font-light
            flex justify-center items-center
        `}>
            <p>{props.argumento}</p>
        </div>
    )
}