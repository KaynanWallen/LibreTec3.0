import logo from '../../public/img/logomini.png'
import locked from '../../public/img/locked.png'
import { VerificarLogin } from '../services/routes';
import { useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate()
    return (
        <>
            <main className="w-screen h-screen login-page flex justify-around items-center">
                <section className="w-[1280px] h-[700px] bg-[#005C6D] flex flex-row">
                    <div className="w-full flex flex-col justify-between">
                        <div className='p-5 flex flex-row items-center gap-5'>
                            <img src={logo} className='w-[100px]'/>
                            <h3 className='text-2xl text-white font-semibold'>Libre-Tec</h3>
                        </div>

                        <div className='flex flex-col items-center h-full pt-10 gap-4'>
                            <h3 className='text-4xl text-white font-bold'>Bem Vindo de Volta</h3>
                            <p className='text-white font-semibold'>Faça o Login e acesse o sistema</p>
                        </div>

                        <div className='flex justify-center items-center p-5'>
                            <p className='text-white font-semibold'>{"<Desenvolvido Por Kaynan Wallen e Caio />"}</p>
                        </div>
                    </div>

                    <div className="w-full bg-[#D9D9D9] flex flex-col items-center">
                        <div className='w-full flex flex-row justify-between items-end p-5'>
                            <h1 className='text-[40px] text-[#005c6d] font-bold'>Entrar</h1>
                            <img src={locked} className='w-[100px]'/>
                        </div>

                        <div  className='w-[500px] h-auto  mt-10 flex flex-col items-center gap-5'>
                            <input className='w-[450px] h-[60px] shadow-border-shadow rounded-xl p-3 text-4xl' type='text' placeholder='Usuario' id='Usuario'/>
                            <input className='w-[450px] h-[60px] shadow-border-shadow rounded-xl p-3 text-4xl' type='text' placeholder='Senha' id='Senha'/>
                            <p className='text-[#005c6d] text-[20px]'>Esqueceu sua senha?</p>
                            <section className='w-full flex justify-start items-start'>
                                <button className='w-[200px] h-[60px] bg-[#005c6d] rounded-xl text-white font-bold text-[24px]' onClick={() => {
                                    VerificarLogin(navigate)
                                }}> Entrar </button>
                            </section>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )

}

export default Login