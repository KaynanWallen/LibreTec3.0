import logoetec from '/img/etec.png';
import { useNavigate  } from 'react-router-dom';
import settings from '/img/settings.png';
import botaosair from '/img/botaosair.png'
import botaoeditar from '/img/botaoeditar.png'
import { Deslogar } from '../services/routes';
import { useState } from 'react';

function Header() {
    const [menu, setMenu] = useState(false)

    function HandleClickMenu(){
        setMenu(!menu)
    }

    const navigate = useNavigate();
    return (
        <>
            <header className="w-100 min-h-[150px] bg-azul-claro grid grid-cols-3 items-center justify-items-center">
                <img className='w-[125px]' src={logoetec} alt='logo da etec' onClick={() => {
                    navigate("/dashboard")
                }}/> 
                <h3 className='text-6xl font-bold text-white '>Libre-Tec</h3>

                {menu ? (<>
                    <div className='w-[250px] h-[90%] bg-cinza-claro rounded-2xl shadow-border-shadow flex flex-col items-end p-2'>
                        <img className='w-[50px] cursor-pointer' src={settings} onClick={() => {
                        HandleClickMenu()
                        }}/>
                        <div className='w-full h-full flex flex-row gap-5'>
                            <section className='w-[70px] h-[70px] bg-white rounded-2xl shadow-border-shadow2 flex justify-center items-center cursor-pointer' onClick={() => {
                                Deslogar(navigate)
                            }}>
                                <img className='w-[80%]' src={botaosair} />
                            </section>

                            <section className='w-[70px] h-[70px] bg-white rounded-2xl shadow-border-shadow2 flex justify-center items-center cursor-pointer'>
                                <img className='w-[80%]' src={botaoeditar} />
                            </section>
                        </div>
                    </div>
                </>) : (
                    <img className='w-[80px] cursor-pointer' src={settings} onClick={() => {
                        HandleClickMenu()
                    }}/>
                )}
            </header>
        </>
    )

}

export default Header