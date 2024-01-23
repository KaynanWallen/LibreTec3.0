import logolibretec from '/img/logomini.png';
import { useNavigate  } from 'react-router-dom';
import iconUserBook from '/img/userbook.png';
import iconUserPratileiras from '/img/iconscollumn.png';
import iconBook from '/img/iconsbook.png';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { VerificarLogin } from '../services/routes';
import { useEffect } from 'react';


function Home() {
    const navigate = useNavigate();
    return (
        <>
            <main className="w-full h-full grid grid-cols-3 grid-rows-2 gap-2 bg-cinza-claro items-center justify-items-center" >
                <section className="w-[250px] h-[250px] bg-white shadow-border-shadow rounded-xl flex flex-col justify-evelyn items-center cursor-pointer" onClick={() => {
                    navigate("/dashboard/emprestar")
                }}>
                    <img className='w-9/12' src={iconUserBook} alt='logo da loja' />
                    <p className='text-center text-azul-claro font-bold text-4xl'>Emprestar</p>
                </section>

                <img className='w-[250px] h-[250px]' src={logolibretec} alt='logo da loja' />

                <section className="w-[250px] h-[250px] bg-white shadow-border-shadow rounded-xl flex flex-col justify-evenly items-center cursor-pointer" onClick={() => {
                    navigate("/dashboard/incluir")

                }}>
                    <img className='w-8/12' src={iconUserPratileiras} alt='logo da loja' />
                    <p className='text-center text-azul-claro font-bold text-3xl'>Incluir/ Atualizar</p>
                </section>

                <section className="w-[250px] h-[250px] bg-white shadow-border-shadow rounded-xl flex flex-col justify-evenly items-center cursor-pointer" onClick={() => {
                   navigate("/dashboard/devolver")

                }}>
                    <img className='w-9/12' src={iconUserBook} alt='logo da loja' />
                    <p className='text-center text-azul-claro font-bold text-[26px]'>Devolver/ Renovar</p>
                </section>

                <section className="w-[250px] h-[250px] bg-white shadow-border-shadow rounded-xl flex flex-col justify-evenly items-center cursor-pointer" onClick={() => {
                   navigate("/dashboard/biblioteca")

                }}>
                    <img className='w-7/12' src={iconBook} alt='logo da loja' />
                    <p className='text-center text-azul-claro font-bold text-3xl'>Biblioteca</p>
                </section>

                <section className="w-[250px] h-[250px] bg-white shadow-border-shadow rounded-xl flex flex-col justify-evenly items-center cursor-pointer" onClick={() => {
                   navigate("/dashboard/remover")

                }}>
                    <img className='w-8/12' src={iconUserPratileiras} alt='logo da loja' />
                    <p className='text-center text-azul-claro font-bold text-3xl'>Remover Livro</p>
                </section>
            </main>
        </>
    )
}

export default Home