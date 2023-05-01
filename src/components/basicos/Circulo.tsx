interface CirculoProps {
    argumento: string
    quasePerfeito?: boolean
}

export default function Circulo(props:CirculoProps) {
    return (
        <div className={`
            h-20 w-64 m-7 rounded-full bg-gradient-to-r from-purple-500 to-red-500
            text-3xl text-bold text-white 
            ${props.quasePerfeito ? 'rounded-2xl' : `rounded-full`}
            flex justify-center items-center
        `}>
            <p>{props.argumento}</p>
        </div>
    )
}