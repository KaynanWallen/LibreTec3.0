import logock from '/img/logock.png';
import conjuntologos from '/img/logos.png';

function Footer() {
    return (
        <>
            <footer className="w-100 h-[100px] bg-azul-claro grid grid-cols-3 items-center justify-items-center">
                <img className='w-[50px]' src={logock} alt='logo da loja' /> 
                <div className='grid grid-rows-2 justify-items-center items-center text-white'>
                    <h3 className='font-bold text-2xl'>Seja Bem Vindo</h3>
                    <p className='w-[400px] text-center font-semibold'>Libre-Tec é um sistema para organização de nosso acervo bibliotecario!</p>
                </div>
                <img className='w-auto' src={conjuntologos} alt='logo da loja' /> 
            </footer>
        </>
    )

}

export default Footer