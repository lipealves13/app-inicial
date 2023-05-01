import Caixa from '../../components/basicos/Caixa'

export default function caixa() {
    return (
        <div className='flex gap-7 p-7'>
            <Caixa argumento="Guri"/>
            <Caixa argumento="Sasque"/>
            <Caixa argumento="Naruto"/>

        </div>
    )
}
