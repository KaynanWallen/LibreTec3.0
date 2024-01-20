import iconemprestar from '/img/iconemprestar.png';
import renovar from '/img/botaorenovar.png';
import adicionar from '/img/botaoadicionar.png';
import { EmprestarBook } from '../services/routes';

function PageEmprestar () {
    return (
        <>
            <main className='w-full h-full flex justify-center items-center gap-[150px] bg-cinza-claro'>

                <img className='h-[600px]' src={iconemprestar} alt='logo da loja' />

                <section className='w-[550px] h-[580px] '>
                    <form className='w-full h-full flex flex-col items-center gap-[32px] text-azul-claro font-bold overflow-auto'>
                        <input className='w-[500px] min-h-[70px] shadow-border-shadow rounded-xl p-3 text-4xl' type='text' placeholder='Tombo Atual:' id='Tombo_Atual' required/>
                        <input className='w-[500px] min-h-[70px] shadow-border-shadow rounded-xl p-3 text-4xl' type='text' placeholder='Emprestado Por:' id='Entrega'/>
                        <input className='w-[500px] min-h-[70px] shadow-border-shadow rounded-xl p-3 text-4xl' type='text' placeholder='Nome:' id='Nome'/>
                        <input className='w-[500px] min-h-[70px] shadow-border-shadow rounded-xl p-3 text-4xl' type='text' placeholder='Turma:' id='Turma'/>
                        <input className='w-[500px] min-h-[70px] shadow-border-shadow rounded-xl p-3 text-4xl' type='text' placeholder='Periodo:' id='Periodo'/>
                        <input className='w-[500px] min-h-[70px] shadow-border-shadow rounded-xl p-3 text-4xl' type='text' placeholder='Data Retirada:' id='Data_Retirada'/>
                        <input className='w-[500px] min-h-[70px] shadow-border-shadow rounded-xl p-3 text-4xl' type='text' placeholder='Data Devolução:' id='Data_Devolucao'/>
                    </form>
                </section>


            </main>

            <section className='w-[225px] h-[100px] bg-cinzento absolute end-[40px] bottom-24 shadow-border-shadow rounded-xl grid grid-cols-2 items-center justify-items-center'>
                <div className='w-[75px] h-[75px] bg-white rounded-xl shadow-border-shadow2 flex justify-center items-center'>
                    <img className='w-9/12' src={renovar} alt='logo da loja' />
                </div>

                <div className='w-[75px] h-[75px] bg-white rounded-xl shadow-border-shadow2 flex justify-center items-center'>
                    <img className='w-9/12' src={adicionar} alt='logo da loja' onClick={() => EmprestarBook()}/>
                </div>
            </section>
        </>
    )
}

export default PageEmprestar