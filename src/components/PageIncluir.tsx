import iconemprestar from '/img/iconemprestar.png';
import atualizar from '/img/botaoatualizar.png';
import adicionar from '/img/botaoadicionar.png';
import search from '/img/search.png';
import { AdicionarBok, AtualizarBook, SearchAtualizarBook } from '../services/routes';

function PageIncluir() {
    return (
        <>
            <main className='w-full h-full bg-cinza-claro'>
                <form className='w-full h-full grid grid-cols-3 pb-[100px] pt-[20px] items-center justify-items-center font-bold text-azul-claro overflow-auto'>
                    <div className='w-[400px] h-[70px] rounded-xl bg-white flex flex-row justify-center items-center'>
                        <input className='w-[350px] h-[70px] rounded-xl p-3 text-4xl' type='text' placeholder='Tombo Atual:' id='Tombo_Atual'/>
                        <div className='w-[50px] h-[50px] bg-azul-claro rounded-xl cursor-pointer p-2' onClick={() => {
                            SearchAtualizarBook()
                        }}>
                            <img src={search} alt='icons pesquisar'/>
                        </div>
                    </div>
                    <input className='w-[400px] h-[70px] shadow-border-shadow rounded-xl p-3 text-4xl' type='text' placeholder='Tombo Antigo:' id='Tombo_Antigo'/>
                    <input className='w-[400px] h-[70px] shadow-border-shadow rounded-xl p-3 text-4xl' type='text' placeholder='Autor:' id='Autor'/>
                    <input className='w-[400px] h-[70px] shadow-border-shadow rounded-xl p-3 text-4xl' type='text' placeholder='Titulo:' id='Titulo'/>
                    <input className='w-[400px] h-[70px] shadow-border-shadow rounded-xl p-3 text-4xl' type='text' placeholder='Doador:' id='Doador'/>
                    <input className='w-[400px] h-[70px] shadow-border-shadow rounded-xl p-3 text-4xl' type='text' placeholder='Data:' id='Data'/>
                    <input className='w-[400px] h-[70px] shadow-border-shadow rounded-xl p-3 text-4xl' type='text' placeholder='Editora:' id='Editora'/>
                    <input className='w-[400px] h-[70px] shadow-border-shadow rounded-xl p-3 text-4xl' type='text' placeholder='Local:' id='Local'/>
                    <input className='w-[400px] h-[70px] shadow-border-shadow rounded-xl p-3 text-4xl' type='text' placeholder='Ano:' id='Ano'/>
                    <input className='w-[400px] h-[70px] shadow-border-shadow rounded-xl p-3 text-4xl' type='text' placeholder='Código de Barras:' id='Cod_Barras'/>
                    <input className='w-[400px] h-[70px] shadow-border-shadow rounded-xl p-3 text-4xl' type='text' placeholder='Gênero:' id='Genero'/>
                    <input className='w-[400px] h-[70px] shadow-border-shadow rounded-xl p-3 text-4xl' type='text' placeholder='Código de Class:' id='Cod_Class'/>
                    <input className='w-[400px] h-[70px] shadow-border-shadow rounded-xl p-3 text-4xl' type='text' placeholder='Arquivo:' id='Arquivo'/>
                    <input className='w-[400px] h-[70px] shadow-border-shadow rounded-xl p-3 text-4xl' type='text' placeholder='Cutter:' id='Cutter'/>
                    <input className='w-[400px] h-[70px] shadow-border-shadow rounded-xl p-3 text-4xl' type='text' placeholder='Palavras Chave:' id='Palavra_Chave'/>
                    <div className='w-[400px] h-[70px] flex flex-col justify-center items-center gap-4'>
                      <label className='font-bold text-azul-claro text-3xl'>Aquisição:</label>
                      <div className='flex flex-row gap-4'>
                        <div className='flex flex-col justify-center items-center'>
                            <input className='w-[15px] h-[15px]' type='radio' name='Aquisicao' id='Aquisicao' value='Doacao'/>
                            <p className='text-azul-claro text-xl font-semibold'> Doação </p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <input className='w-[15px] h-[15px]' type='radio' name='Aquisicao' id='Aquisicao'  value='FNDE'/>
                            <p className='text-azul-claro text-xl font-semibold'> FNDE </p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <input className='w-[15px] h-[15px]' type='radio' name='Aquisicao' id='Aquisicao'  value='Compra'/>
                            <p className='text-azul-claro text-xl font-semibold'> Compra </p>
                        </div>
                      </div>
                    </div>
                </form>
            </main>

            <section className='w-[225px] h-[100px] bg-cinzento absolute end-[40px] bottom-24 shadow-border-shadow rounded-xl grid grid-cols-2 items-center justify-items-center'>
                <div className='w-[75px] h-[75px] bg-white rounded-xl shadow-border-shadow2 flex justify-center items-center'>
                    <img className='w-9/12' src={atualizar} alt='logo da loja' onClick={() => AtualizarBook()}/>
                </div>

                <div className='w-[75px] h-[75px] bg-white rounded-xl shadow-border-shadow2 flex justify-center items-center'>
                    <img className='w-9/12' src={adicionar} alt='logo da loja' onClick={() => AdicionarBok()}/>
                </div>
            </section>
        </>
    )
}

export default PageIncluir