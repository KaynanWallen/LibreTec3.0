import logoetec from '/img/etec.png';
import { PageContext } from '../context/Page';
import { useContext } from 'react';


function Header() {
    const [PageState, dispatch] = useContext(PageContext);
    return (
        <>
            <header className="w-100 h-[150px] bg-azul-claro grid grid-cols-3 items-center justify-items-center">
                <img className='w-[125px]' src={logoetec} alt='logo da etec' onClick={() => {
                    dispatch({ type: 'PageInicial' })
                }}/> 
                <h3 className='text-6xl font-bold text-white '>Libre-Tec</h3>
                <div className='w-[250px] h-[100px] bg-white'>
                </div>
            </header>
        </>
    )

}

export default Header